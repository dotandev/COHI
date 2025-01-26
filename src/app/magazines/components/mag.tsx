import CoordinatorStory from "./coordinatorStory"
import { magazines } from "./data"
import { MagazineBlocHero } from "./magazinebloc"
import ReviewsSection from "./reviews"
import SubscriptionForm from "./subscription"

const dummyData = {
  trendingMagazines: magazines.filter((magazine) => magazine.trending), 
  reviews: magazines.flatMap((magazine) => magazine.reviews), 
}

export const MagHome = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <MagazineBlocHero trendingMagazines={dummyData.trendingMagazines} />
      <CoordinatorStory />
      <SubscriptionForm />
      <ReviewsSection reviews={dummyData.reviews} />
    </main>
  )
}
