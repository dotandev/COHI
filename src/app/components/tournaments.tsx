import { Badge } from "./badge";
import { BasicComponent } from "./need";
import ldo from '@/../public/ldo.svg'

const Tournaments = () => {
    const tournaments = [
        { name: 'University of Lagos Debate Rumble', date: 'April 2025' },
        { name: 'Lagos Debate Open', date: 'September 2025' },
        { name: 'The Word-Smiths Pro-Am', date: 'December 2025' },
    ];

    return (
        <section className="py-6 px-6 flex flex-col justify-center max-w-3xl mx-auto text-center">
            <div className="my-6">

                <Badge>Tournaments</Badge>

            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tournaments.map((tournament, index) => (
                    <div key={index} className="border p-6 rounded flex flex-col justify-center">
                        <img src={ldo.src} className="my-3" alt="" />
                        <h3 className="text-lg text-center font-bold">{tournament.name}</h3>
                        {/* <p className="mt-2">{tournament.date}</p> */}
                        <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tournaments;
