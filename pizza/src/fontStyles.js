import { createGlobalStyle } from "styled-components";
import Raleway  from "./Fonts/Raleway/Raleway-VariableFont_wght.ttf"
import RalewayBold from "./Fonts/Raleway/static/Raleway-Bold.ttf"
import RalewayExtraBold from "./Fonts/Raleway/static/Raleway-ExtraBold.ttf"
import NotoSansMath from "./Fonts/Noto Sans Math/NotoSansMath-Regular.ttf"
export const FontStlyes = createGlobalStyle`
@font-face {
  font-family: 'Raleway';
  src: url(${Raleway});
}
@font-face {
  font-family: 'RalewayBold';
  src: url(${RalewayBold});
}
@font-face {
  font-family: 'RalewayExtraBold';
  src: url(${RalewayExtraBold});
}
@font-face {
  font-family: 'Noto Math';
  src: url(${NotoSansMath});
}
`