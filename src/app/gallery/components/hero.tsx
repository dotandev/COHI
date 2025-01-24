import Hero from "@/app/components/hero"

export const GalleryHero = () => {
    return (
        <div>
            <Hero
                title={[' COHI,', ' IN', ' JPEGS.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="center"
                highlightedWords={[' IN', ' JPEGS.']}
                highlightColor="#0F973D"
                breakIndex={4}
            />
        </div>
    )
}