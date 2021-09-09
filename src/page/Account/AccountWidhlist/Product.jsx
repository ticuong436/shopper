import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishlist } from '../../../redux/actions/userAction'

export default function Product(props) {
    let { name, real_price, thumbnail_url, _id } = props
    let dispatch = useDispatch()

    function handleRemove(_id) {
        dispatch(removeWishlist({ ...props }))
    }
    return (
        <div className="card mb-7">
            {/* Image */}
            <div className="card-img">
                {/* Action */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={handleRemove}>
                    <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                <img className="card-img-top" src={thumbnail_url} alt="..." />
            </div>
            {/* Body */}
            <div className="card-body font-weight-bold text-center">
                <a className="text-body" href="product.html">{name}</a> <br />
                <span className="text-muted">{real_price}</span>
            </div>
        </div>
    )

}
