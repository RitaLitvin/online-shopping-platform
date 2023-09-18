import { createGlobalStyle } from "styled-components";

import PromptRegularWoff from './Prompt-Regular.woff';
import PromptRegularWoff2 from './Prompt-Regular.woff2';

import PromptSemiBoldWoff from './Prompt-SemiBold.woff';
import PromptSemiBoldWoff2 from './Prompt-SemiBold.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Prompt';
        src: url(${PromptRegularWoff}) format("woff"),
             url(${PromptRegularWoff2}) format("woff2"),
             url(${PromptSemiBoldWoff}) format("woff"),
             url(${PromptSemiBoldWoff2}) format("woff2");
      }
`

export default FontStyles;