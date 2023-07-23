import Svg, { Path } from 'react-native-svg';
         
function IconTimeDuration10({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-10" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 9v6" /><Path d="M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" /><Path d="M3 12v.01" /><Path d="M21 12v.01" /><Path d="M12 21v.01" /><Path d="M7.5 4.2v.01" /><Path d="M16.5 19.8v.01" /><Path d="M7.5 19.8v.01" /><Path d="M4.2 16.5v.01" /><Path d="M19.8 16.5v.01" /><Path d="M4.2 7.5v.01" /><Path d="M19.81 7.527a8.994 8.994 0 0 0 -7.81 -4.527" /></Svg>;

}
export default IconTimeDuration10;
        