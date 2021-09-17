import { useEffect } from "react"
import { useState } from "react"
import CartItem from "./component/CartItem"
import { LocationApi } from "../../service/locationApi"
export default function StoreLocator() {
    let [list, setList] = useState({
        data: []
    })
    let [index, setIndex] = useState(0)


    let [link, setLink] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2816663015815!2d106.69723797247312!3d10.78972589231254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528caafa7703d%3A0xd655aeb0c7040512!2zMTEgUGhhbiBL4bq_IELDrW5oLCDEkGEgS2FvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1624444651918!5m2!1svi!2s"
    )

    useEffect(() => {
        LocationApi.location().then((res) => {
            setList({
                data: res.data
            });
        });

    }, []);

    console.log(list);
    function handleChange(i) {
        setIndex(i)
        setLink(list.data[i].linkGoogle)

    }

    return (
        <>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Store Locator</h3>
                            {/* Search */}
                            <div className="input-group input-group-merge">
                                <input className="form-control" type="search" placeholder="Enter Country or City" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-border" type="submit">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow" style={{ overflow: 'auto' }} >
                                {/* Card */}
                                {
                                    list?.data && list?.data.map((e, i) => (

                                        <CartItem
                                            key={i}
                                            {...e}
                                            clicked={handleChange.bind(null, i)}
                                            active={index === i}
                                        />))
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            {/* Map */}
                            <iframe className="googleStore" src={link} width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}