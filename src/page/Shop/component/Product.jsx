import { useDispatch, useSelector } from "react-redux"
import { addWidhlist } from "../../../redux/actions/userAction"
import Skeleton from 'react-loading-skeleton';
import { cartAction } from "../../../redux/actions/cartAction";
import { viewAction } from "../../../redux/actions/viewAction";
import { Link } from "react-router-dom";

export default function Product(props) {

    let { thumbnail_url, name, real_price, slug } = props
    let { loading } = useSelector(store => store.product)

    let dispatch = useDispatch()
    function handleAddCart() {
        dispatch(cartAction({ ...props }))
    }
    function handleView() {
        dispatch(viewAction({ ...props }))
    }
    function handleWishlist() {
        dispatch(addWidhlist({ ...props }))

    }
    return (
        <>

            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    {/* <a className="card-img-hover" href="product.html">
                        <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                    </a> */}
                    {
                        loading ? <Skeleton variant='react' width='100%' height={250} /> : <>
                            <Link className="card-img-hover" to={`/product/${slug}`}>
                                <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                                <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                            </Link>
                        </>
                    }

                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" onClick={handleView} />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" onClick={handleAddCart} />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" onClick={handleWishlist} />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                {loading ? <Skeleton variant='react' width='100%' height={20} /> : <div className="card-body px-0">

                    {/* Category */}

                    {/* Title */}
                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            {name}
                        </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {real_price} VND
                    </div>
                </div>}



            </div>


        </>
    )

}