import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    header{
      background: ${({ theme }) => theme.colors.body}
    }

`;
