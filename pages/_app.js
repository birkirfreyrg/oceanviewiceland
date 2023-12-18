import Layout from "../components/Layout";
import { MyContextProvider } from "../contexts/MyContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContextProvider>
  );
}

export default MyApp;
