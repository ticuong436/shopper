import TabLst from "../TabList";
import Pagination from "../../../component/Pagination";
import { useSelector } from "react-redux";
import Product from "./Product"

export default function AccountWidhlist() {

    let { list } = useSelector(store => store.user)


    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <TabLst />
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                        {/* Products */}
                        <div className="row">
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                {
                                    list?.map((e, i) => <Product key={i} {...e} />)
                                }
                            </div>
                        </div>
                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    )
}
