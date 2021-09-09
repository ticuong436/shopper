import BestPick from "./component/BestPick";
import Brand from "./component/Brand";
import Category from "./component/Category";
import CountDown from "./component/CountDown";
import Review from "./component/Review";
import TopSeller from "./component/TopSeller";
import Features from "./component/Features"
import Ref from "./component/Ref";
import { useRef } from "react";
import { useEffect } from "react";
export default function Home() {


    return (
        <>

            <Category />
            {/* FEATURES */}
            <Features />

            <BestPick />
            {/* BEST PICKS */}
            <TopSeller />
            {/* TOP SELLERS */}
            <CountDown />
            {/* COUNTDOWN */}
            <Review />
            {/* BRANDS */}
            <Brand />
            {/* INSTAGRAM */}

        </>
    )

}