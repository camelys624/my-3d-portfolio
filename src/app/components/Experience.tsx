import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import { style } from '../style'
import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'

const ExperienceCard = ({ experience }: any) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className='flex justify-center items-center w-fll h-full'>
                <img
                    src={experience.icon.src}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>
        }
        visible={true}
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point: any, index: number) => (
                <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                >{point}</li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={style.sectionSubText}>What I have done so far</p>
                <h2 className={style.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience: any, index: number) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, 'work')