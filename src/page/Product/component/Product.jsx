import { useEffect, useRef } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouteMatch } from "react-router-dom"
import { useTranslate } from "../../../core/useTranslate"
import { cartAction } from "../../../redux/actions/cartAction"
import ProductApi from "../../../service/productApi"
import Description from "./Description"
let $ = window.$;
export default function Product() {
    let [product, setProduct] = useState()
    let routeMatch = useRouteMatch()
    let [currentImage, setCurrentImage] = useState(0)
    let [amount, setAmout] = useState(1)
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let thisRef = useRef()
    useEffect(() => {
        ProductApi.detail(routeMatch.params.slug).then(res => {
            if (res.data.length > 0) {
                setProduct(res.data[0])
            }
        })
    }, [routeMatch.params.slug])
    if (!product) return null;
    let { images, configurable_options } = product

    console.log(product);
    function sliderItemClick(i) {
        setCurrentImage(i)
    }
    function _changeAmount(e) {
        setAmout(parseInt(e.target.value))
    }
    function handleAddCart(e) {
        e.preventDefault();
        dispatch(cartAction({ ...product, cartNum: amount }))
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Badge */}
                                        {
                                            product.discount_rate ? <div className="badge badge-primary card-badge text-uppercase ">
                                                - {product.discount_rate}%
                                            </div> : null
                                        }

                                        {/* Slider */}
                                        <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">

                                            <a href={product.large_url} >
                                                <img src={product.thumbnail_url} alt="..." className="card-img-top" />
                                            </a>

                                        </div>
                                    </div>
                                    {/* Slider */}
                                    <div className="flickity-nav mx-n2 mb-10 mb-md-0 slider-thumbnail" >
                                        {/* Item */}


                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pl-lg-10">
                                    {/* Header */}
                                    <div className="row mb-1">
                                        <div className="col">
                                            {/* Preheading */}
                                            <a className="text-muted" href="shop.html">{product.name}</a>
                                        </div>
                                        <div className="col-auto">
                                            {/* Rating */}
                                            <div className="rating font-size-xs text-dark" data-value={4}>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <a className="font-size-sm text-reset ml-2" href="#reviews">
                                                Reviews (6)
                                            </a>
                                        </div>
                                    </div>
                                    {/* Heading */}
                                    <h3 className="mb-2">{product.name}</h3>
                                    {/* Price */}
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{product.price}vnd</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{product.real_price}vnd</span>
                                        <span className="font-size-sm ml-1">({product.stock_item.qty > 0 ? "Còn hàng" : "Hết hàng"})</span>
                                    </div>
                                    {/* Form */}

                                    {
                                        configurable_options?.map((e, i) => (
                                            <div className="form-group product-option" key={i}>
                                                {/* Label */}

                                                <p className="mb-5">
                                                    {e.name} : {e.values.map((e1, i1) => <span className="option-value" key={i1}>{e1.label}</span>)}
                                                </p>

                                            </div>
                                        ))
                                    }
                                    <form>
                                        <div className="form-group">
                                            {/* Label */}

                                            {/* Radio */}

                                        </div>
                                        <div className="form-group">
                                            {/* Label */}

                                            {/* Radio */}

                                            {/* Size chart */}

                                            <div className="form-row mb-7">
                                                <div className="col-12 col-lg-auto">
                                                    {/* Quantity */}
                                                    <select className="custom-select mb-2" onChange={_changeAmount}>
                                                        {
                                                            [...Array(10)].map((e, i) => <option value={i + 1} selected={(i + 1) === amount}>{i + 1}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-12 col-lg">
                                                    {/* Submit */}
                                                    <button type="submit" className="btn btn-block btn-dark mb-2" onClick={handleAddCart} >
                                                        Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                                    </button>
                                                </div>
                                                <div className="col-12 col-lg-auto">
                                                    {/* Wishlist */}
                                                    <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                        Wishlist <i className="fe fe-heart ml-2" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the
                                                    Wait List!</a>
                                            </p>
                                            {/* Share */}
                                            <p className="mb-0">
                                                <span className="mr-4">Share:</span>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Description description={product.description} />
        </>
    )

}