import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { OurStorySection } from "@/components/our-story-section"
import { DetailsSection } from "@/components/details-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactForm } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { VideoIntro } from "@/components/video-intro"

const INTRO_VIDEO = [
  "/videointro.mp4"
].join("")

export default function Home() {
  return (
    <VideoIntro videoSrc={INTRO_VIDEO}>
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <DetailsSection />
      <ContactForm />
      <Footer />
    </main>
    </VideoIntro>
  )
}
