import Svg, { Path } from 'react-native-svg';
         
function IconCartMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cart-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M12.5 17h-6.5v-14h-2" /><Path d="M6 5l14 1l-1 7h-13" /><Path d="M16 19h6" /></Svg>;

}
export default IconCartMinus;
        