import { motion } from "framer-motion";
import type { NextPage } from "next";
import { Layout } from "../components/layout/Layout";
import { Home as HomeComponent } from "../components/sections/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
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
        <HomeComponent />
      </motion.div>
    </Layout>
  );
};

export default Home;

