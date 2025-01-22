import { Container } from '@/components/Container';
import { FadeIn } from '../uis/FadeIn';

export const HomeHero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                        Welcome to The First Class Muslim Foundation
                    </h1>
                    <p className="mt-6 text-xl text-purple-600 text-balance">
                        Empowering excellence through faith-based initiatives, nurturing talent, and building a strong, unified community.
                    </p>
                </FadeIn>
            </Container>
        </div>
    );
};
