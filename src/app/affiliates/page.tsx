import { AffiliateHero } from "./components/hero";
import {institutions} from "./components/data";
import AffiliateInstitutions from "./components/institutions";

export default function Affiliates () {
    return (
        <div>
            <AffiliateHero />
            <AffiliateInstitutions institutions={institutions} />
        </div>
    )
}