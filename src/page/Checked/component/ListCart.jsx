import { useDispatch } from "react-redux"
import { Decrease, Increase } from "../../../redux/actions/cartAction"
export default function ListCart(props) {

    let { thumbnail_url, name, real_price, cartNum, _id } = props
    let dispatch = useDispatch()
    function handleDecrease() {
        dispatch(Decrease({ ...props }))
    }
    function handleIncrease() {
        dispatch(Increase({ ...props }))
    }
    return (
        <li className="list-group-item">


            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <a href="product.html">
                        <img src={thumbnail_url} alt="..." className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                        <a className="text-body" href="product.html">{name}</a> <br />
                        <button style={{ width: "30px", height: "30px", borderRadius: "5px" }} onClick={handleDecrease}>-</button>
                        <span className="text-muted" style={{ padding: "0 10px" }}>{cartNum}</span>
                        <button style={{ width: "30px", height: "30px", borderRadius: "5px" }} onClick={handleIncrease}>+</button>
                    </p>
                    {/* Text */}
                    <div className="font-size-sm text-muted">

                    </div>
                </div>
            </div>
        </li>
    )

}