
// const currentYear = new Date().getFullYear()
// const years = Array.from({ length: currentYear - 2020 }, (_, i) => currentYear - i)

import image1 from "@/../public/gal1.svg"
import image2 from "@/../public/gal2.svg"
import image3 from "@/../public/gal3.svg"





import type { ExcoData } from "../components/profile.interfaces";

const currentYear = new Date().getFullYear();
const years = [2023, 2024, 2025];

const alternateImages = [image1, image2, image3];

export const excoData: ExcoData = years.map((year) => ({
  year,
  data: {
    male: [
      {
        tag: "executives",
        profiles: [
          {
            id: `m-exec-1-${year}`,
            name: "Ahmed Yusuf",
            role: "President",
            gender: "male",
            image: alternateImages[0],
            school: "Engineering",
            department: "Mechanical Engineering",
            level: "500",
            hobbies: ["Leadership", "Public Speaking", "Football"],
            bio: "Dedicated to fostering innovation and progress.",
            tag: "executives",
            isHead: true,
            achievements: [
              { year: 2022, title: "Best Leader Award", description: "For outstanding leadership." },
              { year: 2023, title: "Innovation Advocate", description: "Promoted innovative initiatives." },
            ],
            socialMedia: [
              { platform: "LinkedIn", url: "https://linkedin.com/in/ahmedyusuf" },
              { platform: "Twitter", url: "https://twitter.com/ahmedyusuf" },
            ],
            skills: ["Leadership", "Team Building", "Strategic Planning"],
            quote: "Leadership is the capacity to translate vision into reality.",
            rankProgression: [
              { year: 2021, position: "Vice President", responsibilities: ["Support president", "Oversee operations"] },
              { year: 2022, position: "Acting President", responsibilities: ["Lead organization", "Strategic planning"] },
              { year: 2023, position: "President", responsibilities: ["Executive leadership", "Policy development"] },
            ],
          },
          {
            id: `m-exec-2-${year}`,
            name: "Ibrahim Musa",
            role: "Vice President",
            gender: "male",
            image: alternateImages[1],
            school: "Sciences",
            department: "Mathematics",
            level: "400",
            hobbies: ["Chess", "Debating", "Cycling"],
            bio: "Committed to supporting the executive team.",
            tag: "executives",
            achievements: [
              { year: 2022, title: "Debate Champion", description: "Won national debate competition." },
              { year: 2023, title: "Team Player Award", description: "For excellent collaboration." },
            ],
            socialMedia: [
              { platform: "LinkedIn", url: "https://linkedin.com/in/ibrahimmusa" },
              { platform: "Instagram", url: "https://instagram.com/ibrahimmusa" },
            ],
            skills: ["Public Speaking", "Collaboration", "Analytical Thinking"],
            quote: "Success is best when it is shared.",
            rankProgression: [
              { year: 2021, position: "Assistant VP", responsibilities: ["Coordinate events", "Assist VP"] },
              { year: 2022, position: "VP Intern", responsibilities: ["Shadow VP", "Provide insights"] },
              { year: 2023, position: "Vice President", responsibilities: ["Policy support", "Event planning"] },
            ],
          },
          {
            id: `m-exec-3-${year}`,
            name: "Mustapha Ali",
            role: "General Secretary",
            gender: "male",
            image: alternateImages[2],
            school: "Engineering",
            department: "Civil Engineering",
            level: "300",
            hobbies: ["Writing", "Reading", "Photography"],
            bio: "Ensuring smooth communication and record-keeping.",
            tag: "executives",
            achievements: [
              { year: 2021, title: "Best Secretary Award", description: "Recognized for exceptional organizational skills." },
              { year: 2022, title: "Publication Excellence", description: "Published notable articles." },
            ],
            socialMedia: [
              { platform: "Facebook", url: "https://facebook.com/mustaphaali" },
              { platform: "Twitter", url: "https://twitter.com/mustaphaali" },
            ],
            skills: ["Organization", "Communication", "Detail-Oriented"],
            quote: "Clarity is the key to effective communication.",
            rankProgression: [
              { year: 2021, position: "Assistant Secretary", responsibilities: ["Draft reports", "Assist secretary"] },
              { year: 2022, position: "Deputy Secretary", responsibilities: ["Oversee documentation", "Coordinate meetings"] },
              { year: 2023, position: "General Secretary", responsibilities: ["Manage records", "Liaison with departments"] },
            ],
          },
        ],
      },
      // Add more male profiles with other tags (Admin, Finance, etc.)
    ],
    female: [
      {
        tag: "executives",
        profiles: [
          {
            id: `f-exec-1-${year}`,
            name: "Aisha Bello",
            role: "Treasurer",
            gender: "female",
            image: alternateImages[0],
            school: "Social Sciences",
            department: "Economics",
            level: "400",
            hobbies: ["Budgeting", "Cooking", "Volunteering"],
            bio: "Passionate about financial transparency and growth.",
            tag: "executives",
            isHead: true,
            achievements: [
              { year: 2022, title: "Financial Excellence Award", description: "For exceptional budget management." },
              { year: 2023, title: "Community Supporter", description: "Supported community financial literacy programs." },
            ],
            socialMedia: [
              { platform: "LinkedIn", url: "https://linkedin.com/in/aishabello" },
              { platform: "Instagram", url: "https://instagram.com/aishabello" },
            ],
            skills: ["Accounting", "Financial Planning", "Detail-Oriented"],
            quote: "A budget is more than numbers on a page; it is an embodiment of our values."
          },
          // Add more profiles...
        ],
      },
      // Add more female profiles with other tags (Admin, Secretaries, etc.)
    ],
  },
}));
