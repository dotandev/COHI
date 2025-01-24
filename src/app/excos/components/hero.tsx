import Hero from "@/app/components/hero"
import image from '@/../public/testimg.svg'

export const ExcosHero = () => {
    return (
        <div>
            <Hero
                title={['The', 'Engines,', 'COHI-LAGOS.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="center"
                highlightedWords={['COHI-LAGOS.']}
                highlightColor="#0F973D"
                image={image.src}
            />
        </div>
    )
}