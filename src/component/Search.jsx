import React from 'react'
import { useEffect } from 'react'
import reactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFormValidate from '../hook/useFormValidate'
import searchAction from "../redux/actions/searchAction"
import ProductApi from '../service/productApi'
export default function Search() {

    let { categories } = useSelector(store => store.product)
    let dispatch = useDispatch()
    let { form, inputChange, error, check } = useFormValidate({
        inputsa: ''
    }, {
        rule: {
            inputsa: { require: true, min: 3 }
        },
        message: {
            inputsa: {
                require: "Vui lòng nhập thông tin tiềm kiếm",
                min: "Vui lòng nhập hơn 3 kí tự"
            }
        }
    })
    let search = useSelector(store => store.search)

    function submit(e) {
        let error = check()
        e.preventDefault();
        if (Object.keys(error).length === 0) {

            dispatch(searchAction(form.inputsa))
        }
    }


    return reactDom.createPortal(
        <div className="modal fixed-right fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Search Products</strong>
                    </div>
                    {/* Body: Form */}
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                                <select className="custom-select" id="modalSearchCategories">
                                    <option selected>All Categories</option>
                                    {
                                        categories.map(e => <option key={e._id} value={e._id}>{e.title}</option>)
                                    }

                                </select>
                            </div>
                            <div className="input-group input-group-merge">
                                <input value={form.inputsa} onChange={inputChange} name="inputsa" className="form-control" type="text" placeholder="Search" required />

                                <div className="input-group-append">
                                    <button className="btn btn-outline-border" type="submit" onClick={submit}>
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Body: Results (add `.d-none` to disable it) */}
                    <div className="modal-body border-top font-size-sm">
                        {/* Heading */}
                        <p>Search Results:</p>
                        {/* Items */}
                        {
                            search?.list.map((e) => <SearchItem key={e._id} {...e} />)
                        }
                        {/* Button */}
                        <a className="btn btn-link px-0 text-reset" href="./shop.html">
                            View All <i className="fe fe-arrow-right ml-2" />
                        </a>
                    </div>
                    {/* Body: Empty (remove `.d-none` to disable it) */}
                    <div className="d-none modal-body">
                        {/* Text */}
                        <p className="mb-3 font-size-sm text-center">
                            Nothing matches your search
                        </p>
                        <p className="mb-0 font-size-sm text-center">
                            😞
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ,
        document.body
    )
}


function SearchItem({ name, thumbnail_url, real_price }) {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={thumbnail_url} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <a className="stretched-link text-body" href="./product.html">{name}</a> <br />
                    <span className="text-muted">{real_price}vnd</span>
                </p>
            </div>
        </div>
    )
}
