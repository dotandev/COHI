import Hero from "@/app/components/hero"
import image from '@/../public/testimg.svg'

export const HomeHero = () => {
    return (
        <div>
            <Hero
                title={['COHI,', 'MSSN-LAGOS.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="center"
                highlightedWords={['MSSN-LAGOS.']}
                highlightColor="#0F973D"
                image={image.src}
            />
        </div>
    )
}