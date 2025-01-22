
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/uis/FadeIn';


const invert = false

export const ProgramsHero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                        Programs, By The First Class Muslim Foundation
                    </h1>
                    <p className="mt-6 text-xl text-purple-600 text-balance">
                        A series af activities that define your Path to career excellence for excellent students in an Islamic sphere,
                    </p>
                    <Button className='bg-purple-900 hover:bg-white mt-8' href="/programs/m-first" invert={invert}>
                        Join M-First Series
                    </Button>
                </FadeIn>
            </Container>
        </div>
    );
};
