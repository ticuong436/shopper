import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useTranslate } from "../../core/useTranslate"
import Cart from "../../component/cart"
export default function Header() {
    let { t, selectLang, lang } = useTranslate()
    function changelang(lan) {
        selectLang(lan)
    }
    let { login } = useSelector(store => store.authReducer)
    let { num } = useSelector(store => store.cart)
    return (
        <>
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">{t(`Free shipping worldwide`)}</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <ul className="nav nav-divided navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">USD</a>
                                    <a className="dropdown-item" href="#!">EUR</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    {
                                        lang === 'en' ? 'English' : 'Tiếng Việt'

                                    }
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#" onClick={e => changelang('en')}>English</a>
                                    <a className="dropdown-item" href="#" onClick={e => changelang('vn')}>Vietnamese</a>
                                    <a className="dropdown-item" href="#">German</a>
                                </div>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav mr-8">
                            <li className="nav-item">
                                <a className="nav-link" href="./shipping-and-returns.html">{t(`Shipping`)}</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">{t(`Contact`)}</Link>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-medium" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            < nav className="navbar navbar-expand-lg navbar-light bg-white" >
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">
                        Shopper.
                    </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to='/'>{t(`Home`)}</Link>
                                {/* Menu */}

                            </li>
                            <li className="nav-item dropdown position-static">
                                {/* Toggle */}
                                <Link className="nav-link" to="/catalog">{t(`International`)}</Link>
                                {/* Menu */}

                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to="/catalog/dien-thoai-may-tinh-bang-id1789">{t(`Phone`)}</Link >
                                {/* Menu */}

                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to="/store-locator">{t(`Store Locator`)}</Link >
                                {/* Menu */}

                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">{t(`Blog`)}</a>
                                {/* Menu */}

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/getting-started.html">Docs</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                {
                                    (!login) ? <Link className="nav-link" to="/account">
                                        <i className="fe fe-user" />
                                    </Link> :
                                        <Link className="nav-link" to="/account">
                                            <i className="fas fa-user" />
                                        </Link>
                                }

                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account/account-wishlist">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={num}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )

}