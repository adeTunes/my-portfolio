import About from './components/about'
import Contact from './components/contact'
import ExperienceSection from './components/experience'
import Footer from './components/footer'
import Hero from './components/hero'
import ProjectIndex from './components/project-index'
import RevealScript from './components/reveal-script'
import SelectedWork from './components/selected-work'
import SiteHeader from './components/site-header'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <ProjectIndex />
        <ExperienceSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <RevealScript />
    </>
  )
}
