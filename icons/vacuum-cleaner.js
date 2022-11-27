import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconVacuumCleaner({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vacuum-cleaner" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><Path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /><Path d="M12 16h.01" /></Svg>;
}
export default IconVacuumCleaner;