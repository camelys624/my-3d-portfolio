import { motion } from 'framer-motion'
import { style } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials as defaultTestimonials } from '../constants'
import { testimonials as zhTestimonials } from '../constants/Zh'
import React from 'react'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }: any) => {
    return (
        <motion.div
            variants={fadeIn('', 'spring', index * 0.5, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
        >
            <p className='text-white font-black text-[48px]'>&quot;</p>

            <div className='mt-1'>
                <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>

                        <p className='text-white font-medium text-[16px]'>
                            <span className='blue-text-gradient'>@</span> {name}
                        </p>
                        <p className='mt-1 text-secondary text-[12px]'>
                            {designation} of {company}
                        </p>
                    </div>

                    <img
                        src={image}
                        alt={`feedback-by-${name}`}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                </div>
            </div>

        </motion.div>
    )
}

const Feedbacks = (props: any) => {
    const { translateToggle } = props
    const testimonials = translateToggle ? defaultTestimonials : zhTestimonials
    
    return (
        <div className='mt-12 bg-black-100 rounded-[20px]'>
            <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={style.sectionSubText}>{ translateToggle ? 'What others say' : '他人评价'}</p>
                    <h2 className={style.sectionHeadText}>{ translateToggle ? 'Testimonials.' : '客户感言'}</h2>
                </motion.div>
            </div>
            <div className={`${style.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial: any, index: number) => (
                    <FeedbackCard key={'testimonial-' + index} index={index} {...testimonial} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Feedbacks, '')
