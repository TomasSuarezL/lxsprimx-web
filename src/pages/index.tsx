import type { NextPage } from "next";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/NavBar";
import { Hero } from "../components/sections/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;

