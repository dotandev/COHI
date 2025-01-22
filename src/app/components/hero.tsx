import heroimage from '@/../public/heroimage.svg';

const TextHero = () => {
  return (
    <section className="bg-[#FDFDF4] text-left py-12 px-6 md:px-12 lg:px-32">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
        Intercollegiate Debate at: University of Lagos
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg text-primary">
        Welcome to The Word-Smiths, where provoking conversations happen! We are a fun community of
        critical thinkers, fostering eloquence, confidence, and intellectual rigor.
      </p>
      <button className="mt-6 px-4 py-2 bg-secondary border-2 border-primary rounded text-primary hover:bg-primary hover:text-white transition duration-300">
        Join TWS
      </button>
    </section>
  );
};

const HeroImage = () => {
  return (
    <section className="mx-auto flex justify-center px-4 lg:pr-32">
      <img
        src={heroimage.src}
        className="w-[300px] lg:w-[400px] max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1000px]"
        alt="Hero Image"
      />
    </section>
  );
};

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-8 lg:mt-16">
      <TextHero />
      <HeroImage />
    </div>
  );
};
