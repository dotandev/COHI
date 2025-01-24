import React from 'react';

interface HeroProps {
  title: string[];
  content?: string;
  alignment?: 'center' | 'left';
  highlightedWords?: string[]; 
  highlightColor?: string; 
  image?: string;
  imageAlt?: string; 
  styles?: React.CSSProperties; 
  breakIndex?: number; 
}

const Hero: React.FC<HeroProps> = ({
  title,
  content,
  alignment = 'center',
  highlightedWords = [],
  highlightColor = '#FF5733', 
  image,
  imageAlt = 'Hero Image',
  styles,
  breakIndex, 
}) => {
  return (
    <div
      className={`flex flex-col ${
        alignment === 'center' ? 'lg:items-center lg:text-center' : 'items-start text-left'
      }`}
      style={{ padding: '2rem', ...styles }}
    >
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold text-black">
          {title.map((word, index) => (
            <React.Fragment key={index}>
              <span
                style={{
                  color: highlightedWords.includes(word) ? highlightColor : undefined,
                }}
              >
                {word}{' '}
              </span>
              {breakIndex === index && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>
      {content && <p className="mt-4 lg:text-lg lg:mx-32 text-black">{content}</p>}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="mt-6 max-w-full h-auto"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default Hero;
