
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import ContinueSection from "../component/section/continue-section"
import NewrilisSection from "../component/section/newrilis-section"
import Topsection from "../component/section/top-section"
import TopratingSection from "../component/section/toprating-section"
import TrandingSection from "../component/section/tranding-section"

const Mainpage = () => {
    return (
        <>
            <Header/>
            <Topsection/>
            <ContinueSection />
            <TopratingSection  title />
            <TrandingSection title/>
            <NewrilisSection title/>
            <Footer/>
        </>
    )
}

export default Mainpage