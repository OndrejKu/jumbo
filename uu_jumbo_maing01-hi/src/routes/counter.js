//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, DynamicLibraryComponent, useState, useEffect } from "uu5g05";
import "uu5g04-bricks";
import Uu5Elements from "uu5g05-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import ShopCounter from "../bricks/shop-counter.js";
import UU5 from "uu5g04";

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

let Counter = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Counter",
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
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mainCounter, setMainCounter] = useState(0);
    const [shopList, setShopList] = useState([
      { name: "Tesco", limit: 10 },
      { name: "Albert", limit: 10 },
      { name: "Billa", limit: 30 }
    ]);

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setCurrentTime(date);
      }, 1000)
    }, [])
    //@@viewOff:private

    //@@viewOn:interface
    
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div>
        <RouteBar />
        <UU5.Bricks.Container>
          <UU5.Bricks.Card>
            <UU5.Bricks.Header 
              colorSchema="default" 
              content={currentTime.toLocaleString("cs")} 
              level="1" 
              style={'text-align: center'} 
            />
            <UU5.Bricks.Header 
              colorSchema="default" 
              content={mainCounter} 
              level="3" 
              style={'text-align: center'} 
            />
            <UU5.Bricks.Row className={Css.row()}>
              {shopList.map((shop, index) => (
                <ShopCounter
                  key={index + ""}
                  id={index + ""}
                  limit={shop.limit} 
                  name={shop.name} 
                  enabled={currentTime.getHours() >= 6 && currentTime.getHours() <= 22 } 
                  setMainCounter={setMainCounter} 
                />
                ))
              }
            </UU5.Bricks.Row>
          </UU5.Bricks.Card>
        </UU5.Bricks.Container>
      </div>
    );
    //@@viewOff:render
  },
});

Counter = withRoute(Counter, { authenticated: true });

//@@viewOn:exports
export { Counter };
export default Counter;
//@@viewOff:exports
