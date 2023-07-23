import Svg, { Path } from 'react-native-svg';
         
function IconSquareHalf({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-half" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 4v16" /><Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M12 13l7.5 -7.5" /><Path d="M12 18l8 -8" /><Path d="M15 20l5 -5" /><Path d="M12 8l4 -4" /></Svg>;

}
export default IconSquareHalf;
        