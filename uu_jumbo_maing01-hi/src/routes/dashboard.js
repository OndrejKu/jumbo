//@@viewOn:imports
import { Utils, createVisualComponent, useSession, useState } from "uu5g05";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import Charts from "../bricks/charts.js";

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
    }),
  floatLeft: () => 
    Config.Css.css({
      float: "left"
    })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Dashboard = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Dashboard",
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
    const [buttonsSelected, setButtonsSelected] = useState({2016: true, 2017: true, 2018: true, 2019: true, 2020: true, 2021: true});
    //@@viewOff:private

    //@@viewOn:interface
    const series = [
      {
        valueKey: "value",
        name: "Populace (x 100)",
        colorSchema: "blue-rich"
      },
      {
        valueKey: "value2",
        name: "Pocet Narozeni",
        colorSchema: "green-rich"
      },
      {
        valueKey: "value3",
        name: "Pocet Umrti",
        colorSchema: "red-rich"
      }
    ];

    const data = {
      "2016": { label: "2016", value: 10578.000, value2: 112663, value3: 107705},
      "2017": { label: "2017", value: 10610.000, value2: 114405, value3: 111443},
      "2018": { label: "2018", value: 10649.800, value2: 114036, value3: 112920},
      "2019": { label: "2019", value: 10693.900, value2: 112231, value3: 112362},
      "2020": { label: "2020", value: 10701.800, value2: 110200, value3: 129289},
      "2021": { label: "2021", value: 10515.700, value2: 111793, value3: 139891}
    };

    function setSelectedYear(e) {
      console.log(buttonsSelected)
      setButtonsSelected(e.value)
      return e;
    }

    function populateCheckboxes() {
      return Object.keys(data).map(year => {
        return { "label": year, "name": year, "value": buttonsSelected[year] }
      });
    }

    function setInputData() {
      const selectedYears = Object.keys(data).filter(i => buttonsSelected[i]);
      const selectedData = selectedYears.map(year => {
        return data[year]
      });
      return selectedData;
    }
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div>
        <RouteBar />
        <UU5.Bricks.Container>
          <UU5.Bricks.Row>
          <UU5.Forms.Checkboxes
            controlled={true}
            label="Vybrat rozmezi"
            value={populateCheckboxes()}
            onChange={setSelectedYear}
          />
          </UU5.Bricks.Row>
        </UU5.Bricks.Container>
        <UU5.Bricks.Container>
          <Charts data={setInputData()} series={series} />
        </UU5.Bricks.Container>
      </div>
    );
    //@@viewOff:render
  },
});

Dashboard = withRoute(Dashboard, { authenticated: true });

//@@viewOn:exports
export { Dashboard };
export default Dashboard;
//@@viewOff:exports
