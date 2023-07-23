import Svg, { Path } from 'react-native-svg';
         
function IconListTree({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-tree" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 6h11" /><Path d="M12 12h8" /><Path d="M15 18h5" /><Path d="M5 6v.01" /><Path d="M8 12v.01" /><Path d="M11 18v.01" /></Svg>;

}
export default IconListTree;
        