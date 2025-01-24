import Hero from "@/app/components/hero"
import image from '@/../public/testimg.svg'

export const AffiliateHero = () => {
    return (
        <div>
            <Hero
                title={['MEMBER', 'INSTITUTIONS,', 'THE', 'ARC', 'OF', 'US.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="center"
                highlightedWords={['THE', 'ARC', 'OF', 'US.']}
                highlightColor="#0F973D"
                breakIndex={1}
                image={image.src}
            />
        </div>
    )
}