import { BsFillMoonStarsFill } from "react-icons/bs";
import { GoFileCode, GoProject, GoHome } from "react-icons/go";
import { LuLayoutDashboard, LuContact } from "react-icons/lu";
import logo from "../assets/teal_logo.png";
import {
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import profile from "../assets/mok.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoIosSunny } from "react-icons/io";
import { fadeIn } from "../util/Animation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { resume } from "../assets";
const links = [
  { sec: "home", icon: <GoHome size={20} /> },
  { sec: "about", icon: <AiOutlineUser size={20} /> },
  { sec: "skills", icon: <GoFileCode size={20} /> },
  { sec: "portfolio", icon: <GoProject size={20} /> },
  { sec: "contact", icon: <LuContact size={20} /> },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsScroll(true) : setIsScroll(false);
    });
  });

  return (
    <main className=" px-10 min-h-screen  relative  md:pt-0 flex justify-center items-center dark:bg-gray-900">
      <motion.nav
        // variants={} // just update delay or direction
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: true, amount: 0.7 }}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duartion: 0.3, ease: "easeInOut" }}
        className={`${
          isScroll
            ? "shadow-xl  bg-white/20 drop-shadow-xl backdrop-blur-sm"
            : ""
        } py-5  px-10 z-50 flex fixed top-0 w-full left-0  justify-between items-center`}
      >
        <h1 className="text-2xl font-burtons font-medium">
          <img src={logo} className="w-14" alt="" />
        </h1>
        <div className="flex md:gap-8 gap-4 items-center">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer dark:text-white "
          >
            {!darkMode ? (
              <BsFillMoonStarsFill size={20} />
            ) : (
              <IoIosSunny size={25} />
            )}
          </div>
          <LuLayoutDashboard
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer dark:text-white text-2xl"
          />
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-2.5 py-1 text-white rounded-md cursor-pointer">
            <a href={resume} download={"CV Resume"}>
              Resume
            </a>
          </button>
        </div>
      </motion.nav>
      <section
        id="home"
        className=" min-h-[400px]  pt-24 pb-10  flex justify-center items-center "
      >
        <div className="flex flex-col pt-10 md:gap-24  items-center md:flex-row  text-center md:text-left">
          <motion.div
            variants={fadeIn("right", 0.2)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className=""
          >
            <p className="dark:text-white">Hi, my name is </p>
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Moknine Elhadj
            </h2>
            <h3 className="text-2xl py-2 dark:text-gray-300">
              I'm a Frontend Developer
            </h3>

            <p className="leading-8 max-w-md mx-auto dark:text-gray-500 text-gray-800">
              I am passionate about building and designing exceptional digital
              experiences excellent software that improves the lives of those
              around me. Currently ,I'm focused in creating responsive and
              seemless website with a pretty good user experience.
            </p>
            <button className="border-teal-500 border-2 text-teal-500 mt-6 cursor-pointer hover:text-white transition-all duration-300 hover:bg-teal-500 px-4 py-2 rounded-md">
              <Link smooth={true} duration={500} to="contact">
                Go to Work
              </Link>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="hidden lg:flex z-50  md:fixed md:left-0 md:flex-col md:top-0 md:bottom-0   text-4xl justify-center py-6 text-gray-600 "
          >
            <div className=" relative w-[180px] cursor-pointer bg-sky-500 p-2  ml-[-130px] hover:ml-0 duration-500 h-[50px] items-center flex justify-between text-gray-300">
              <a
                className="w-full text-xl items-center flex justify-between"
                href=""
              >
                Twitter
                <AiOutlineTwitter size={35} />
              </a>
            </div>
            <div className=" w-[180px] cursor-pointer bg-blue-600 p-2  ml-[-130px] hover:ml-0  duration-500 h-[50px] items-center flex justify-between text-gray-300">
              <a
                target="_blank"
                rel="noreferrer"
                className="w-full text-xl items-center flex justify-between"
                href="https://www.linkedin.com/in/moknine-elhadj-646616244/"
              >
                Linkedin
                <AiOutlineLinkedin size={35} />
              </a>
            </div>
            <div className=" w-[180px]  cursor-pointer bg-gray-600 p-2 ml-[-130px] hover:ml-0  duration-500 h-[50px] items-center flex justify-between text-gray-300">
              <a
                target="_blank"
                rel="noreferrer"
                className="w-full text-xl items-center flex justify-between"
                href="https://github.com/Edjemoknine"
              >
                GitHub
                <AiOutlineGithub size={35} />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className=" md:hidden flex text-4xl justify-center py-6 text-gray-600 gap-10"
          >
            <AiOutlineTwitter className="cursor-pointer hover:text-teal-500" />
            <AiOutlineLinkedin className="cursor-pointer hover:text-teal-500" />
            <AiOutlineGithub className="cursor-pointer hover:text-teal-500" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="hidden md:flex  w-72 h-72 rounded-full bg-gradient-to-b from-teal-500 overflow-hidden mx-auto"
          >
            <img
              className="w-full h-full object-cover"
              src={profile}
              alt="profile"
            />
          </motion.div>
        </div>

        <div
          className={`${
            isOpen ? "bottom-5 " : "-bottom-full "
          } fixed z-50 py-2 px-4 dark:text-slate-100 text-gray-600 delay-300 duration-500 ease-linear left-0 right-0 bg-slate-200/20  drop-shadow-2xl max-w-[330px] mx-auto rounded-full backdrop-blur-3xl flex justify-between shadow-xl items-center `}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              onClick={() => {
                setIsActive(i);
                if (link.sec === "home") {
                  window.scrollTo({ y: -100, behavior: "smooth" });
                }
              }}
              to={link.sec}
              smooth={true}
              duration={500}
              className={`${
                isActive === i && "bg-teal-500 text-white"
              } cursor-pointer hover:bg-teal-400 p-2 rounded-full`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Navbar;
