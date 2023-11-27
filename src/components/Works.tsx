import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { style } from '../style'
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects as defaultProjects } from "../constants"
import { projects as zhProjects } from "../constants/Zh"
import { fadeIn, textVariant } from '../utils/motion'
import React from "react"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }: any) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, '_b;ank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github.src}
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag: any) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = (props: any) => {
    const { translateToggle } = props
    const projects = translateToggle ? defaultProjects : zhProjects
    const summary = translateToggle
        ? `Following projects showcases my skills and experience through real-world examples of my work.
        Each project is briefly described.
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        `
        : `以下项目通过实际工作案例展示了我的技能和经验。
        每个项目都有简要介绍。
        这反映了我解决复杂问题、使用不同技术和有效管理项目的能力。
        `

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={style.sectionSubText}>{translateToggle ? 'MY WORK' : '我的作品'}</p>
                <h2 className={style.sectionHeadText}>{translateToggle ? 'Projects.' : '项目'}</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {summary}
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((projects: any, index: number) => (
                    <ProjectCard key={`project-${index}`} index={index} {...projects} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, '')
