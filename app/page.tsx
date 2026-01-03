import Hero from './components/Hero'
import DefinitionSection from './components/DefinitionSection'
import WhyItMatters from './components/WhyItMatters'
import HowToLearn from './components/HowToLearn'
import LearningPaths from './components/LearningPaths'
import PracticePreview from './components/PracticePreview'
import AudienceSection from './components/AudienceSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Contains the only H1 on the page */}
      <Hero />
      
      {/* Contextual Bridge: Learning Paths (Core Content Links) */}
      <LearningPaths />
      
      {/* Supplementary: Practice and Games */}
      <PracticePreview />
      
      {/* Macro Context: Definition Section */}
      <DefinitionSection />
      
      {/* Attribute Processing: Why It Matters */}
      <WhyItMatters />
      
      {/* Learning Methodology */}
      <HowToLearn />
      
      {/* Trust & Audience Expansion */}
      <AudienceSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
