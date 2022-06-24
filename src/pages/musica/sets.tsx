import { motion } from "framer-motion";
import { HomeNav } from "../../components/layout/HomeNav";
import { Layout } from "../../components/layout/Layout";
import { MusicaNav } from "../../components/sections/musica/MusicaNav";
import ReactPlayer from "react-player/lazy";

const SetsPage = () => {
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
        <MusicaNav />
        <div className="flex flex-col w-full h-[65vh] overflow-auto items-center p-4">
          <ul className="flex flex-col lg:flex-row items-center justify-center w-full">
            <li className="relative m-2 bg-amber-500 hover:bg-amber-600 flex flex-column items-end w-full max-w-xl h-40 transition-colors duration-300 cursor-pointer">
              <ReactPlayer
                width="100%"
                height="100%"
                url="https://soundcloud.com/lxsprimxs/lxs-primxs-en-california-klub-16-6"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </Layout>
  );
};

export default SetsPage;

