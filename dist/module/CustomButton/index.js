function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, Button } from "react-native";
import { containerStyle } from "./styles";
import { defaultProps } from "./types";
export const CustomButton = props => {
  const handlePress = () => {
    props.onClick ? props.onClick() : null;
  };

  const title = props.text || "Native Button";
  return /*#__PURE__*/React.createElement(View, _extends({}, defaultProps, {
    style: [containerStyle.viewContainer, props.customContainerClass]
  }), props.children ? props.children : /*#__PURE__*/React.createElement(Button, {
    title: title,
    onPress: handlePress,
    color: props.buttonColor
  }));
};
//# sourceMappingURL=index.js.map