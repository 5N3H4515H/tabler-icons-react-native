import Svg, { Path } from 'react-native-svg';
         
function IconPhotoUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" /><Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5" /><Path d="M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526" /><Path d="M19 22v-6" /><Path d="M22 19l-3 -3l-3 3" /></Svg>;

}
export default IconPhotoUp;
        