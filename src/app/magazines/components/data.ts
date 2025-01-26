import { Magazine } from "./magazine.interfaces";
import image from '@/../public/testimg.svg'
import image1 from '@/../public/gal1.svg'
import image2 from '@/../public/gal2.svg'
import image3 from '@/../public/gal3.svg'

export const magazines: Magazine[] = [
    {
      id: "mag-001",
      title: "The Power of Dua",
      subtitle: "Strengthening Your Connection with Allah",
      coverImage: image.src,
      author: {
        id: "auth-001",
        name: "Sheikh Abdul Wahid",
        bio: "An Islamic scholar and motivational speaker passionate about empowering youth through faith.",
        image: image1.src,
      },
      publishDate: "2023-10-15",
      readTime: 12,
      category: "Faith & Spirituality",
      trending: true,
      content: {
        introduction:
          "Dua is one of the most powerful tools Allah has blessed us with. This issue explores how to maximize its potential in our lives.",
        sections: [
          {
            title: "The Essence of Dua",
            content:
              "Discover the meaning and importance of supplication in Islam and its impact on spiritual growth.",
            image: "/images/essence_of_dua.jpg",
          },
          {
            title: "Prophetic Duas for Every Situation",
            content:
              "A compilation of beautiful and practical duas taught by the Prophet Muhammad (peace be upon him).",
            image: "/images/prophetic_duas.jpg",
          },
          {
            title: "Dua in Difficult Times",
            content:
              "How to find solace and strength through dua during life's challenges, with real-life examples and stories.",
          },
        ],
      },
      reviews: [
        {
          id: "rev-001",
          author: "Amina Yusuf",
          rating: 5,
          comment: "This was so enlightening! I learned new duas and gained a deeper connection with my faith.",
          date: "2023-10-18",
          avatar: image1.src,
        },
      ],
      reactions: {
        likes: 1200,
        shares: 350,
        bookmarks: 520,
      },
    },
    {
      id: "mag-002",
      title: "Hijrah: A Journey of Transformation",
      subtitle: "Rediscovering Purpose and Identity",
      coverImage: image.src,
      author: {
        id: "auth-002",
        name: "Dr. Khadijah Amin",
        bio: "An educator and author focusing on self-development through an Islamic lens.",
        image: image2.src,
      },
      publishDate: "2023-08-21",
      readTime: 15,
      category: "Self-Development",
      trending: true,
      content: {
        introduction:
          "Hijrah is not just a historical event but a timeless lesson in personal growth and transformation.",
        sections: [
          {
            title: "Lessons from the Prophet's Hijrah",
            content:
              "The profound lessons from the migration of Prophet Muhammad (peace be upon him) and its relevance today.",
            image: "/images/prophet_hijrah.jpg",
          },
          {
            title: "Making Your Own Hijrah",
            content:
              "Practical steps for Muslims to embark on their personal journey of spiritual and emotional growth.",
            image: "/images/personal_hijrah.jpg",
          },
          {
            title: "Stories of Modern Hijrah",
            content:
              "Inspirational stories of individuals who changed their lives through a conscious spiritual journey.",
          },
        ],
      },
      reviews: [
        {
          id: "rev-002",
          author: "Musa Bello",
          rating: 5,
          comment: "Absolutely inspiring! This issue motivated me to reflect on my own spiritual journey.",
          date: "2023-08-25",
          avatar: image1.src,
        },
      ],
      reactions: {
        likes: 950,
        shares: 410,
        bookmarks: 680,
      },
    },
    {
      id: "mag-003",
      title: "Unity in Diversity",
      subtitle: "Fostering Brotherhood in the Ummah",
      coverImage: image.src,
      author: {
        id: "auth-003",
        name: "Imam Yusuf Ali",
        bio: "A community leader and advocate for interfaith dialogue and understanding.",
        image: image3.src,
      },
      publishDate: "2023-12-01",
      readTime: 14,
      category: "Community",
      trending: true,
      content: {
        introduction:
          "The Muslim Ummah is diverse, yet united by a shared faith. This issue explores how we can strengthen our bonds.",
        sections: [
          {
            title: "The Beauty of Diversity in Islam",
            content:
              "How Islam celebrates diversity and what it teaches about unity among people of different backgrounds.",
            image: "/images/diversity_in_islam.jpg",
          },
          {
            title: "Bridging Gaps in the Ummah",
            content:
              "Addressing common challenges and solutions to foster better relationships within the Muslim community.",
            image: "/images/bridging_gaps.jpg",
          },
          {
            title: "Interfaith Understanding",
            content:
              "Insights into fostering dialogue and mutual respect with people of other faiths.",
          },
        ],
      },
      reviews: [
        {
          id: "rev-003",
          author: "Fatima Hassan",
          rating: 4.5,
          comment: "A must-read for anyone interested in building stronger Muslim communities.",
          date: "2023-12-05",
          avatar: image1.src,
        },
      ],
      reactions: {
        likes: 780,
        shares: 290,
        bookmarks: 450,
      },
    },
    {
      id: "mag-004",
      title: "The Muslim Youth Renaissance",
      subtitle: "Empowering the Leaders of Tomorrow",
      coverImage: image.src,
      author: {
        id: "auth-004",
        name: "Hafsat Ibrahim",
        bio: "An activist and mentor dedicated to inspiring Muslim youth globally.",
        image: image1.src,
      },
      publishDate: "2024-01-10",
      readTime: 13,
      category: "Youth & Education",
      trending: true,
      content: {
        introduction:
          "Muslim youth are the torchbearers of the future. Learn how to nurture leadership and inspire excellence.",
        sections: [
          {
            title: "The Role of Youth in Islam",
            content:
              "Exploring Quranic verses and hadith that emphasize the importance of youth in the Muslim Ummah.",
            image: "/images/youth_in_islam.jpg",
          },
          {
            title: "Success Stories of Young Muslim Leaders",
            content:
              "Profiles of exceptional young Muslims making a difference in various fields globally.",
            image: "/images/young_leaders.jpg",
          },
          {
            title: "Empowering the Next Generation",
            content:
              "Practical advice and programs to support Muslim youth in achieving their full potential.",
          },
        ],
      },
      reviews: [
        {
          id: "rev-004",
          author: "Ahmed Suleiman",
          rating: 5,
          comment: "Very uplifting! A great read for anyone working with Muslim youth.",
          date: "2024-01-15",
          avatar: image1.src,
        },
      ],
      reactions: {
        likes: 1020,
        shares: 470,
        bookmarks: 560,
      },
    },
    {
      id: "mag-005",
      title: "Halal Living in a Modern World",
      subtitle: "Balancing Faith and Contemporary Life",
      coverImage: image.src,
      author: {
        id: "auth-005",
        name: "Ustadh Ibrahim Salim",
        bio: "A scholar focused on guiding Muslims on how to live Islamically in the modern world.",
        image: image3.src,
      },
      publishDate: "2024-03-22",
      readTime: 16,
      category: "Lifestyle",
      trending: false,
      content: {
        introduction:
          "Maintaining a halal lifestyle in a fast-changing, modern world can be challenging but rewarding.",
        sections: [
          {
            title: "Halal Food in a Globalized World",
            content:
              "Understanding halal certification, common misconceptions, and how to identify authentic halal products.",
            image: "/images/halal_food.jpg",
          },
          {
            title: "Halal Finance",
            content:
              "An overview of Islamic banking principles and how to manage finances Islamically.",
            image: "/images/halal_finance.jpg",
          },
          {
            title: "Entertainment and Technology",
            content:
              "How to navigate modern forms of entertainment and technology while adhering to Islamic values.",
          },
        ],
      },
      reviews: [
        {
          id: "rev-005",
          author: "Maryam Adewale",
          rating: 4.8,
          comment: "This is exactly the kind of guidance we need in today’s fast-paced world.",
          date: "2024-03-25",
          avatar: image3.src,
        },
      ],
      reactions: {
        likes: 860,
        shares: 310,
        bookmarks: 520,
      },
    },
  ]
  