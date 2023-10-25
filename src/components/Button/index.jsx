/* eslint-disable react/prop-types */
import { Touchable } from './styles';

export default function Button({
  backgroundColor,
  textColor,
  text,
  borderRadius,
  border,
  fontSize,
}) {
  return (
    <Touchable
      backgroundColor={backgroundColor}
      textColor={textColor}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {text}
    </Touchable>
  );
}
