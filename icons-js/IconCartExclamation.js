import Svg, { Path } from 'react-native-svg';
         
function IconCartExclamation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cart-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M15 17h-9v-14h-2" /><Path d="M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5" /><Path d="M19 16v3" /><Path d="M19 22v.01" /></Svg>;

}
export default IconCartExclamation;
        