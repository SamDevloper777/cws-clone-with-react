import AboutSection from "./components/about-section"
import Achievements from "./components/achievements"
import Banner from "./components/banner"
import FactContainer from "./components/fact-card"
import Header from "./components/header"
import StudentsContainer from "./components/students-container"

const page = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <div className="px-[6%] flex flex-col gap-3 py-10">
        <AboutSection/>
      <div className="flex flex-col gap-3">
        <Achievements/> 
        <FactContainer/>
        <StudentsContainer/>
      </div>
      
       
      </div>
    </>
  )
}

export default page