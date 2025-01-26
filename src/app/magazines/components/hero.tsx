import Hero from "@/app/components/hero"

export const MagazineHero = () => {
    return (
        <div>
            <Hero
                title={['OUR', 'MAGAZINE,', 'AN', 'INFORMATION', 'BANK.']}
                content="We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world."
                alignment="center"
                highlightedWords={['AN', 'INFORMATION', 'BANK.']}
                highlightColor="#0F973D"
                breakIndex={1}
            />
        </div>
    )
}