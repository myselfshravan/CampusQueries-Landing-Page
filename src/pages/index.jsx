import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";
if (typeof window !== "undefined") {
  console.log("You are on the browser");
  // 👉️ can use localStorage here

  localStorage.setItem("name", "Tom");

  console.log(localStorage.getItem("name")); // 👉️ "Tom"
} else {
  console.log("You are on the server");
  // 👉️ can't use localStorage
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Campus Queries</title>
        <meta
          name="description"
          content="Streamlining the Lost and Found and Complaints Process on College Campus"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
