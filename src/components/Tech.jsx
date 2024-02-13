import { technologies } from "../constants"
import SectionWrapper from "../hoc/sectionWrapper"
import { BallCanvas } from "./canvas"

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "")