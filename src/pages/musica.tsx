import { motion } from "framer-motion";
import type { NextPage } from "next";
import { HomeNav } from "../components/layout/HomeNav";
import { Layout } from "../components/layout/Layout";
import { Musica as MusicaComponent } from "../components/sections/Musica";

const Musica: NextPage = () => {
  return (
    <Layout>
      <HomeNav />
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: { duration: 0.5 },
          },
        }}
      >
        <MusicaComponent />
      </motion.div>
    </Layout>
  );
};

export default Musica;

