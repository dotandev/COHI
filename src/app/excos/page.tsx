import { ExcosHero } from "./components/hero";
import ExcoProfiles from "./components/profile";
import { excoData } from "./components/data";

export default function Excos () {
    return (
        <div>
            <ExcosHero />
            <ExcoProfiles data={excoData} />
        </div>
    )
}