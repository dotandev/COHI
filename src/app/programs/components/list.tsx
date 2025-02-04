'use client'

import React, { useState } from 'react';
import { ProgramContainer, ProgramContainerProps } from './container';

export const ProgramList = () => {
    const programs: ProgramContainerProps['program'][] = [
        { name: 'COHI BUS', description: 'THE COHI BUS Program', link: '/programs/cohi-bus', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'CBC', description: 'Capacity Building Course', link: '/programs/cbc', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'SCF', description: 'Student Career Fest', link: '/programs/scf', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'CIF', description: 'THE Campus Interactive Forum', link: '/programs/m-first', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    ];

    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Recurrent', 'Yearly'];

    const filterPrograms = () => {
        if (activeTab === 'Recurrent') {
            return programs.filter(program => program.isCurrent);
        } else if (activeTab === 'Yearly') {
            return programs.filter(program => !program.isCurrent);
        } else {
            return programs;
        }
    };

    const filteredPrograms = filterPrograms();

    return (
        <div className='sm:mx-24 m-12'>
            <div>
                <h1 className="text-5xl text-[#0F973D] font-semibold mb-5 text-center hover:underline underline-offset-4">Our Programs</h1>
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
                    {filteredPrograms.map((program, index) => (
                        <ProgramContainer program={program} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
