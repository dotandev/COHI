

interface BadgeProps {
    children: string;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {    
    return (
        <span className="inline-block text-primary border-2 border-primary text-xl font-bold rounded-b-2xl px-5 py-3">
            {children}
        </span>
    );
}