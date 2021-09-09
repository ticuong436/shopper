import reactDOM from "react-dom"
import Cart from "./cart/index"
import PopupProduct from "./popupProduct"
import Search from "./Search"
export default function Top() {
    return reactDOM.createPortal(
        <>
            <div className="modal fade" id="modalNewsletterHorizontal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Content */}
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-5">
                                {/* Image */}
                                <img className="img-fluid" src="/img/covers/cover-25.jpg" alt="..." />
                            </div>
                            <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                                {/* Body */}
                                <div className="modal-body my-auto py-10">
                                    {/* Heading */}
                                    <h4>Subscribe to Newsletter and get 15% Discount</h4>
                                    {/* Text */}
                                    <p className="mb-7 font-size-lg">
                                        On your next purchase
                                    </p>
                                    {/* Form */}
                                    <form>
                                        <div className="form-row">
                                            <div className="col">
                                                {/* Input */}
                                                <label className="sr-only" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                                                <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />
                                            </div>
                                            <div className="col-auto">
                                                {/* Button */}
                                                <button className="btn btn-sm btn-dark" type="submit">
                                                    <i className="fe fe-send" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Footer */}
                                <div className="modal-footer pt-0">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        {/* Input */}
                                        <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />
                                        {/* Label */}
                                        <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                                            Prevent this Pop-up
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter: Vertical */}
            <div className="modal fade" id="modalNewsletterVertical" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Body */}
                        <div className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white" style={{ backgroundImage: 'url(/img/covers/cover-26.jpg)' }}>
                            {/* Heading */}
                            <h4>Subscribe to Newsletter and get 15% Discount</h4>
                            {/* Text */}
                            <p className="mb-0 font-size-lg">
                                On your next purchase
                            </p>
                        </div>
                        {/* Body */}
                        <div className="modal-body py-9">
                            {/* Form */}
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        {/* Input */}
                                        <label className="sr-only" htmlFor="modalNewsletterVerticalEmail">Enter Email *</label>
                                        <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />
                                    </div>
                                    <div className="col-auto">
                                        {/* Button */}
                                        <button className="btn btn-sm btn-dark" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Footer */}
                        <div className="modal-footer justify-content-center pt-0">
                            {/* Checkbox */}
                            <div className="custom-control custom-checkbox">
                                {/* Input */}
                                <input className="custom-control-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />
                                {/* Label */}
                                <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterVerticalCheckbox">
                                    Prevent this Pop-up
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Password Reset */}
            <div className="modal fade" id="modalPasswordReset" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Forgot Password?</strong>
                        </div>
                        {/* Body */}
                        <div className="modal-body text-center">
                            {/* Text */}
                            <p className="mb-7 font-size-sm text-gray-500">
                                Please enter your Email Address. You will receive a link
                                to create a new password via Email.
                            </p>
                            {/* Form */}
                            <form>
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="modalPasswordResetEmail">
                                        Email Address *
                                    </label>
                                    <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required />
                                </div>
                                {/* Button */}
                                <button className="btn btn-sm btn-dark">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product */}
            <PopupProduct />
            {/* Search */}
            <Search />
            {/* Shopping Cart */}
            <Cart />
            {/* Sidebar */}
            <div className="modal fixed-right fade" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Body */}
                        <div className="modal-body px-10 my-auto">
                            {/* Nav */}
                            <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                                <li className="nav-item">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarHome">
                                        Home
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse" id="sidebarHome" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index.html">Default</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarCatalog">
                                        Catalog
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse" id="sidebarCatalog" data-parent="#sidebarNav">
                                        <div className="row">
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5 font-weight-bold">Clothing</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg py-3">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Dresses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Denim</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jeans</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Leggings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5 font-weight-bold">Shoes &amp; Boots</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Boots</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Heels</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Trainers</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Sandals</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Shoes</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5 font-weight-bold">Bags &amp; Accessories</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Luggage</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Belts</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hats</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarShop">
                                        Shop
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse" id="sidebarShop" data-parent="#sidebarNav">
                                        <div className="row">
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5">Shop</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5">Product</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5">Support</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5">Account</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-order.html">Order</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./auth.html">Auth</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 py-3">
                                                {/* Heading */}
                                                <h6 className="mb-5">Modals</h6>
                                                {/* Links */}
                                                <ul className="list-styled font-size-lg">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                            Newsletter: Horizontal
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                            Newsletter: Vertical
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                            Search
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                            Shopping Cart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                            Size Chart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                            Wait List
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarPages">
                                        Pages
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse" id="sidebarPages" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./about.html">About</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./faq.html">FAQ</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./404.html">404</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarBlog">
                                        Blog
                                    </a>
                                    {/* Collapse */}
                                    <div className="collapse" id="sidebarBlog" data-parent="#sidebarNav">
                                        <ul className="list-styled font-size-lg py-3 mb-0">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./blog.html">Blog</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                                </li>
                            </ul>
                        </div>
                        {/* Body */}
                        <div className="moda-body px-10 py-9">
                            {/* Social links */}
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-gray-350" href="#!">
                                        <i className="fab fa-medium-m" />
                                    </a>
                                </li>
                            </ul>
                            {/* Footer */}
                            <div className="font-size-xxs text-gray-350">
                                © 2019 All rights reserved. Designed by Unvab.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Size Chart */}
            <div className="modal fade" id="modalSizeChart" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Size Chart</strong>
                        </div>
                        {/* Body */}
                        <div className="modal-body border-bottom">
                            {/* Header */}
                            <div className="d-flex mb-7">
                                {/* Heading */}
                                <h5 className="mb-0">Clothing</h5>
                                {/* Toggles */}
                                <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                        <input type="radio" name="modalSizeChartUnitOne" defaultChecked /> IN
                                    </label>
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                        <input type="radio" name="modalSizeChartUnitOne" /> CM
                                    </label>
                                </div>
                            </div>
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-bordered table-sm table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>US</th>
                                            <th>Bust</th>
                                            <th>Waist</th>
                                            <th>Hips</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>XS</td>
                                            <td>2</td>
                                            <td>32</td>
                                            <td>24 - 25</td>
                                            <td>33 - 34</td>
                                        </tr>
                                        <tr>
                                            <td>S</td>
                                            <td>4</td>
                                            <td>34 - 35</td>
                                            <td>26 - 27</td>
                                            <td>35 - 26</td>
                                        </tr>
                                        <tr>
                                            <td>M</td>
                                            <td>6</td>
                                            <td>36 - 37</td>
                                            <td>28 - 29</td>
                                            <td>38 - 40</td>
                                        </tr>
                                        <tr>
                                            <td>L</td>
                                            <td>8</td>
                                            <td>38 - 29</td>
                                            <td>30 - 31</td>
                                            <td>42 - 44</td>
                                        </tr>
                                        <tr>
                                            <td>XL</td>
                                            <td>10</td>
                                            <td>40 - 41</td>
                                            <td>32 - 33</td>
                                            <td>45 - 47</td>
                                        </tr>
                                        <tr>
                                            <td>XXL</td>
                                            <td>12</td>
                                            <td>42 - 43</td>
                                            <td>34 - 35</td>
                                            <td>48 - 50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Header */}
                            <div className="d-flex mb-7">
                                {/* Heading */}
                                <h5 className="mb-0">Shoes</h5>
                                {/* Toggles */}
                                <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                        <input type="radio" name="modalSizeCharUnitTwo" defaultChecked /> IN
                                    </label>
                                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                        <input type="radio" name="modalSizeCharUnitTwo" /> CM
                                    </label>
                                </div>
                            </div>
                            {/* Tables */}
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* Table */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-lg-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>26.5</td>
                                                    <td>5.5</td>
                                                    <td>23.1</td>
                                                </tr>
                                                <tr>
                                                    <td>37</td>
                                                    <td>6</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>37.5</td>
                                                    <td>6.</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>38</td>
                                                    <td>7</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>38.5</td>
                                                    <td>7.5</td>
                                                    <td>24.5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Table */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>39</td>
                                                    <td>8</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>40</td>
                                                    <td>9</td>
                                                    <td>25.4</td>
                                                </tr>
                                                <tr>
                                                    <td>40.5</td>
                                                    <td>9.5</td>
                                                    <td>25.7</td>
                                                </tr>
                                                <tr>
                                                    <td>41</td>
                                                    <td>10</td>
                                                    <td>26.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Wait List */}
            <div className="modal fade" id="modalWaitList" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Wait List</strong>
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            <div className="row mb-6">
                                <div className="col-12 col-md-3">
                                    {/* Image */}
                                    <a href="./product.html">
                                        <img className="img-fluid mb-7 mb-md-0" src="/img/products/product-6.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="col-12 col-md-9">
                                    {/* Label */}
                                    <p>
                                        <a className="font-weight-bold text-body" href="./product.html">Cotton floral print Dress</a>
                                    </p>
                                    {/* Radio */}
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeOne" defaultValue={6} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeOne">3XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeTwo">2XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeThree" defaultValue={7} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeThree">XS</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFour" defaultValue="7.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" defaultChecked />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeFour">S</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFive" defaultValue={8} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeFive">M</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSix" defaultValue="8.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeSix">LG</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSeven" defaultValue={9} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeSeven">XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeEight" defaultValue="9.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeEight">2XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeNine" defaultValue={10} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeNine">3XL</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                        <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTen" defaultValue="10.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="custom-control-label" htmlFor="modalWaitListSizeTen">4XL</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* Text */}
                                    <p className="font-size-sm text-center text-gray-500">
                                        Justo ut diam erat hendrerit morbi porttitor,
                                        per eu curabitur diam sociis.
                                    </p>
                                </div>
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-12 col-md-6">
                                    {/* Form group */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="listName">Your Name</label>
                                        <input className="form-control" id="listName" type="text" placeholder="Your Name *" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Form group */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="listEmail">Your Name</label>
                                        <input className="form-control" id="listEmail" type="email" placeholder="Your Email *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    )

}