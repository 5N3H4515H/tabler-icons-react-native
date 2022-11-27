import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconWashDryHang({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-dry-hang" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={18} height={18} rx={3} /><Path d="M4 4.01c5.333 5.323 10.667 5.32 16 -.01" /></Svg>;
}
export default IconWashDryHang;