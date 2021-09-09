import { Link } from "react-router-dom";

export default function ProductForm({ title }) {
    return (
        <li className="list-styled-item">
            <a className="list-styled-link" href="#">
                {title}
            </a>
        </li>

    )

}