//@@viewOn:imports
import { Utils } from "uu5g05";
import { createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import UU5 from "uu5g04";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
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

const CarFilter = createVisualComponentWithRef({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CarFilter",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props, ref) {
    //@@viewOn:private
    const { children } = props;
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
      open: () => {
        console.log(modalRef)
        modalRef.current.open({
          header: "Car Filter",
          content: "Content"
        });
      }
    }));
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return <UU5.Bricks.Modal ref_={modalRef} />;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CarFilter };
export default CarFilter;
//@@viewOff:exports
