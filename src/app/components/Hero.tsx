import { motion } from 'framer-motion'
import { style } from '../style'
import { ComputersCanvas } from './canvas'
import { selfEvaluation as defaultSelfEvaluation } from '@/constants'
import { selfEvaluation as zhSelfEvaluation } from '@/constants/Zh'
// import { heroBg } from '@/assets'
// console.log(heroBg)

export default function Hero(props: any) {
    const selfEvaluation = props.translateToggle ? defaultSelfEvaluation : zhSelfEvaluation

    return (
        <section className="relative w-full h-screen max-auto">
            <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${style.heroHeadText} text-white`}>{selfEvaluation[0][0]} <span className='text-[#915eff]'>{selfEvaluation[0][1]}</span></h1>
                    <p className={`${style.heroSubText} mt-2 text-white-100`}>
                        {selfEvaluation[1]} <br className='sm:block hidden' />
                        {selfEvaluation[2]}
                    </p>
                </div>
            </div>
            
            <ComputersCanvas />

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center'>
                <a href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}

                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}
