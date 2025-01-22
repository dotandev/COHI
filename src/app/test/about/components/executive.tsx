import React from 'react';

export interface Executive {
  id: number;
  name: string;
  role: string;
  image?: string; 
}

export interface ExecutiveGridProps {
  executives: Executive[];
}

const ExecutiveGrid: React.FC<ExecutiveGridProps> = ({ executives }) => {
  return (
    <div className="p-8 text-black lg:mx-24">
      <h1 className="text-3xl font-bold text-[#7B0000] mb-8">The Executives</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
        {executives.map((executive) => (
          <div
            key={executive.id}
            className="flex flex-col items-center justify-start  text-black aspect-square p-4"
          >
            {executive.image ? (
              <img
                src={executive.image}
                alt={executive.name}
                className="w-full h-full object-cover mb-4"
              />
            ) : (
              <div className="w-full h-full flex items-center bg-black justify-center mb-4">
                <p className="text-lg font-bold text-white">No Image</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-lg font-bold">{executive.name}</p>
              <p className="text-sm">{executive.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveGrid;
