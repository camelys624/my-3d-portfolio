import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { style } from '../style'
import { services } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import React from "react"

interface ServiceCardStruc {
    index: number;
    title: string;
    icon: any
}

const ServiceCard = ({ index, title, icon }: ServiceCardStruc) => (
    <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
        className="xs:w-[250px] w-full"
    >
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="tex-white text-[20px] font-bold text-center"> {title}</h3>
            </div>
        </motion.div>
    </Tilt>
)

const About = (props: any) => {
    const { translateToggle } = props
    const skill = translateToggle
        ? `I'm a skilled software developer with proficiency in JavaScript and CSS front-end fundamentals, and Expertise in frameworks like Vue, Node.js.
        I'm a quick learner, a good problem solver, and can work closely with customers to create efficient, scalable, user-friendly
        solutions. Let's work together to bring your ideas to life!
        `
        : `我是一名技术娴熟的软件开发人员，熟练掌握 JavaScript 和 CSS 前端基础知识，熟练使用 Vue、Node.js 等前端框架。
        我学习能力强，善于解决实际问题，能与客户密切合作，创建高效、可扩展、用户友好的
        解决方案。让我们携手合作，将您的想法变为现实！te
        `

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={style.sectionSubText}>{translateToggle ? 'Introduction' : '简介'}</p>
                <h2 className={style.sectionHeadText}>{translateToggle ? 'Overview.' : '概况'}</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                {skill}
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about')
