import Svg, { Path } from 'react-native-svg';
         
function IconClockCheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" /><Path d="M12 7v5l3 3" /><Path d="M15 19l2 2l4 -4" /></Svg>;

}
export default IconClockCheck;
        