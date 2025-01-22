import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

export interface BasicComponentProps {
  title: string;
  cta: string;
  isIcon: boolean;
  icon?: React.ReactNode; 
  paragraph: string;
  secondParagraph?: string;
  highlightedText?: string[];
  highlightedTextColor?: string;
}

export const BasicComponent: React.FC<BasicComponentProps> = (data) => {
  const highlightText = (
    text: string, 
    highlights: string[], 
    color: string = 'inherit'
  ) => {
    if (!highlights || highlights.length === 0) return text;

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi'); 

    return text.split(regex).map((part, index) => {
      if (highlights.some((highlight) => highlight.toLowerCase() === part.toLowerCase())) {
        return (
          <span key={index} style={{ color, fontWeight: 'bold' }}>
            {part}
          </span>
        );
      }
      return part; 
    });
  };

  return (
    <div className="px-4 md:px-36"> 
      <h2 className="text-left text-primary text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        {data.title}
      </h2>

      <div className="mx-4 sm:mx-12 gap-6">
        <div className="rounded">
          <p className="text-sm sm:text-base">
            {highlightText(data.paragraph, data.highlightedText || [], data.highlightedTextColor || 'inherit')}
          </p>

          {data.secondParagraph && (
            <p className="my-2 sm:my-4 mb-4 text-sm sm:text-base">
              {highlightText(data.secondParagraph, data.highlightedText || [], data.highlightedTextColor || 'inherit')}
            </p>
          )}

          <button className="border mt-3 border-[#7B0000] text-[#7B0000] px-4 py-2 rounded-r-full text-sm font-medium hover:bg-[#7B0000] hover:text-white transition-colors flex gap-3 items-center justify-center sm:text-base">
            {data.cta}
            {data.isIcon && (
              data.icon ? data.icon : <SquareArrowOutUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-16 my-8 sm:my-12">
        <hr className="w-full border-primary" />
      </div>
    </div>
  );
};
