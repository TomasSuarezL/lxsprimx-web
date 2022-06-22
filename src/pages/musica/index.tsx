import { motion } from "framer-motion";
import type { NextPage } from "next";
import { HomeNav } from "../../components/layout/HomeNav";
import { Layout } from "../../components/layout/Layout";
import { Player as PlayerComponent } from "../../components/player";
import { MusicaNav } from "../../components/sections/musica/MusicaNav";

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
            transition: { duration: 1 },
          },
        }}
      >
        <MusicaNav />
      </motion.div>
    </Layout>
  );
};

export default Musica;

