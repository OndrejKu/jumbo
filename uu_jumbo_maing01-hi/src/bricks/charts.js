//@@viewOn:imports
import UU5, { PropTypes } from "uu5g04";
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Charts = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Charts",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    data: PropTypes.dictionary,
    series: PropTypes.dictionary
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    
    return (
      <UU5.Bricks.Row>
        <UU5.SimpleChart.BarChart
          series={props.series}
          data={props.data} 
        />
      </UU5.Bricks.Row>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Charts };
export default Charts;
//@@viewOff:exports
