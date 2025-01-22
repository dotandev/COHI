'use client';

// import Link from 'next/link';

// const Custom404 = () => {
//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//             <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
//             <p className="text-2xl text-gray-700 mb-8">Oops! TWS does not have a resource here!</p>
//             <Link className="text-xl text-primary hover:underline mb-4" href="/">
//                     Go back to home
//             </Link>
//             <Link className="text-xl text-primary hover:underline mb-4" href="/contact">
//                     Contact Support
//             </Link>
//         </div>
//     );
// };

// export default Custom404;


import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Custom404: FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#004617] text-white text-center px-6 my-10">
      {/* Animated Crescent and Star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute w-32 h-32 bg-white rounded-full -left-5"></div>
          <div className="absolute w-32 h-32 bg-[#004617] rounded-full -left-3"></div>
          <div className="absolute w-8 h-8 bg-white rounded-full top-6 left-[2.5rem]"></div>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-5xl font-extrabold mb-4"
      >
        404: Page Not Found
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg max-w-lg mb-6"
      >
        Assalamu Alaikum wa Rahmatullahi wa Barakatuh! The page you're looking
        for has strayed from the right path, but don’t worry, we’ll guide you
        back to where you belong.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex space-x-4"
      >
        <Link className="px-6 py-3 bg-white text-[#004617] font-semibold rounded-md shadow-lg hover:bg-gray-200 transition duration-300" href="/">
          {/* <a className="px-6 py-3 bg-white text-[#004617] font-semibold rounded-md shadow-lg hover:bg-gray-200 transition duration-300"> */}
            Back to Home
          {/* </a> */}
        </Link>
        <Link className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-lg hover:bg-gray-600 transition duration-300" href="/contact">
          {/* <a className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-lg hover:bg-gray-600 transition duration-300"> */}
            Contact Us
          {/* </a> */}
        </Link>
      </motion.div>

      {/* Animated Quran Verse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="mt-10 text-sm max-w-lg italic"
      >
        <p>
          “And whoever puts their trust in Allah, then He alone is sufficient
          for them...” <span className="font-semibold">(Quran 65:3)</span>
        </p>
      </motion.div>

      {/* Animated Stars in Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
              delay: Math.random() * 3,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};



export default Custom404;
