import Svg, { Path } from 'react-native-svg';
         
function IconTransfer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transfer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 10h-16l5.5 -6" /><Path d="M4 14h16l-5.5 6" /></Svg>;

}
export default IconTransfer;
        