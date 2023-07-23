import Svg, { Path } from 'react-native-svg';
         
function IconArrowBarToRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 12l-10 0" /><Path d="M14 12l-4 4" /><Path d="M14 12l-4 -4" /><Path d="M20 4l0 16" /></Svg>;

}
export default IconArrowBarToRight;
        