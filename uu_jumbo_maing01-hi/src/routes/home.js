//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, DynamicLibraryComponent } from "uu5g05";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import SummaryBox from "../bricks/summary-box.js";
import BusinessCard from "../bricks/business-card.js";
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

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
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
    const sumBoxList = [
      { text: "Pocet dnu hatchery", value: 45 },
      { text: "Pocet ucastniku", value: 15 },
      { text: "Pocet lektoru", value: 10 },
      { text: "Prumerne hodnoceni", value: 95, unit: "%" },
    ]
    function getSummaryBoxes() {
      const result = []
      sumBoxList.forEach(item => {
        result.push(<SummaryBox text={item.text} value={item.value} unit={item.unit} />);
      });
      return result;
    }

    function handleOnClick() {
      alert("clicked button")
    }

    const chartData = { 
      series: [
        {
          name: "Mobile Systems",
          labelKey: "label",
          valueKey: "value",
          colorSchema: ["light-blue-rich", "green-rich", "red-rich"]
        }
      ],
      data: [
        {
          label: "iOS",
          value: 14
        },
        {
          label: "Android",
          value: 9
        },
        {
          label: "Windows",
          value: 1
        }
      ]
    }

    const tableData = {
      theme: 'allBorders',
      data: [
        [ "Jan Novak", "Nadejny programator z Hronova", "99%" ],
        [ "Jana Smutna", "Nadejna disajnerka z Trebochovic pod Orebem", "100%" ],
        [ "Karel Smutny", "Mene nadejny programator z Pardubic", "78%" ],
      ],
      columns: [
        {
          header: "Name",
          key: "name"
        },
        {
          header: "Bio",
          key: "bio"
        },
        {
          header: "Prubezne hodnoceni",
          key: "hodnoceni",
          highlighted: true
        },
      ]
    }
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div>
        <RouteBar />
        <UU5.Bricks.Container>
          <UU5.Bricks.Row className={Css.row()}>
            {getSummaryBoxes()}
          </UU5.Bricks.Row>
          <UU5.Bricks.Row className={Css.row()}>
            <UU5.Bricks.Column width="60%">
              <h3>Dnesni lektor</h3>
              <BusinessCard image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" name="Lektor Jakub" onClick={handleOnClick} />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column width="40%">  
              <h3>Prubezne hodnoceni dle temat</h3>
              <DynamicLibraryComponent uu5Tag={"UU5.SimpleChart.BarChart"} props={chartData} />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          <UU5.Bricks.Row className={Css.row()}>
            <h3>Studenti</h3>
            <DynamicLibraryComponent uu5Tag={"Uu5TilesBricks.Table"} props={tableData} />
          </UU5.Bricks.Row>
        </UU5.Bricks.Container>
      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
