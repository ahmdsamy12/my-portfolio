import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/sectionWrapper";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75 )} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h2 className="text-white text-[20px] font-bold text-center">
            {title}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am passionate about frontend development, with expertise in React.js.
        I specialize in creating dynamic, user-centered interfaces with clean
        code and efficient component-based architecture. I am dedicated to
        delivering exceptional web experiences. experiences.
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
