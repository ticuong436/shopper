import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect, useHistory } from "react-router-dom";
import useFormValidate from "../../../hook/useFormValidate";
import Cart from "../../../service/cart";

import ListCart from "./ListCart";
export default function Check() {
    let { list, amount, num } = useSelector(store => store.cart)
    let { login } = useSelector(store => store.authReducer)
    let dispatch = useDispatch()
    let history = useHistory()
    let { form, inputChange, error, check, handleSubmit } = useFormValidate({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        // company: '',
        // country: '',
        // address_line1: '',
        // address_line2: '',
        city: '',
        // postcode: '',

        // shipping_option: cart.shipping_option,
        // shipping_diff_address: false,
        // ship_country: '',
        // ship_address1: '',
        // ship_address2: '',
        // ship_city: '',
        // ship_post_code: '',

        // payment_option: cart.payment_option,
        // payment_card_number: '',
        // payment_card_name: '',
        // payment_card_month: '',
        // payment_card_year: '',
        // payment_card_cvv: '',
        // note: '',
    }, {
        rule: {
            first_name: { required: true },
            last_name: { required: true },
            email: { required: true, pattern: 'email' },
            phone: { required: true, pattern: "phone" },
            city: { required: true },

            // ship_country: { required: true },
            // ship_city: { required: true },
            // ship_post_code: { required: true },

            // payment_card_number: { required: true },
            // payment_card_name: { required: true },
            // payment_card_cvv: { required: true },

        },
        message: {
            first_name: {
                required: "Họ không được để trống"
            },
            last_name: {
                required: "Tên không được để trống"
            },
            email: {
                required: "Emaill không được để trống",
                pattern: "Địa chỉ Email không đúng "
            },
            phone: {
                required: "Số điện thoại không được để trống",
                pattern: "Số điện thoại không đúng đinh dạng"
            },
            city: {
                required: "Địa chỉ không được để trống"

            }
        }
    })

    async function onsubmit(form) {
        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            history.push(`/order-completed`)
            localStorage.setItem('listcart', 0)
            localStorage.setItem('amount', 0)
            localStorage.setItem('num', 0)
            window.location.reload();

        }
    }
    if (num === 0) return <Redirect to="catalog" />
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-4">Checkout</h3>
                        {/* Subheading */}
                        {
                            !login ? <p className="mb-10">
                                Already have an account? <Link className="font-weight-bold text-reset" to="/login">Click here to login</Link>
                            </p> : <></>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        {/* Form */}
                        <form onSubmit={handleSubmit(onsubmit)}>
                            {/* Heading */}
                            <h6 className="mb-7">Billing Details</h6>
                            {/* Billing details */}
                            <div className="row mb-9">
                                <div className="col-12 col-md-6">
                                    {/* First Name */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingFirstName">First Name *</label>
                                        <input value={form.first_name} onChange={inputChange} name="first_name" className="form-control form-control-sm" id="checkoutBillingFirstName" type="text" placeholder="First Name" required />
                                        {
                                            error.first_name && <p className="error-text">{error.first_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Last Name */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingLastName">Last Name *</label>
                                        <input value={form.last_name} onChange={inputChange} name="last_name" className="form-control form-control-sm" id="checkoutBillingLastName" type="text" placeholder="Last Name" required />
                                        {
                                            error.last_name && <p className="error-text">{error.last_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingEmail">Email *</label>
                                        <input value={form.email} onChange={inputChange} name="email" className="form-control form-control-sm" id="checkoutBillingEmail" type="email" placeholder="Email" required />
                                        {
                                            error.email && <p className="error-text">{error.email}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Address Line 1 */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingAddress">Address</label>
                                        <input className="form-control form-control-sm" id="checkoutBillingAddress" type="text" placeholder="Address" required />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    {/* Town / City */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingTown">Town / City *</label>
                                        <input className="form-control form-control-sm" value={form.city} onChange={inputChange} name="city" id="checkoutBillingTown" type="text" placeholder="Town / City" required />
                                        {
                                            error.city && <p className="error-text">{error.city}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* ZIP / Postcode */}
                                    <div className="form-group">
                                        <label htmlFor="checkoutBillingZIP">ZIP / Postcode *</label>
                                        <input className="form-control form-control-sm" id="checkoutBillingZIP" type="text" placeholder="ZIP / Postcode" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Mobile Phone */}
                                    <div className="form-group mb-0">
                                        <label htmlFor="checkoutBillingPhone">Mobile Phone *</label>
                                        <input value={form.phone} onChange={inputChange} name="phone" className="form-control form-control-sm" id="checkoutBillingPhone" type="tel" placeholder="Mobile Phone" required />
                                        {
                                            error.phone && <p className="error-text">{error.phone}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Heading */}
                            <h6 className="mb-7">Shipping Details</h6>
                            {/* Shipping details */}
                            <div className="table-responsive mb-6">
                                <table className="table table-bordered table-sm table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" id="checkoutShippingStandard" name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                        Standard Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 5 - 7 working days</td>
                                            <td>$8.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" id="checkoutShippingExpress" name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                        Express Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 3 - 5 working days</td>
                                            <td>$12.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" id="checkoutShippingShort" name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                        1 - 2 Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 1 - 2 working days</td>
                                            <td>$18.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" id="checkoutShippingFree" name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                        Free Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Living won't the He one every subdue
                                                meat replenish face was you morning
                                                firmament darkness.</td>
                                            <td>$0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Address */}
                            <div className="mb-9">
                                {/* Checkbox */}
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="checkoutShippingAddress" type="checkbox" />
                                    <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                        Ship to a different address?
                                    </label>
                                </div>
                                {/* Collapse */}
                                <div className="collapse" id="checkoutShippingAddressCollapse">
                                    <div className="row mt-6">
                                        <div className="col-12">
                                            {/* Country */}
                                            <div className="form-group">
                                                <label htmlFor="checkoutShippingAddressCountry">Country *</label>
                                                <input className="form-control form-control-sm" id="checkoutShippingAddressCountry" type="text" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Address Line 1 */}
                                            <div className="form-group">
                                                <label htmlFor="checkoutShippingAddressLineOne">Address Line 1 *</label>
                                                <input className="form-control form-control-sm" id="checkoutShippingAddressLineOne" type="text" placeholder="Address Line 1" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Address Line 2 */}
                                            <div className="form-group">
                                                <label htmlFor="checkoutShippingAddressLineTwo">Address Line 2</label>
                                                <input className="form-control form-control-sm" id="checkoutShippingAddressLineTwo" type="text" placeholder="Address Line 2 (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            {/* Town / City */}
                                            <div className="form-group">
                                                <label htmlFor="checkoutShippingAddressTown">Town / City *</label>
                                                <input className="form-control form-control-sm" id="checkoutShippingAddressTown" type="text" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            {/* Town / City */}
                                            <div className="form-group">
                                                <label htmlFor="checkoutShippingAddressZIP">ZIP / Postcode *</label>
                                                <input className="form-control form-control-sm" id="checkoutShippingAddressZIP" type="text" placeholder="ZIP / Postcode" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <button className="btn btn-sm btn-outline-dark" type="submit">
                                                Save Address
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Heading */}
                            <h6 className="mb-7">Payment</h6>
                            {/* List group */}
                            <div className="list-group list-group-sm mb-7">
                                <div className="list-group-item">
                                    {/* Radio */}
                                    <div className="custom-control custom-radio">
                                        {/* Input */}
                                        <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
                                        {/* Label */}
                                        <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                            Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                                <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
                                    {/* Form */}
                                    <div className="form-row py-5">
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardNumber">Card Number</label>
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="form-group mb-md-0">
                                                <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="form-group mb-md-0">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="input-group input-group-merge">
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                        <i className="fe fe-help-circle" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    {/* Radio */}
                                    <div className="custom-control custom-radio">
                                        {/* Input */}
                                        <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                        {/* Label */}
                                        <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                            <img src="/img/brands/color/paypal.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Notes */}
                            <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows={5} placeholder="Order Notes (optional)" defaultValue={""} />
                        </form>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                        {/* Heading */}
                        <h6 className="mb-7">Order Items {num}</h6>
                        {/* Divider */}
                        <hr className="my-7" />
                        {/* List group */}
                        <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">

                            {
                                list.map((e, i) => <ListCart key={e} {...e} />)
                            }


                        </ul>
                        {/* Card */}
                        <div className="card mb-9 bg-light">
                            <div className="card-body">
                                <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                    <li className="list-group-item d-flex">
                                        <span>Subtotal</span> <span className="ml-auto font-size-sm">{amount}vnd</span>
                                    </li>
                                    <li className="list-group-item d-flex">
                                        <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                                    </li>
                                    <li className="list-group-item d-flex">
                                        <span>Shipping</span> <span className="ml-auto font-size-sm">$8.00</span>
                                    </li>
                                    <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                        <span>Total</span> <span className="ml-auto">{amount}vnd</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Disclaimer */}
                        <p className="mb-7 font-size-xs text-gray-500">
                            Your personal data will be used to process your order, support
                            your experience throughout this website, and for other purposes
                            described in our privacy policy.
                        </p>
                        {/* Button */}
                        <button className="btn btn-block btn-dark" onClick={onsubmit}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}