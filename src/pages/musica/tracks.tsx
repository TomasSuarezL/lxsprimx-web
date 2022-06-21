import { motion } from "framer-motion";
import { HomeNav } from "../../components/layout/HomeNav";
import { Layout } from "../../components/layout/Layout";
import { Player } from "../../components/player";
import { MusicaLayout } from "../../components/sections/musica/Musica";

const TracksPage = () => {
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
        <MusicaLayout>
          <Player />
        </MusicaLayout>
      </motion.div>
    </Layout>
  );
};

export default TracksPage;

