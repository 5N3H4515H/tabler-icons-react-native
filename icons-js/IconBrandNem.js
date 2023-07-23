import Svg, { Path } from 'react-native-svg';
         
function IconBrandNem({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nem" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.182 2c1.94 .022 3.879 .382 5.818 1.08l.364 .135a23.075 23.075 0 0 1 3.636 1.785c0 5.618 -1.957 10.258 -5.87 13.92c-1.24 1.239 -2.5 2.204 -3.78 2.898l-.35 .182c-1.4 -.703 -2.777 -1.729 -4.13 -3.079c-3.912 -3.663 -5.87 -8.303 -5.87 -13.921c2.545 -1.527 5.09 -2.471 7.636 -2.832l.364 -.048a16.786 16.786 0 0 1 1.818 -.12h.364z" /><Path d="M2.1 7.07c2.073 6.72 5.373 7.697 9.9 2.93c0 -4 1.357 -6.353 4.07 -7.06l.59 -.11" /><Path d="M16.35 18.51s2.65 -5.51 -4.35 -8.51" /></Svg>;

}
export default IconBrandNem;
        