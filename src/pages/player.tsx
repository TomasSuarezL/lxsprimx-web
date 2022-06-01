import { motion } from "framer-motion";
import type { NextPage } from "next";
import { HomeNav } from "../components/layout/HomeNav";
import { Layout } from "../components/layout/Layout";
import { Player as PlayerComponent } from "../components/player";

const Player: NextPage = () => {
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
            transition: { duration: 1.5 },
          },
        }}
      >
        <PlayerComponent />
      </motion.div>
    </Layout>
  );
};

export default Player;

