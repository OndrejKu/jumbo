//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, DynamicLibraryComponent, useState, useMemo } from "uu5g05";
import { useRef } from "uu5g04-hooks";
import "uu5g04-bricks";
import Uu5TilesElements from "uu5tilesg02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import UU5 from "uu5g04";
import CarList from "../bricks/data/car-list.json";
import CarFilter from "../bricks/car-filter.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  mainContainer: () =>
    Config.Css.css({
      padding: "16px 32px"
    }),
  row: () =>
    Config.Css.css({
      padding: "20px 0"
    })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let CarShop = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CarShop",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    function checkCar(car) {
      let show = false;
      if (carMatch("brand", car) && carMatch("fuel", car) && carMatch("model", car)) {
        show = true;
      }
      return show;
    }

    function carMatch(attr, car) {
      if (filter[attr].length === 0 || filter[attr].includes(car[attr])) return true;
      return false;
    }

    const [filter, setFilter] = useState({
      brand: [],
      model: [],
      fuel: []
    });

    const filteredList = useMemo(() => {
      const result = [];
      CarList.forEach((car) => {
        if (checkCar(car)) {
          result.push(car);
        }
      });
      return result;
    }, [filter]);

    const modalRef = useRef();

    function openForm() {
      console.log(modalRef)
      modalRef.current.open();
    }

    return (
      <div>
        <RouteBar />
        <UU5.Bricks.Container>
          <UU5.Bricks.Row className={Css.row()}>
            <h3>List</h3>
            <UU5.Bricks.Button colorSchema="blue" onClick={openForm}>Filter</UU5.Bricks.Button>
            <CarFilter ref={modalRef} />
          </UU5.Bricks.Row>
          <UU5.Bricks.Row className={Css.row()}>
            <Uu5TilesElements.Table data={filteredList} />
          </UU5.Bricks.Row>
        </UU5.Bricks.Container>
      </div>
    );
    //@@viewOff:render
  },
});

CarShop = withRoute(CarShop, { authenticated: true });

//@@viewOn:exports
export { CarShop };
export default CarShop;
//@@viewOff:exports
