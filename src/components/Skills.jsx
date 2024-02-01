import { skills } from "../assets/index";
import { motion } from "framer-motion";
import { fadeIn } from "../util/Animation";
const Skills = () => {
  return (
    <section
      name="skills"
      className="dark:bg-gray-900 pt-16   pb-10 w-full min-h-screen px-10 flex justify-center items-center"
    >
      <div className=" max-w-[1000Px]  mx-auto w-full ">
        <motion.div
          variants={fadeIn("up", 0.3)} // just update delay or direction
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="dark:text-white w-full text-4xl font-bold inline border-b-4 border-teal-500">
            Skills
          </div>
          <p className="py-3 dark:text-gray-400 text-gray-400">
            These are the technologies Ive worked with before
          </p>
        </motion.div>
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-4 mt-3">
          {skills.map((skill, index) => (
            <motion.div
              variants={fadeIn("up", 0.2 * index)} // just update delay or direction
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              key={index}
              className="flex flex-col dark:text-white min-h-[100px] rounded shadow-md justify-around hover:shadow-xl cursor-pointer items-center  mt-2"
            >
              <img src={skill.img} className="w-20" alt="skillImg" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
