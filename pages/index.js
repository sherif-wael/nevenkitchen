import React, {useEffect} from "react";
import styled from 'styled-components'
import Layout from "../components/layout";
import About from "../components/about";
import Intro from "../components/intro";
import Feed from "../components/feed";
import Gallery from "../components/gallery";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    fetch("/api/home");
  }, [])
  return (
    <Layout>
        <Head>
          <title>Neven's Kitchen - home page</title>
        </Head>
        <About />
        <Intro />
        <Feed />
        <Gallery />
    </Layout>
  )
}
