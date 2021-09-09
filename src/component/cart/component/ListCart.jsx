import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Decrease, Increase, Remove, Quantity } from "../../../redux/actions/cartAction"

export default function ListCart(props) {
    let { thumbnail_url, name, real_price, cartNum, _id, slug } = props
    let dispatch = useDispatch()
    let [input, setInput] = useState(cartNum)
    function handleDecrease() {
        dispatch(Decrease({ ...props }))
    }
    function handleIncrease() {
        dispatch(Increase({ ...props }))
    }

    function handleRemove() {
        dispatch(Remove({ ...props }))
    }

    useEffect(() => {
        setInput(cartNum)
    })

    function handleQuantity(e) {
        if (e.charCode === 13) {
            let num = parseInt(input)
            dispatch(Quantity({ _id, num }))
        }

    }


    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <Link to={`/product/${slug}`}>
                        <img className="img-fluid" src={thumbnail_url} alt="..." />
                    </Link>
                </div>
                <div className="col-8">
                    {/* Title */}
                    <p className="font-size-sm font-weight-bold mb-6">
                        <Link className="text-body" to="./product.html">{name}</Link> <br />
                        <span className="text-muted">{real_price}vnd</span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        {/* Select */}
                        <button onClick={handleDecrease}>-</button>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleQuantity}
                        />

                        <button onClick={handleIncrease} >+</button>
                        {/* Remove */}
                        <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                            <i className="fe fe-x" onClick={handleRemove} /> Remove
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}
