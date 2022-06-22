import Image from "next/image";
import { motion } from "framer-motion";
import { HomeNav } from "../../components/layout/HomeNav";
import { Layout } from "../../components/layout/Layout";
import { MusicaNav } from "../../components/sections/musica/MusicaNav";

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
          <ul className="flex flex-col lg:flex-row">
            <li className="relative m-2 bg-amber-500 hover:bg-amber-600 flex flex-column items-end w-60 sm:w-64 lg:w-72 h-48 sm:h-56 lg:h-64 transition-colors duration-300 cursor-pointer">
              <a className="w-full" href="https://soundcloud.com/lxsprimxs/lxs-primxs-en-california-klub-16-6">
                <Image src="/5.png" layout="fill" objectFit="cover"></Image>
                <h2 className="relative w-full bottom-0 m-0 p-3 pt-20 bg-gradient-to-t from-amber-200 to-transparent text-black lg:text-xl font-extrabold">
                  California Klub <br />
                  16-6
                </h2>
              </a>
            </li>
            {/* <li className="relative p-4 m-2 bg-amber-500 hover:bg-amber-600 flex flex-column items-end w-40 lg:w-64 h-40 lg:h-64 transition-colors cursor-pointer">
              <a href="https://soundcloud.com/lxsprimxs">
                <Image src="/5.png" layout="fill" objectFit="cover"></Image>
                <h2 className="relative bottom-0 text-black lg:text-2xl font-extrabold">Cabeza</h2>
              </a>
            </li>
            <li className="relative p-4 m-2 bg-amber-500 hover:bg-amber-600 flex flex-column items-end w-40 lg:w-64 h-40 lg:h-64 transition-colors cursor-pointer">
              <a href="https://soundcloud.com/lxsprimxs">
                <Image src="/7.png" layout="fill" objectFit="cover"></Image>
                <h2 className="relative bottom-0 text-black lg:text-2xl font-extrabold">Termo</h2>
              </a>
            </li> */}
          </ul>
        </div>
      </motion.div>
    </Layout>
  );
};

export default SetsPage;

