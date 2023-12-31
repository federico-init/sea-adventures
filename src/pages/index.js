// import Next
import Head from "next/head";

// import component
import Header from "@/components/header";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import CardsList from "@/components/cardsList";
import Adventures from "@/components/adventures";

// import style
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sea Adventures</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Header />
      <Hero />
      <CardsList />
      <Banner />
      <Adventures />
      <Footer />
    </>
  );
}
