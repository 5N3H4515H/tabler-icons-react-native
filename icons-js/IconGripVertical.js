import Svg, { Path } from 'react-native-svg';
         
function IconGripVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconGripVertical;
        