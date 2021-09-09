export default function CartItem(props) {
    let { name, location, phone, storehourse, clicked, active } = props
    return (

        <div className={`card-body ${active ? "actives" : ""}`} onClick={clicked}>
            {/* Heading */}
            <p className="font-weight-bold">
                {name}
            </p>
            <p className="text-gray-500">
                {location}
            </p>
            <p>
                <strong>Phone:</strong> <br />
                <a className="text-gray-500" href="tel:6-146-389-574">{phone}</a>
            </p>
            <p className="mb-0">
                <strong>Store Hours:</strong> <br />
                <span className="text-gray-500">{storehourse}</span>

            </p>

        </div>


    )
}