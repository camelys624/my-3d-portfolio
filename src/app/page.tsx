'use client'
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
    const [translateToggle, setTranslateToggle] = useState(false)

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar translateToggle={translateToggle} setToggle={() => setTranslateToggle(!translateToggle)} />
                    <Hero translateToggle={translateToggle} />
                </div>
                <About translateToggle={translateToggle} />
                <Experience translateToggle={translateToggle} />
                <Tech translateToggle={translateToggle} />
                <Works translateToggle={translateToggle} />
                <Feedbacks translateToggle={translateToggle} />
                <div className="relative z-0">
                    <Contact translateToggle={translateToggle} />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
