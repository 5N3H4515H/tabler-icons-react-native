import Svg, { Path } from 'react-native-svg';
         
function IconBasketX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M13.5 20h-6.5c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.856 3.423" /><Path d="M10 15a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M22 22l-5 -5" /><Path d="M17 22l5 -5" /></Svg>;

}
export default IconBasketX;
        