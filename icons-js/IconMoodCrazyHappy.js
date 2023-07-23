import Svg, { Path } from 'react-native-svg';
         
function IconMoodCrazyHappy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-crazy-happy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M7 8.5l3 3" /><Path d="M7 11.5l3 -3" /><Path d="M14 8.5l3 3" /><Path d="M14 11.5l3 -3" /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></Svg>;

}
export default IconMoodCrazyHappy;
        