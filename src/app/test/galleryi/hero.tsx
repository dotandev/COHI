
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/uis/FadeIn';


const invert = false

export const GalleryHero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                        Our Stories in PNGs, At The First Class Muslim Foundation
                    </h1>
                    <p className="mt-6 text-xl text-purple-600 text-balance">
                    Dive into a vibrant collection of moments capturing the journey of excellence and faith, where each image tells a unique story of inspiration, achievement, and community.
                    </p>
                    <Button className='bg-purple-900 hover:bg-white mt-8' href="/programs/m-first" invert={invert}>
                        Diveeeee!
                    </Button>
                </FadeIn>
            </Container>
        </div>
    );
};
