import styled from "styled-components";
import GlobalStyles from "../styles/global";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <meta name="description" content="An online catering in Alexandria, Egypt serving all kind of home food" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Catamaran&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStyles />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;