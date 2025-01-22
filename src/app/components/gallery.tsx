import { Badge } from "./badge";
import { GalleryLayout } from "./gallery/imagelayout";
import { BasicComponent } from "./need";
import ldo from '@/../public/ldo.svg'

export const Gallery = () => {
    const tournaments = [
        { name: 'University of Lagos Debate Rumble', date: 'April 2025' },
        { name: 'Lagos Debate Open', date: 'September 2025' },
        { name: 'The Word-Smiths Pro-Am', date: 'December 2025' },
    ];

    return (
        <div className="py-12 px-6 flex flex-col justify-center max-w-6xl mx-auto text-center">
            <section className="py-12 px-6 flex flex-col justify-center max-w-3xl mx-auto text-center">
                <div className="">
                    <Badge>Gallery</Badge>
                </div>
            </section>
            <div>
                <GalleryLayout />
            </div>
            <div className="flex justify-end">
                <button className="border-2 border-primary rounded-r-2xl px-4 py-2">See More</button>
            </div>
        </div>
    );
};
