import { motion } from 'framer-motion'

import { style } from '@/app/style'
import { staggerContainer } from '@/utils/motion'

export default (Component: any, idName: string) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${style.padding} max-w-7xl mx-auto relaytive z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section> 
        )
    }
