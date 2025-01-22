import React from 'react';
import './message.css';
import { FadeIn } from '@/components/uis/FadeIn';

export const ProgramMessage = () => {
    return (
        <div className="program-container">
            <FadeIn>
            <h1 className="title">First Class Muslim Foundation</h1>
            <p className="animated-text">Empowering the Muslim community through:</p>
            <ul className="animated-list">
                <li>Educational Programs</li>
                <li>Community Outreach</li>
                <li>Spiritual Growth</li>
                <li>Youth Development</li>
                <li>Health and Wellness</li>
            </ul>
            </FadeIn>
        </div>
    );
};
