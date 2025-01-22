'use client';

import { useState, useEffect } from "react";
import image1 from '@/../public/gal1.svg';
import image2 from '@/../public/gal2.svg';
import image3 from '@/../public/gal3.svg';


const galleryItems = [
    {
        image: image1,
        title: "Lagos Debate Open",
        subtitle: "December, 2023",
    },
    {
        image: image2,
        title: "Beach Moments",
        subtitle: "Sunset Vibes",
    },
    {
        image: image3,
        title: "Engaging Speech",
        subtitle: "Orator at Work",
    },
    // {
    //     image: image,
    //     title: "Lagos Debate Open",
    //     subtitle: "December, 2023",
    // },
    // {
    //     image: image,
    //     title: "Beach Moments",
    //     subtitle: "Sunset Vibes",
    // },
];

export const GalleryLayout = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-cycle through images in an infinite loop
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="text-white px-6 rounded-xl">
            <div className="flex flex-wrap lg:flex-nowrap lg:overflow-x-auto lg:space-x-4 space-y-4 lg:space-y-0">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`relative flex-shrink-0 overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
                            activeIndex === index
                                ? "w-full lg:w-[700px] h-[370px] rounded-xl" // Fully expanded
                                : "w-full lg:w-[150px] lg:h-[370px] h-[150px] rounded-[50px]" // Cylindrical
                        }`}
                    >
                        <img
                            src={item.image.src}
                            alt={item.title}
                            className="object-cover w-full h-full"
                        />
                        {activeIndex === index && (
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.subtitle}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-right mt-6">
                <button className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#7B0000] transition duration-300">
                    See More
                </button>
            </div>
        </div>
    );
};
