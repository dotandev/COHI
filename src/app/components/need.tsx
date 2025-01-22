import React from 'react';

export interface BasicComponentProps {
    title: string;
    cta: string;
    isIcon: boolean;
    icon?: string;
    paragraph: string;
    secondParagraph?: string;
    highlightedText?: string[];
    highlightedTextColor?: string;
}

export const BasicComponent: React.FC<BasicComponentProps> = (data) => {
    const highlightText = (text: string, highlights: string[], color: string = 'inherit') => {
        if (!highlights || highlights.length === 0) return text;

        const regex = new RegExp(`(${highlights.join('|')})`, 'gi'); 
        return text.split(regex).map((part, index) =>
            highlights.includes(part.toLowerCase()) ? (
                <span key={index} style={{ color: color, fontWeight: 'bold' }}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="py-8 px-4">
            <h2 className="text-center text-2xl font-bold mb-6">{data.title}</h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-4 rounded shadow-lg">
                    <h3 className="text-lg font-bold">
                        {highlightText(data.paragraph, data.highlightedText || [], data.highlightedTextColor)}
                    </h3>

                    {data.secondParagraph && (
                        <p className="mt-2">
                            {highlightText(data.secondParagraph, data.highlightedText || [], data.highlightedTextColor)}
                        </p>
                    )}

                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded flex items-center">
                        {data.cta}
                        {data.isIcon && data.icon && <img src={data.icon} alt="icon" className="ml-2 w-5 h-5" />}
                    </button>
                </div>
            </div>
        </div>
    );
};
