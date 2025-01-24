'use client'

import React, { useState } from 'react';
import { ProjectContainer, ProjectContainerProps } from './projectcontainer';

export const ProjectList = () => {
    const projects: ProjectContainerProps['project'][] = [
        { name: 'COHI BUS', description: 'THE COHI BUS Project', link: '/donate/cohi-bus', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'CBC', description: 'Capacity Building Course', link: '/donate/cbc', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'SCF', description: 'Student Career Fest', link: '/donate/scf', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'CIF', description: 'THE Campus Interactive Forum', link: '/donate/m-first', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    ];

    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Current', 'Past'];

    const filterProjects = () => {
        if (activeTab === 'Current') {
            return projects.filter(project => project.isCurrent);
        } else if (activeTab === 'Past') {
            return projects.filter(project => !project.isCurrent);
        } else {
            return projects;
        }
    };

    const filteredProjects = filterProjects();

    return (
        <div className='sm:mx-24 m-12'>
            <div>
                <h1 className="text-5xl text-[#0F973D] font-semibold mb-5 text-center hover:underline underline-offset-4">Our Projects</h1>
                <div className="flex gap-5 mb-5">
                    {tabs.map((tab, index) => (
                        <h1
                            key={index}
                            className={`text-3xl font-extrabold cursor-pointer hover:underline underline-offset-4 hover:text-[#0F973D] ${activeTab === tab ? 'text-[#0F973D] underline hover:text-grey-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </h1>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
                    {filteredProjects.map((project, index) => (
                        <ProjectContainer project={project} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
