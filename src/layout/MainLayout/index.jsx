import Top from "../../component/Top"
import Footer from "./Footer"
import Header from "./Header"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Top />
            {children}

            <Footer />
        </>
    )

}