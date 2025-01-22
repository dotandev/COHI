import Link from 'next/link';

import { Container } from '@/components/Container';
import { FadeIn } from '@/components/uis/FadeIn';
// import { Logo } from '@/components/COHILogo';
import logo from '@/../public/logo.png';
import { socialMediaProfiles } from '@/components/SocialMedia';
import { set } from 'date-fns';

const navigation = [
    {
        title: 'Social Media',
        links: socialMediaProfiles,
    },
    {
        title: 'Finance',
        links: [
            { title: 'Dues', href: '/about' },
            { title: 'Donate', href: '/board' },
            { title: 'Sponsor', href: '/blog' },
        ],
    },
    {
        title: 'Tournament',
        links: [
            { title: 'TWS Pro-Am', href: '/about' },
            { title: 'Lagos Debate Open', href: '/mission' },
            { title: 'UNILAG Debate Rumble', href: '/programs' },
        ],
    },
];

function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display text-sm font-semibold tracking-wider text-[#800000]">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-sm">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            />
        </svg>
    );
}

function NewsletterForm() {
    return (
        <form className="max-w-sm">
            <h2 className="font-display text-[#800000] text-sm font-semibold tracking-wider ">
                Sign up for our newsletter
            </h2>
            <p className="mt-4 text-sm text-[#800000]">
                Subscribe to get the latest TWS news, articles, resources and
                inspiration.
            </p>
            <div className="relative mt-6">
                <input
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-[#800000] bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-[#800000] focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                        type="submit"
                        aria-label="Submit"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-[#800000] text-white transition hover:bg-purple-300"
                    >
                        <ArrowIcon className="w-4" />
                    </button>
                </div>
            </div>
        </form>
    );
}

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40 bg-[#FDFDF4]">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <Navigation />
                    <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                    <Link href="/" aria-label="Home">
                        {/* <Logo className="h-8" fillOnHover /> */}
                        <img
                            src={logo.src}
                            alt="The Wordsmiths"
                            className="h-8 w-8 mr-4 object-cover cursor-pointer"
                            onClick={() => {
                                window.open('/', '_self');
                            }
                            }
                        />  
                    </Link>
                    <p className="text-sm text-[#800000]">
                        © The Word-Smiths. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    );
}
