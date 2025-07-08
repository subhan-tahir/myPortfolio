import React from 'react'
import HeroSection from './Components/HeroSection'
import SkillsSection from './Components/SkillsSection'
import WorksSection from './Components/WorksSection'
import TechMarquee from './Components/TechMarquee'
import AchievementsSection from './Components/AchievementsSection'
import ContactFooter from './Components/ContactFooter'

const portfolioPage = () => {
  const techList = [
    'HTML5','CSS3','Javascript','ES6','TypeScript','React JS','Tailwind CSS','Bootstrap','Muiterial UI','Node JS','Next js','Express JS','MongoDB','GIT','GitHub','VS Code','Postman','Netlify','Vercel','Axios','API Integratins'
  ]
  return (
    <>
    <HeroSection />
    <TechMarquee techList={techList} className="marquee-x-right " bgColor="bg-black" invert="invert" />
    <TechMarquee techList={techList} className="marquee-x-left border-b  text-black border-white" bgColor="bg-white" invert="invert-0" />
    <SkillsSection />
    <WorksSection />
    <AchievementsSection />
    <ContactFooter />
    
    </>
  )
}

export default portfolioPage