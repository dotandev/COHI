import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/uis/FadeIn';

const invert = false;

export const MissionHero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                        Our Mission at The First Class Muslim Foundation
                    </h1>
                    <p className="mt-6 text-xl text-purple-600 text-balance">
                        At the First Class Muslim Foundation, our mission is to empower individuals to achieve excellence through faith-based initiatives. We strive to inspire and support our community by fostering a culture of learning, personal growth, and spiritual development. Our programs and events are designed to nurture talent, build confidence, and create a strong, unified community.
                    </p>
                    <Button className="bg-purple-900 hover:bg-white mt-8" href="/programs/m-first" invert={invert}>
                        Learn More
                    </Button>
                </FadeIn>
            </Container>
        </div>
    );
};
