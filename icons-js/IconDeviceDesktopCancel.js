import Svg, { Path } from 'react-native-svg';
         
function IconDeviceDesktopCancel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-cancel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" /><Path d="M7 20h5" /><Path d="M9 16v4" /><Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 21l4 -4" /></Svg>;

}
export default IconDeviceDesktopCancel;
        