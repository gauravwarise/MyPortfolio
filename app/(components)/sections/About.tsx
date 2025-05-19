import React from 'react'
import CharectorSvg from '../CharectorSvg';

const About = () => {
    return (
        <section className=" text-foreground  px-10 md:px-20  container m-auto max-w-[1000px] h-screen flex items-center " id='about'>
            <div className='flex flex-col md:flex-row items-center md:items-start w-full' >
                <div className="md:w-2/3">
                    <p className='hover:text-primary transition-color duration-300 text-3xl font-semibold'>
                        <span className='text-primary mr-1 font-mono'>01. </span>
                        About Me
                    </p>
                    <p className="text-muted mt-4 text-sm md:text-base max-w-2xl">
                        Hello! My name is Gaurav and I’m a Software Developer with 1+ years of experience building scalable and innovative web applications. I'm passionate about solving complex problems and constantly improving my skills to deliver high-quality solutions.
                    </p>
                    <p className="text-muted mt-4 text-sm md:text-base max-w-2xl">
                        I specialize in full-stack development using Python (Django), React, and PostgreSQL, and have hands-on experience with cloud platforms, containerization, and DevOps practices. My recent projects include a Risk Management System with real-time data streaming and a dynamic web app for precious metal trading.
                    </p>
                    <p className="text-muted mt-4 text-sm md:text-base max-w-2xl">
                        Currently, I’m focused on deepening my backend expertise while exploring advanced concepts in real-time systems and system design.
                    </p>
                    <p className="text-primary font-semibold mt-6">Technologies I work with:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-2 text-muted text-sm md:text-base">
                        <li>&#9656; Python</li>
                        <li>&#9656; JavaScript (ES6+)</li>
                        <li>&#9656; Django / DRF</li>
                        <li>&#9656; React</li>
                        <li>&#9656; PostgreSQL / MySQL</li>
                        <li>&#9656; Docker / Linux</li>
                        <li>&#9656; Redis / WebSocket</li>
                        <li>&#9656; Git / GitHub / Jenkins</li>
                    </ul>
                </div>

                <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center md:justify-end items-end ">
                    <CharectorSvg />
                </div>
            </div>

        </section>
    );
};

export default About