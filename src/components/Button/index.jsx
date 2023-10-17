/* eslint-disable react/prop-types */
import { Touchable } from './styles';

export default function Button({
  backgroundColor,
  textColor,
  borderColor,
  text,
  borderRadius,
  borderWidth,
  borderStyle,
}) {
  return (
    <Touchable
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderRadius={borderRadius}
    >
      {text}
    </Touchable>
  );
}
