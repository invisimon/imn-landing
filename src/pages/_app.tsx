import { AppProps } from "next/app";
import { LangContextProvider } from "../contexts/LangContext";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LangContextProvider>
    <Component {...pageProps} />
  </LangContextProvider>
);

export default MyApp;
