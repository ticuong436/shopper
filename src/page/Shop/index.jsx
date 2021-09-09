import { useEffect, useState } from "react"
import Product from "./component/Product"
import ProductForm from "./component/ProductForm"
import Pagination from "../../component/Pagination"
import ProductApi from "../../service/productApi"
import { useDispatch, useSelector } from "react-redux"
import { getcategories, productAction } from "../../redux/actions/productAction"
import { convertQueryToObject, reverse } from "../../utils"
import Skeleton from 'react-loading-skeleton';
import { NavLink, Router, useRouteMatch } from "react-router-dom"
import { useTranslate } from "../../core/useTranslate"
import Slider from "./component/Slider"


export default function Shop() {
    let { product, paginate, categories, loading, loadingCategories } = useSelector(store => store.product)
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let queryUrl = convertQueryToObject();
    let queryString = reverse(queryUrl);
    let category = {
        title: t('All Product'),
        link: '/catalog'
    }
    let routeMath = useRouteMatch()
    let { slug } = routeMath.params

    if (slug) {
        slug = slug.replace(/.*id/g, '');
        console.log(slug);
        let f = categories.find(e => e.id == slug)
        if (f) {
            category = {
                title: f.title,
                link: `/catalog/${f.slug}`
            }
        }
    }
    queryString += (slug ? `$categories=${slug}` : "")
    useEffect(() => {

        dispatch(getcategories())

        dispatch(productAction(queryString + (slug ? `&categories=${slug}` : '')))
    }, [queryString])

    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}

                        <form className="mb-10 mb-md-0">
                            <ul className="nav nav-vertical" id="filterNav">
                                <li className="nav-item">
                                    {/* Toggle */}

                                    <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                                        Category
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse show" id="categoryCollapse">
                                        <div className="form-group">
                                            <ul className="list-styled mb-0" id="productsNav">
                                                {
                                                    loadingCategories ? [...Array(15)].map(e => <Skeleton height={10} />) : categories.map((e, i) => <li key={e._id} className="list-styled-item"><NavLink className="list-styled-link" to={`/catalog/${e.slug}`}>{e.title}</NavLink></li>)
                                                }


                                            </ul>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </form>
                        {/* <ProductForm {...categories} /> */}
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Header */}
                        <div className="row align-items-center mb-7">
                            <div className="col-12 col-md">
                                {/* Heading */}
                                <h3 className="mb-1" style={{ fontFamily: 'arial' }}>{category.title}</h3>

                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Select */}
                                <select className="custom-select custom-select-xs">
                                    <option selected>Most popular</option>
                                </select>
                            </div>
                        </div>
                        {/* Tags */}

                        {/* Products */}

                        <div className="row">
                            {/* <Product /> */}

                            {
                                product.map((value, i) =>
                                    <div className="col-6 col-md-4">
                                        <Product key={value}   {...value} />
                                    </div>)

                            }
                        </div>

                        {/* Pagination */}

                        <Pagination {...paginate} />
                    </div>
                </div>
            </div>
        </section>
    )

}