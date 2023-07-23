import Svg, { Path } from 'react-native-svg';
         
function IconBasketDollar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-dollar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M13 20h-6c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.126 .506" /><Path d="M12 17a2 2 0 1 0 .002 -3.998a2 2 0 0 0 -.002 3.998z" /><Path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><Path d="M19 21v1m0 -8v1" /></Svg>;

}
export default IconBasketDollar;
        