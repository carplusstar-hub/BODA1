import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { OurStorySection } from "@/components/our-story-section"
import { DetailsSection } from "@/components/details-section"
import { GallerySection } from "@/components/gallery-section"
import { RsvpSection } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <DetailsSection />
      <GallerySection />
      <RsvpSection />
      <Footer />
    </main>
  )
}
