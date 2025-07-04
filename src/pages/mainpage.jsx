
import Footer from "../component/footer-header/footer"
import Header from "../component/footer-header/header"
import ContinueSection from "../component/section/continue-section"
import NewrilisSection from "../component/section/newrilis-section"
import Topsection from "../component/section/top-section"
import TopratingSection from "../component/section/toprating-section"
import TrandingSection from "../component/section/tranding-section"
import { useState, useEffect } from "react"

const Mainpage = ({ setDetailData }) => {
    return (
        <>
            <Header/>
            <Topsection />
            <ContinueSection setDetailData={setDetailData}/>
            <TopratingSection  setDetailData={setDetailData}/>
            <TrandingSection setDetailData={setDetailData}/>
            <NewrilisSection setDetailData={setDetailData}/>
            <Footer/>
        </>
    )
}

export default Mainpage