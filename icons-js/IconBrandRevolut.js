import Svg, { Path } from 'react-native-svg';
         
function IconBrandRevolut({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-revolut" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.908 6c-.091 .363 -.908 5 -.908 5h1.228c1.59 0 2.772 -1.168 2.772 -2.943c0 -1.249 -.818 -2.057 -2.087 -2.057h-1z" /><Path d="M15.5 13.5l1.791 4.558c.535 1.352 1.13 2.008 1.709 2.442c-1 .5 -2.616 .522 -3.605 .497c-.973 0 -2.28 -.24 -3.106 -2.6l-1.289 -3.397h-1.5s-.465 2.243 -.65 3.202c-.092 .704 .059 1.594 .15 2.298c-1 .5 -2.5 .5 -3.5 .5c-.727 0 -1.45 -.248 -1.5 -1.5l0 -.311a7 7 0 0 1 .149 -1.409c.75 -3.577 1.366 -7.17 1.847 -10.78c.23 -1.722 0 -3.5 0 -3.5c.585 -.144 2.709 -.602 6.787 -.471a10.26 10.26 0 0 1 3.641 .722c.308 .148 .601 .326 .875 .531c.254 .212 .497 .437 .727 .674c.3 .382 .545 .804 .727 1.253c.155 .483 .237 .987 .243 1.493c0 2.462 -1.412 4.676 -3.5 5.798z" /></Svg>;

}
export default IconBrandRevolut;
        