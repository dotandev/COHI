import { AltDonate } from "./components/altdonate";
import { DonateHero } from "./components/hero";
import { ProjectList } from "./components/projectlist";

export default function Donate () {
    return (
        <div>
            <DonateHero />
            <ProjectList />
            <AltDonate />
        </div>
    )
}