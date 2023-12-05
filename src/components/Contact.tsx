import { motion } from "framer-motion"

import { style } from '../style'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import React, {memo} from "react"

import { wechat } from "../assets"

const MemoEarthCanvas = memo(EarthCanvas)

const Contact = ({ translateToggle }:any) => {

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 0.1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={style.sectionSubText}>{ translateToggle ? 'Get in touch' : '联系我' }</p>
                <h3 className={style.sectionHeadText}>{ translateToggle ? 'Contact.' : '联系方式'}</h3>

                <form className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">{translateToggle ? 'WeChat' : '微信'}</span>
                        <img src={wechat} alt="wechat" className="w-[160px] h-[160px] object-contain m-auto" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">{translateToggle ? 'Phone' : '电话'}</span>
                        <span
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        >15520039339</span>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Email</span>
                        <span
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        >camel_yangz@163.com</span>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Twitter</span>
                        <span
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        >https://twitter.com/Janssen1039749</span>
                    </label>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <MemoEarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')
