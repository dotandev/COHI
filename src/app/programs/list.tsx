'use client'

import React, { useState } from 'react';
import { ProgramContainer, ProgramContainerProps } from './programcontainer';

export const ProgramList = () => {
    const programs: ProgramContainerProps['program'][] = [
        { name: 'ULSP', description: 'Undergraduate Learning Support Program', link: '/programs/ulsp', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'FBS', description: 'Foundation Board Scholarship', link: '/programs/fbs', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'SMP', description: 'Student Mentorship Program', link: '/programs/smp', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'M-First', description: 'Undergraduate Learning Support Program', link: '/programs/m-first', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'ULSP', description: 'Undergraduate Learning Support Program', link: '/programs/ulsp', isCurrent: true, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
        { name: 'ULSP', description: 'Undergraduate Learning Support Program', link: '/programs/ulsp', isCurrent: false, startDate: 'Aug 6, 2023', endDate: 'Aug 6, 2024', badge: 'New' },
    ];

    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Current', 'Past'];

    const filterPrograms = () => {
        if (activeTab === 'Current') {
            return programs.filter(program => program.isCurrent);
        } else if (activeTab === 'Past') {
            return programs.filter(program => !program.isCurrent);
        } else {
            return programs;
        }
    };

    const filteredPrograms = filterPrograms();

    return (
        <div className='sm:mx-24 m-12'>
            <div>
                <h1 className="text-5xl text-purple-900 font-semibold mb-5 text-center underline">Our Programs</h1>
                <div className="flex gap-5 mb-5">
                    {tabs.map((tab, index) => (
                        <h1
                            key={index}
                            className={`text-3xl font-extrabold cursor-pointer hover:underline hover:text-purple-500 ${activeTab === tab ? 'text-purple-500 underline hover:text-grey-500' : 'text-gray-500'}`}
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
