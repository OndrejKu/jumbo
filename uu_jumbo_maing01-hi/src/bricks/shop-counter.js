//@@viewOn:imports
import { PropTypes } from "uu5g04";
import { createVisualComponent, Utils, Content, useState, useEffect } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  warning: () => Config.Css.css({
    color: "red"
  })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShopCounter = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShopCounter",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    enabled: PropTypes.bool,
    name: PropTypes.Text,
    limit: PropTypes.number,
    setMainCounter: PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    enabled: true,
    name: "Default name",
    limit: 10
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    const [currentCount, setCurrentCount] = useState(0);

    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShopCounter);

    return <UU5.Bricks.Column width="25%">
              <UU5.Bricks.Card className="uu5-common-padding-s" >
                <UU5.Bricks.Header 
                  colorSchema={ (props.enabled && currentCount !== props.limit) ? "default" : "warning"} 
                  content={props.name} 
                  level="6" 
                  style={'text-align: center'} 
                />
                <UU5.Bricks.Text 
                  className="center"
                >{currentCount}/{props.limit}</UU5.Bricks.Text>
                <Uu5Elements.Button
                  disabled={!props.enabled || currentCount === props.limit}
                  onClick={() => {
                      setCurrentCount(current => current + 1 );
                      props.setMainCounter(current => current + 1);
                    }
                  }>+1</Uu5Elements.Button>
              </UU5.Bricks.Card>
            </UU5.Bricks.Column>
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShopCounter };
export default ShopCounter;
//@@viewOff:exports
