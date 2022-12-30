//@@viewOn:imports
import { PropTypes } from "uu5g04";
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

const BusinessCard = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "BusinessCard",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    image: PropTypes.text,
    name: PropTypes.text,
    onClick: PropTypes.func
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

    return <UU5.Bricks.Card className="uu5-common-padding-s">
            <UU5.Bricks.Row>
              <UU5.Bricks.Column width="40%">
              <UU5.Bricks.Image
                src={props.image}
                type="rounded"
                width={200}
              />
              </UU5.Bricks.Column>
              <UU5.Bricks.Column width="60%">
                <h3>{props.name}</h3>
                <UU5.Bricks.Paragraph/>
                <UU5.Bricks.Button colorSchema="blue" style={'float: right;'} onClick={props.onClick}>Kontaktovat</UU5.Bricks.Button>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          </UU5.Bricks.Card>
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { BusinessCard };
export default BusinessCard;
//@@viewOff:exports
