"use client"

import { AboutHero } from "./components/hero"
import { ActivitiesSection } from "./components/sections/activities"
import { ContactSection } from "./components/sections/contact"
import { FeaturesSection } from "./components/sections/features"
import { HeroSection } from "./components/sections/sectionhero"
import { StatsSection } from "./components/sections/stats"
import { NavigationBar } from "./components/ui/navigation"
import { ScrollProgress } from "./components/ui/scroll"

const sections = [
  { id: "hero", title: "Home", arabicTitle: "الرئيسية" },
  { id: "features", title: "Programs", arabicTitle: "البرامج" },
  { id: "stats", title: "Impact", arabicTitle: "تأثيرنا" },
  { id: "activities", title: "Activities", arabicTitle: "الأنشطة" },
  { id: "contact", title: "Contact", arabicTitle: "اتصل بنا" },
]

export default function AboutPage() {
  return (
    <main className="relative">
        <div>
            <AboutHero />
        </div>
      <ScrollProgress />
      <NavigationBar sections={sections} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="activities">
        <ActivitiesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}

