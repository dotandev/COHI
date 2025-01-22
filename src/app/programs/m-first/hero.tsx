
// import { FadeIn } from "../uis/FadeIn";
// import { Container } from '@/components/Container';
// import EmbeddedForm from "./iform";

// export const Hero = () => {
//     return (
//         <div>
//             <Container className="mt-24 sm:mt-32 md:mt-56">
//                 <FadeIn className="max-w-3xl">
//                     <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
//                         M-First Series, By The First Class Muslim Foundation
//                     </h1>
//                     <p className="mt-6 text-xl text-purple-600 text-balance">
//                         {/* We are the community of Muslim Students across 21 Higher Institutions in Lagos State. */}
//                         A Path to career excellence for excellent students in an Islamic sphere,
//                     </p>
//                 </FadeIn>
//                 <div className="overflow-y-auto">
//                     <EmbeddedForm />
//                 </div>
//             </Container>
//         </div>
//     )
// }

import { FadeIn } from "../../../components/uis/FadeIn";
import { Container } from '@/components/Container';
import EmbeddedForm from "../../../components/sections/iform";
import image from '../../../../public/m.jpeg'
import Image from "next/image";
let link = "https://zfrmz.com/dTlWiPKaB7IBqg3sZofo"


export const MFirst = () => {
    return (
        <div className="flex gap-6">
            <div className="hero-container">
                <div className="flex lg:flex-row flex-col gap-8">
                    <Container className="mt-24 sm:mt-32 md:mt-56">
                        <FadeIn className="max-w-3xl">
                            <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                                M-First Series, By The First Class Muslim Foundation
                            </h1>
                            <p className="mt-6 text-xl text-purple-600 text-balance">
                                A Path to career excellence for excellent students in an Islamic sphere,
                            </p>
                        </FadeIn>
                    </Container>
                    <div className="overflow-y-auto h-[550px] w-96 mt-32">
                        <Image className="rounded-2xl ml-3" alt="" src={image} />
                    </div>
                </div>
                <div className="flex flex-col justify-center overflow-y-auto mt-8 mb-96">
                    <EmbeddedForm link={link} />
                </div>
            </div>
            {/* <div>
            <Image alt="" src={image} />
        </div> */}
        </div>
    );
};
