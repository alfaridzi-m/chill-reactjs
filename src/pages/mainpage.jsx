
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import ContinueSection from "../component/section/continue-section"
import Topsection from "../component/section/top-section"

const Mainpage = () => {
    return (
        <>
            <Header/>
            <Topsection/>
            <ContinueSection/>
            <div className=" w-full text-center bgTopsection-white">
                isi mainpage ggggg
            </div>
            <Footer/>
        </>
    )
}

export default Mainpage