
import CardPortrait from "../component/card/card-portrait"
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"

const Daftarsaya = () => {
    return (
        <>
            <Header/>
            <div className="mt-20 flex flex-col p-5 md:p-20 w-full">
            <h5 className="text-white text-2xl md:text-3xl mb-4 font-bold lg:ml-5">Daftar Saya</h5>
                <div className="flex flex-row flex-wrap gap-4 justify-center-safe">
                    <CardPortrait indexx="1" top/>
                    <CardPortrait indexx="2" baru/>
                    <CardPortrait indexx="3"/>
                    <CardPortrait indexx="4" top/>
                    <CardPortrait indexx="5"/>
                    <CardPortrait indexx="6"/>
                    <CardPortrait indexx="7" baru/>
                    <CardPortrait indexx="8"/>
                    <CardPortrait indexx="9" baru/>
                    <CardPortrait indexx="10"/>
                    <CardPortrait indexx="11" top/>
                    <CardPortrait indexx="12"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Daftarsaya