import type { Institution } from "./affiliate.interface"
import mssn from '@/../public/mssn.svg'
import cover from '@/../public/testimg.svg'

export const institutions: Institution[] = [
  {
    id: "unilag",
    name: "University of Lagos",
    abbreviation: "UNILAG",
    tag: "university",
    logo: mssn,
    coverImage: cover.src,
    description:
      "The University of Lagos is a public research university located in Lagos, Nigeria. It is one of the largest universities in the country and a leading institution in research and innovation.",
    foundedYear: 1962,
    location: "Akoka, Yaba, Lagos, Nigeria",
    website: "https://unilag.edu.ng",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/UnilagNigeria" },
      { platform: "Facebook", url: "https://www.facebook.com/unilagofficial" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/school/university-of-lagos/" },
    ],
    achievements: [
      {
        year: 2022,
        title: "Top 500 Universities Worldwide",
        description: "Ranked in the top 500 universities globally by Times Higher Education",
      },
      {
        year: 2021,
        title: "Best University in Nigeria",
        description: "Awarded the best university in Nigeria by the National Universities Commission",
      },
    ],
    studentPopulation: 55000,
    notableFaculties: ["Faculty of Engineering", "Faculty of Science", "Faculty of Law", "College of Medicine"],
    researchAreas: ["Artificial Intelligence", "Climate Change", "Public Health", "Sustainable Energy"],
    collaborations: ["MIT", "University of Cambridge", "IBM Research"],
    eventsHosted: ["Annual Innovation Fair", "International Conference on African Development"],
    missionStatement:
      "To provide a conducive environment for teaching, learning, research and development, where staff and students will interact and compete effectively with their counterparts globally.",
    visionStatement:
      "To be a top-class institution for the pursuit of excellence in knowledge, character and service to humanity.",
    relationWithCOHI:
      "The University of Lagos has been a key partner of the Council of Higher Institutions (COHI) since its inception. It actively participates in COHI's initiatives, hosts collaborative events, and contributes significantly to the council's research and development programs.",
  },
  {
    id: "lasu",
    name: "Lagos State University",
    abbreviation: "LASU",
    tag: "university",
    logo: mssn.src,
    coverImage: cover.src,
    description:
      "Lagos State University is a public university located in Lagos, Nigeria. It is known for its diverse academic programs and commitment to community development.",
    foundedYear: 1983,
    location: "Ojo, Lagos, Nigeria",
    website: "https://lasu.edu.ng",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/LASUOfficial" },
      { platform: "Facebook", url: "https://www.facebook.com/lasuofficial" },
      { platform: "Instagram", url: "https://www.instagram.com/lasuofficial" },
    ],
    achievements: [
      {
        year: 2023,
        title: "Best State University in Nigeria",
        description: "Awarded the best state university by the National Universities Commission",
      },
      {
        year: 2022,
        title: "Excellence in Community Service",
        description: "Recognized for outstanding community development initiatives",
      },
    ],
    studentPopulation: 35000,
    notableFaculties: [
      "Faculty of Social Sciences",
      "Faculty of Management Sciences",
      "Faculty of Education",
      "School of Transport",
    ],
    researchAreas: ["Urban Development", "Environmental Sustainability", "Educational Technology", "Public Health"],
    collaborations: ["UNESCO", "Ford Foundation", "Nigerian Institute of Medical Research"],
    eventsHosted: ["LASU International Research Conference", "Annual Entrepreneurship Summit"],
    missionStatement:
      "To create and promote excellence in teaching, research and community service through the provision of high-quality education.",
    visionStatement:
      "To be a world-class university committed to meeting societal needs and providing leadership in the pursuit of social, economic and technological advancement.",
    relationWithCOHI:
      "Lagos State University is an active member of the Council of Higher Institutions (COHI). It regularly participates in COHI's programs, contributes to policy discussions, and collaborates on various educational initiatives aimed at improving higher education in Lagos State and beyond.",
  },
  {
    id: "fcet",
    name: "Federal College of Education, Technical",
    abbreviation: "FCET",
    tag: "college",
    logo: mssn.src,
    coverImage: cover.src,
    description:
      "The Federal College of Education (Technical) is a leading institution in technical education, focusing on producing skilled teachers and technicians for Nigeria's educational and industrial sectors.",
    foundedYear: 1967,
    location: "Akoka, Yaba, Lagos, Nigeria",
    website: "https://fcetakoka.edu.ng",
    socialMedia: [
      { platform: "Twitter", url: "https://twitter.com/FCETAkoka" },
      { platform: "Facebook", url: "https://www.facebook.com/FCETAkokaOfficial" },
    ],
    achievements: [
      {
        year: 2023,
        title: "Best Technical Education College",
        description: "Recognized as the best technical education college in Nigeria",
      },
      {
        year: 2021,
        title: "Innovation in TVET",
        description: "Awarded for innovative approaches in Technical and Vocational Education and Training",
      },
    ],
    studentPopulation: 15000,
    notableFaculties: [
      "School of Technical Education",
      "School of Vocational Education",
      "School of Science Education",
    ],
    researchAreas: [
      "Educational Technology",
      "Vocational Skills Development",
      "STEM Education",
      "Technical Teacher Training",
    ],
    collaborations: ["National Board for Technical Education", "UNESCO-UNEVOC", "Nigerian Society of Engineers"],
    eventsHosted: ["Annual Technical Education Symposium", "Skills Acquisition Workshop Series"],
    missionStatement:
      "To produce highly skilled and motivated teachers and technicians who will contribute to Nigeria's technological and educational advancement.",
    visionStatement:
      "To be the leading institution in technical and vocational education, recognized for excellence in teaching, research, and innovation.",
    relationWithCOHI:
      "The Federal College of Education (Technical) is a valued member of the Council of Higher Institutions (COHI). It plays a crucial role in COHI's initiatives related to technical and vocational education, contributing expertise and resources to enhance the quality of technical education across member institutions.",
  },
]

