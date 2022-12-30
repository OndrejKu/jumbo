//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
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

const SummaryBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SummaryBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    text: PropTypes.text,
    value: PropTypes.number,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    unit: ""
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, SummaryBox);

    return (
            <UU5.Bricks.Column width="25%">
              <UU5.Bricks.Card className="uu5-common-padding-s" >
                <UU5.Bricks.Header colorSchema="default" content={props.text} level="6" style={'text-align: center'} />
                <UU5.Bricks.Text className="center">{`${props.value} ${props.unit}`}</UU5.Bricks.Text>
              </UU5.Bricks.Card>
              {/* <Uu5Elements.Block header={props.text} card="full">
                
              </Uu5Elements.Block> */}
            </UU5.Bricks.Column>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SummaryBox };
export default SummaryBox;
//@@viewOff:exports
