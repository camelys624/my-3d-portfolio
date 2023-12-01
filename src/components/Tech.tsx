import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies as defaultTech } from "../constants"
import { technologies as zhTech } from "../constants/Zh"
import React, {memo} from "react"

const MemoBallCanvas = memo(BallCanvas)

const Tech = (props: any) => {
    const technologies = props.translateToggle ? defaultTech : zhTech

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map(technology => (
                <div className="w-28 h-28" key={technology.name}>
                    <MemoBallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, '')
