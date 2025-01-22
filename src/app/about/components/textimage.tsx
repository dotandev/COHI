import React from "react";

interface CoachProps {
  title: string;
  description: string;
  imageSrc: string;
  name: string;
}

const Coach: React.FC<CoachProps> = ({ title, description, imageSrc, name }) => {
  return (
    <div className="px-4 sm:px-8 md:px-36">
      <h1 className="text-3xl font-bold text-[#7B0000] mb-8">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col items-center justify-start text-black w-full sm:w-1/3 p-4">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-72 object-cover mb-4 rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center bg-black justify-center mb-4">
              <p className="text-lg font-bold text-white">No Image</p>
            </div>
          )}
          <div className="text-center">
            <p className="text-lg font-bold">{name}</p>
          </div>
        </div>

        <div className="w-full px-6 sm:w-2/3 mt-4 sm:mt-0">
          <p className="lg:mt-12">{description}</p>
        </div>
      </div>

      <div className="px-4 sm:px-16 my-8 sm:my-12">
        <hr className="w-full border-primary" />
      </div>
    </div>
  );
};

export default Coach;
