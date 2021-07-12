import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const CustomFont = ( // eslint-disable-next-line @next/next/no-page-custom-font
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />

  
);

const CustomIcon = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
);

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: Roboto;
  }

  body, ul {
    margin: 0;
    padding: 0;
  }

  :root{
    --bg:#121315;
    --bg-accent:#1A212C;
    --accent1:#3182CE;
    --accent2:#FEFCBF;
    --accent3:#9DD9D2;
    --spacing:20px;
    --spacing-x:0 20px;
    --spacing-y:20px 0;
    --font-size:18px;
    --card-width:25%;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    dark: "#121315",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {CustomFont}
        {CustomIcon}
      </Head>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
