
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/uis/FadeIn';
import { ThickArrowRightIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

const invert = false;

interface Project {
    name: string;
    description: string;
    link: string;
    isCurrent: boolean;
    badge: string;
    startDate: string;
    endDate: string;
}

export interface ProjectContainerProps {
    project: Project;
}

export const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => {
    const navigation = useRouter()
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigation.push(project.link);
        // window.navigate(Project.link);
    };

    return (
        <div className="hero-container cursor-pointer text-[#0F973D]" onClick={handleClick}>
            <Container className="min-h-96 mt-10 sm:mt-10 md:mt-10 border-2 border-spacing-3 border-[#0F973D] rounded-2xl m-4 p-4 sm:p-6">
                <FadeIn className="max-w-3xl">
                    <div className="mt-4">
                        <Badge className="bg-[#0F973D] hover:bg-[#163922] text-white rounded-3xl px-4 sm:px-8 py-1 sm:py-2">{project.badge}</Badge>
                    </div>
                    <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-black sm:text-balance mt-3">
                        {project.name}
                    </h1>
                    <p className="text-wrap text-break mt-4 sm:mt-6 text-lg sm:text-xl sm:text-balance">
                        {project.description}
                    </p>
                    <div className="flex justify-center gap-2 sm:gap-4 border-2 mt-2 rounded-sm border-black p-2">
                        <div className="flex items-center">
                            <p className="text-black font-bold sm:text-balance">{project.startDate}</p>
                            <ThickArrowRightIcon className="h-4 font-bold mx-2 sm:mx-4" />
                            <p className="text-black font-bold sm:text-balance">{project.endDate}</p>
                        </div>
                    </div>
                    <hr className="border-2 my-4 sm:my-6 border-x border-black" />
                    <div className="mt-1 sm:text-center">
                        <h1 className='text-black'>{project.isCurrent ? `Join the ${project.name} train!` : 'Application Is Closed'}</h1>
                        <div>
                            <Button className="bg-[#0F973D] hover:bg-[#163922] mt-4" href={project.link} invert={invert}>
                                {project.isCurrent ? 'Apply Now!' : 'View Details'}
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
};
