import { fadeIn } from "../util/Animation";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <div name="about" className="dark:bg-gray-900 h-screen w-full  ">
      <div className="flex flex-col justify-center w-full h-full items-center">
        <div className="max-w-[1000Px] mx-auto px-4 w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <motion.div
              variants={fadeIn("down", 0.3)} // just update delay or direction
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-4xl dark:text-white font-bold inline border-b-4 border-teal-500"
            >
              About
            </motion.div>
          </div>
        </div>
        <div className="max-w-[1000Px] mx-auto px-4 w-full grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", 0.3)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-right dark:text-white leading-10 pb-8 pl-4 font-bold text-4xl"
          >
            Hi, I`m Moknine, nice to meet you , please take a look around.
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="pl-4 dark:text-white"
          >
            <p>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in framework like React, NextJs and
              interested about Threejs. I'm quick learner and collaborate closly
              with clients to create efficient, scalable and user-friendly
              solution that solve real-world problems. Let's work together to
              bring your ideas and to life!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
