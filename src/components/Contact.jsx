import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../util/Animation";
const Contact = () => {
  return (
    <section
      name="contact"
      className="dark:bg-gray-900 pt-10    w-full min-h-screen px-10 flex justify-center items-center"
    >
      <div className=" max-w-[1000Px]   mx-auto w-full ">
        <motion.div
          variants={fadeIn("up", 0.3)} // just update delay or direction
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="dark:text-white w-full text-4xl font-bold inline border-b-4 border-teal-500">
            Contact
          </div>
          <p className="py-6 text-gray-400">GET IN TOUCH</p>
        </motion.div>

        <div className="grid pb-20 md:grid-cols-2 grid-cols-1 justify-center gap-8 ">
          <motion.div
            variants={fadeIn("right", 0.3)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col items-center   gap-3"
          >
            <a
              href="https://www.linkedin.com/in/moknine-elhadj-646616244/"
              target="_blank"
              rel="noreferrer"
              className="flex dark:text-white cursor-pointer hover:shadow-xl flex-col max-w-sm w-full md:w-2/3 shadow-md p-3 rounded-md border-slate-100 border items-center gap-"
            >
              <FaLinkedin size={30} className="text-gray-600" />
              <p className="font-semibold py-2">Linkedin</p>
              <p>Moknine Elhadj</p>
            </a>
            <a className="flex dark:text-white cursor-pointer hover:shadow-xl flex-col max-w-sm w-full md:w-2/3 shadow-md p-3 rounded-md border-slate-100 border items-center gap-">
              <MdAttachEmail size={30} className="text-gray-600" />
              <p className="font-semibold py-2">Email</p>
              <p className="">mokninemoknine999@gmail.com</p>
            </a>
            <a
              href="https://web.facebook.com/moknine.moknine.5"
              target="_blank"
              rel="noreferrer"
              className="flex dark:text-white cursor-pointer hover:shadow-xl flex-col max-w-sm w-full md:w-2/3 shadow-md p-3 rounded-md border-slate-100 border items-center gap-"
            >
              <FaFacebook size={30} className="text-gray-600" />
              <p className="font-semibold py-2">Facebook</p>
              <p>Möknïnë Möknïnë</p>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)} // just update delay or direction
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full "
          >
            <form
              method="POST"
              className="flex flex-col gap-4"
              action="https://getform.io/f/8bfdc8b2-04c4-416e-a7a1-bf6a28e98c75"
            >
              <div className="overflow-hidden border-gray-400 rounded-lg border-2 ">
                <label htmlFor=""></label>
                <input
                  className="w-full dark:text-white dark:bg-transparent outline-none px-4 py-2"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="overflow-hidden border-gray-400 rounded-lg border-2 ">
                <label htmlFor=""></label>
                <input
                  className="w-full dark:text-white dark:bg-transparent outline-none px-4 py-2"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="overflow-hidden border-gray-400 rounded-lg border-2 ">
                <label htmlFor=""></label>
                <input
                  className="w-full dark:text-white dark:bg-transparent outline-none px-4 py-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="overflow-hidden border-gray-400 rounded-lg border-2 h-36 ">
                <label htmlFor=""></label>
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  className="w-full dark:text-white dark:bg-transparent outline-none h-full px-4 py-2"
                ></textarea>
              </div>
              <button className="bg-teal-500 text-white border-teal-500 border-2 px-4 py-2 flex justify-center mx-auto hover:bg-transparent hover:text-teal-500 hover:border-teal-500  ">
                Send a Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
