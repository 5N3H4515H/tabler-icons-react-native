import Svg, { Path } from 'react-native-svg';
         
function IconBrandPatreon({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-patreon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3h3v18h-3z" /><Path d="M15 9.5m-6.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" /></Svg>;

}
export default IconBrandPatreon;
        