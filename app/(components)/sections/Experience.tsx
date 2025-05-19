import React from 'react';

const experiences = [
    {
        company: "Finrise",
        role: "Software Engineer",
        date: "2023 — PRESENT",
        responsibilities: [
            "Developed a high-performance RMS (Risk Management System) featuring real-time data and interactive dynamic graphs using React.",
            "Deployed the complete project in a Linux environment using NGINX and Jenkins for continuous integration and delivery.",
            "Collaborated with the backend team to optimize and rewrite their microservices in C++."
        ],
        skills: ["JavaScript", "React", "C++", "Jenkins", "NGINX"]
    },
];

const Experience = () => {
    return (
        <section className=" text-foreground py-20 px-10 md:px-20 max-w-[1000px] mx-auto group pt-28" id='experience'>
            <p className='hover:text-primary transition-color duration-300 text-3xl font-semibold'>
                <span className='text-primary mr-1 font-mono ' >02. </span>
                {`Where I've Worked`}
            </p>
            <div className="mt-3 space-y-10 " >
                {experiences.map((exp, index) => (
                    <div key={index} className='p-4 rounded-lg flex gap-8 group-hover:opacity-50 hover:!opacity-100 transition-all duration-300 border border-white/0
                    hover:bg-[#172445]/30 hover:backdrop-blur-3xl  hover:border-white/20 
                    md:flex-row flex-col
                    '> 
                        <p className="text-muted text-sm mt-1 min-w-[20%]">{exp.date}</p>
                        <div className='w-[80%]'>
                            <h3 className="text-l font-semibold ">{exp.role} · {exp.company}</h3>
                            <ul className="mt-4 text-muted text-sm space-y-2">
                                {exp.responsibilities.map((task, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary mr-2"></span>{task}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-full text-xs text-primary bg-teal-300/10 font-medium ">{skill}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;