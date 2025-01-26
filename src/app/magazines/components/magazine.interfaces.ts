export interface Author {
    id: string
    name: string
    bio: string
    image: string
  }
  
  export interface Review {
    id: string
    author: string
    rating: number
    comment: string
    date: string
    avatar: string
  }
  
  export interface Magazine {
    id: string
    title: string
    subtitle: string
    coverImage: string
    author: Author
    publishDate: string
    readTime: number
    category: string
    trending: boolean
    content: {
      introduction: string
      sections: Array<{
        title: string
        content: string
        image?: string
      }>
    }
    reviews: Review[]
    reactions: {
      likes: number
      shares: number
      bookmarks: number
    }
  }
  
  