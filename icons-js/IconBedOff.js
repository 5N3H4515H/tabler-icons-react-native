import Svg, { Path } from 'react-native-svg';
         
function IconBedOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7v11" /><Path d="M3 14h11" /><Path d="M18 14h3" /><Path d="M21 18v-8a2 2 0 0 0 -2 -2h-7" /><Path d="M11 11v3" /><Path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBedOff;
        