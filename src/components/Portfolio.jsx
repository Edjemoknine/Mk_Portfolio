import { projects } from "../assets/projects/index";
import { motion } from "framer-motion";
import { fadeIn } from "../util/Animation";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="dark:bg-gray-900 w-full min-h-screen px-10 flex justify-center items-center"
    >
      <div className=" max-w-[1000Px]  mx-auto w-full ">
        <motion.div
          variants={fadeIn("up", 0.2)} // just update delay or direction
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="dark:text-white w-full text-4xl font-bold inline border-b-4 border-teal-500">
            Portfolio
          </div>
          <p className="py-6 max-w-xl text-gray-500">
            Following projects showcase my skills and experience throughou
            real-world examples. Each project is briefly described with links to
            code repositories and live demos in it. It reflects my ability to
            solve complex problems.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((pro, index) => (
            <motion.div
              variants={fadeIn("up", 0.05 * index)} // just update delay or direction
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0 }}
              key={index}
              className="p-3 bg-slate-200 dark:bg-slate-800  shadow-lg group relative  rounded-md overflow-hidden  duration-300 "
            >
              <div className=" w-full  duration-300  h-full ">
                <div
                  className="h-[220px] relative overflow-hidden rounded-md w-full "
                  style={{
                    backgroundImage: `url(${pro.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <div className="absolute top-0 w-full h-full duration-300 -left-full group-hover:left-0 bg-slate-600/50"></div> */}
                  <div className="absolute top-8 -right-10 duration-200 group-hover:right-10 flex-col text-center flex justify-center gap-2">
                    <div className="px-3 py-1.5 z-10 text-sm  rounded-md cursor-pointer hover:bg-teal-500 text-white bg-gray-500">
                      <a href={pro.github} target="_blank" rel="noreferrer">
                        <VscGithub />
                      </a>
                    </div>
                    <div className="px-3 py-1.5 z-10 text-sm rounded-md cursor-pointer hover:bg-teal-500 text-white bg-blue-400">
                      <a href={pro.link} target="_blank" rel="noreferrer">
                        <HiOutlineExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full justify-between flex flex-col gap-4 ">
                  <span className="text-xl dark:text-white font-bold m-0 p-0  tracking-wider">
                    {pro.title}
                  </span>
                  <p className="text-xs dark:text-slate-200 text-slate-900 ">
                    {pro.desc}
                  </p>

                  <div className="  ">
                    {pro.tech.map((techno) => (
                      <span
                        className={`text-[10px] font-semibold p-0.5 px-1.5  border-teal-500 rounded ${techno.text}`}
                        key={techno.TName}
                      >
                        #{techno.TName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
