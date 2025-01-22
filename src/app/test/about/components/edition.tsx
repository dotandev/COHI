// import React from "react";

// interface LagosDebateProps {
//   title: string;
//   editions: string[];
//   logoSrc: string; // URL of the logo image
//   registerLink: string;
// }

// const LagosDebate: React.FC<LagosDebateProps> = ({ 
//   title, 
//   editions, 
//   logoSrc, 
//   registerLink 
// }) => {
//   return (
//     <div style={{ textAlign: "center", color: "#900" }}>
//       <h1>{title}</h1>
//       <img src={logoSrc} alt={title} style={{ width: "200px", margin: "20px auto" }} />
//       <div>
//         <h3>Editions</h3>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {editions.map((edition, index) => (
//             <li key={index}>{edition}</li>
//           ))}
//         </ul>
//       </div>
//       <a href={registerLink} style={{ textDecoration: "none", color: "#900" }}>
//         <button style={{ padding: "10px 20px", border: "2px solid #900", background: "transparent" }}>
//           Register NOW
//         </button>
//       </a>
//     </div>
//   );
// };

// export default LagosDebate;



import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

export interface BasicComponentProps {
  title: string; 
  editions: string[]; 
  cta: string; 
  isIcon: boolean; 
  icon?: React.ReactNode; 
  highlightedTextColor?: string; 
}

export const DynamicComponent: React.FC<BasicComponentProps> = ({
  title,
  editions,
  cta,
  isIcon,
  icon,
  highlightedTextColor = "#7B0000",
}) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between p-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold" style={{ color: highlightedTextColor }}>
            {title}
          </h1>
          <div className="bg-gray-200 h-96 w-96 border-4 border-transparent mt-8"></div>
        </div>

        <div className="flex flex-col items-end mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4" style={{ color: highlightedTextColor }}>
            Edition
          </h2>
          <ul className="text-right space-y-2 mb-8">
            {editions.map((edition, index) => (
              <li key={index} className="text-lg">
                {edition}
              </li>
            ))}
          </ul>
          <button
            className="px-6 py-3 border border-[#7B0000] text-[#7B0000] font-bold rounded-r-full hover:bg-[#7B0000] hover:text-white transition-all flex items-center"
          >
            {cta}
            {isIcon && (
              <span className="ml-2">
                {icon ? icon : <SquareArrowOutUpRight className="w-5 h-5" />}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
