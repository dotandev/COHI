
// // import { Button } from '@/components/Button';
// // import { Container } from '@/components/Container';
// // import { Badge } from '@/components/ui/badge';
// // import { FadeIn } from '@/components/uis/FadeIn';
// // import { ThickArrowRightIcon } from '@radix-ui/react-icons';


// // const invert = false

// // interface Program {
// //     name: string;
// //     description: string;
// //     link: string;
// //     isCurrent: boolean;
// //     badge: string;
// //     startDate: string;
// //     endDate: string;
// // }

// // export interface ProgramContainerProps {
// //     program: Program;
// // }

// // export const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
// //     return (
// //         <div className="hero-container">
// //             <Container className="min-h-96 mt-10 sm:mt-10 md:mt-10 border-2 border-spacing-3 border-purple-900 rounded-2xl m-4">
// //                 <FadeIn className="max-w-3xl">
// //                     <div className='mt-4'>
// //                         <Badge className="bg-purple-400 text-white rounded-3xl px-8 py-2">{program.badge}</Badge>
// //                     </div>
// //                     <h1 className="font-display text-3xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-5xl mt-3">
// //                         {program.name}
// //                     </h1>
// //                     <p className="mt-6 text-xl text-purple-600 text-balance">
// //                         {program.description}
// //                     </p>
// //                     <div className='flex justify-center gap-4 border-2 mt-2 rounded-sm border-purple-300'>
// //                         <div className='my-2 mx-2 gap-4 flex'>
// //                         <p className="text-purple-950 font-bold text-balance">{program.startDate}</p>
// //                         <ThickArrowRightIcon className="h-4 text-purple-900 font-bold mt-1 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
// //                         <p className="text-purple-950 font-bold text-balance">{program.endDate}</p>
// //                         </div>
// //                     </div>
// //                     <hr className='border-2 my-6 border-x border-purple-950' />
// //                     <div className='mt-1'>
// //                         <h1>{program.isCurrent ? `Join the ${program.name} train!` : 'Application Is Closed'}</h1>
// //                         <div>
// //                             <Button className='bg-purple-900 hover:bg-white mt-4' href="/programs/m-first" invert={invert}>
// //                                 {program.isCurrent ? 'Apply Now!' : 'View Details'}
// //                             </Button>
// //                         </div>
// //                     </div>
// //                 </FadeIn>
// //             </Container>
// //         </div>
// //     );
// // };


// import { Button } from '@/components/Button';
// import { Container } from '@/components/Container';
// import { Badge } from '@/components/ui/badge';
// import { FadeIn } from '@/components/uis/FadeIn';
// import { ThickArrowRightIcon } from '@radix-ui/react-icons';

// const invert = false;

// interface Program {
//     name: string;
//     description: string;
//     link: string;
//     isCurrent: boolean;
//     badge: string;
//     startDate: string;
//     endDate: string;
// }

// export interface ProgramContainerProps {
//     program: Program;
// }

// export const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
//     const handleClick = () => {
//         window.open(program.link, '_blank');
//     }

//     return (
//         <div onClick={handleClick} className="hero-container cursor-pointer">
//             <Container className="min-h-96 mt-10 sm:mt-10 md:mt-10 border-2 border-spacing-3 border-purple-900 rounded-2xl m-4 p-4 sm:p-6 cursor-pointer">
//                 <FadeIn className="max-w-3xl">
//                     <div className="mt-4">
//                         <Badge className="bg-purple-400 text-white rounded-3xl px-4 sm:px-8 py-1 sm:py-2">{program.badge}</Badge>
//                     </div>
//                     <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-purple-950 sm:text-balance mt-3">
//                         {program.name}
//                     </h1>
//                     <p className="text-wrap text-break mt-4 sm:mt-6 text-lg sm:text-xl text-purple-600 sm:text-balance">
//                         {program.description}
//                     </p>
//                     <div className="flex justify-center gap-2 sm:gap-4 border-2 mt-2 rounded-sm border-purple-300 p-2">
//                         <div className="flex items-center">
//                             <p className="text-purple-950 font-bold sm:text-balance">{program.startDate}</p>
//                             <ThickArrowRightIcon className="h-4 text-purple-900 font-bold mx-2 sm:mx-4" />
//                             <p className="text-purple-950 font-bold sm:text-balance">{program.endDate}</p>
//                         </div>
//                     </div>
//                     <hr className="border-2 my-4 sm:my-6 border-x border-purple-950" />
//                     <div className="mt-1 sm:text-center">
//                         <h1>{program.isCurrent ? `Join the ${program.name} train!` : 'Application Is Closed'}</h1>
//                         <div>
//                             <Button className="bg-purple-900 hover:bg-white mt-4" href={program.link} invert={invert}>
//                                 {program.isCurrent ? 'Apply Now!' : 'View Details'}
//                             </Button>
//                         </div>
//                     </div>
//                 </FadeIn>
//             </Container>
//         </div>
//     );
// };



import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/uis/FadeIn';
import { ThickArrowRightIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

const invert = false;

interface Program {
    name: string;
    description: string;
    link: string;
    isCurrent: boolean;
    badge: string;
    startDate: string;
    endDate: string;
}

export interface ProgramContainerProps {
    program: Program;
}

export const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
    const navigation = useRouter()
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigation.push(program.link);
        // window.navigate(program.link);
    };

    return (
        <div className="hero-container cursor-pointer" onClick={handleClick}>
            <Container className="min-h-96 mt-10 sm:mt-10 md:mt-10 border-2 border-spacing-3 border-purple-900 rounded-2xl m-4 p-4 sm:p-6">
                <FadeIn className="max-w-3xl">
                    <div className="mt-4">
                        <Badge className="bg-purple-400 hover:bg-purple-800 text-white rounded-3xl px-4 sm:px-8 py-1 sm:py-2">{program.badge}</Badge>
                    </div>
                    <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-purple-950 sm:text-balance mt-3">
                        {program.name}
                    </h1>
                    <p className="text-wrap text-break mt-4 sm:mt-6 text-lg sm:text-xl text-purple-600 sm:text-balance">
                        {program.description}
                    </p>
                    <div className="flex justify-center gap-2 sm:gap-4 border-2 mt-2 rounded-sm border-purple-300 p-2">
                        <div className="flex items-center">
                            <p className="text-purple-950 font-bold sm:text-balance">{program.startDate}</p>
                            <ThickArrowRightIcon className="h-4 text-purple-900 font-bold mx-2 sm:mx-4" />
                            <p className="text-purple-950 font-bold sm:text-balance">{program.endDate}</p>
                        </div>
                    </div>
                    <hr className="border-2 my-4 sm:my-6 border-x border-purple-950" />
                    <div className="mt-1 sm:text-center">
                        <h1>{program.isCurrent ? `Join the ${program.name} train!` : 'Application Is Closed'}</h1>
                        <div>
                            <Button className="bg-purple-900 hover:bg-purple-500 mt-4" href={program.link} invert={invert}>
                                {program.isCurrent ? 'Apply Now!' : 'View Details'}
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
};
