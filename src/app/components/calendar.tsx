'use client';

export const Calendar = () => {
    const events = [
        { title: "UNILAG Debate Rumble", date: "April, 2025" },
        { title: "UNILAG Interfaculties", date: "June – July, 2025" },
        { title: "Lagos Debate Open", date: "September, 2025" },
        { title: "TWS EOY Fiesta", date: "December, 2025" },
    ];

    return (
        <div className="py-6 px-8 rounded-lg mx-auto">
\            <div className="text-center mb-6">
                <div className="inline-block px-6 py-3 border border-[#7B0000] text-[#7B0000] rounded-b-3xl font-bold text-sm">
                    2024 – 2025 Calendar
                </div>
            </div>

            <div className="space-y-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row gap-5 w-full lg:justify-between bg-[#FFFEE9] rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div>
                            <h3 className="text-[#7B0000] font-bold text-lg">{event.title}</h3>
                            <p className="text-[#7B0000] text-sm">{event.date}</p>
                        </div>

                        <button className="border border-[#7B0000] text-[#7B0000] px-4 py-2 rounded-r-full text-sm font-medium hover:bg-[#7B0000] hover:text-white transition-colors">
                            More Information
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
