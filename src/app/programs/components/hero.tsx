import Hero from "@/app/components/hero"
import image from '@/../public/testimg.svg'

export const ProgramsHero = () => {
    return (
        <div>
            <Hero
                title={['Our Events,', 'One Step At A Time.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="left"
                highlightedWords={['One Step At A Time.']}
                breakIndex={0}
                highlightColor="#0F973D"
                image={image.src}
            />
        </div>
    )
}