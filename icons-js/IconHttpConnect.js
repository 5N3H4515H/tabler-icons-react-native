import Svg, { Path } from 'react-native-svg';
         
function IconHttpConnect({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-connect" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" /><Path d="M17 16v-8l4 8v-8" /><Path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" /></Svg>;

}
export default IconHttpConnect;
        