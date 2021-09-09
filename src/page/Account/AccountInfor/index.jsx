import userEvent from "@testing-library/user-event";
import TabLst from "../TabList";
import user from '../../../service/user';
import { updateAction } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../hook/useFormValidate";
import Auth from "../../Auth";
import { useState } from "react";
export default function AccountInfor() {

    let dispatch = useDispatch()
    let { login } = useSelector(store => store.authReducer)
    let { form, error, inputChange, check } = useFormValidate({
        first_name: login.first_name,
        last_name: login.last_name,
        password: '',
        new_password: '',
    }, {
        rule: {
            first_name: {
                required: true
            },
            last_name: {
                required: true,

            },

            password: {
                required: true
            },
            new_password: {
                required: true,
            }
        },
        message: {
            first_name: {
                required: 'Họ và tên không được để trống'
            },
            last_name: {
                required: 'Họ và tên không được để trống'
            },
            password: {
                required: 'Vui Lòng nhập Password',
            },
            new_password: {
                required: 'Vui Lòng nhập Password',

            }

        }

    })
    async function onSubmit(e) {
        e.preventDefault();
        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            dispatch(updateAction(form))
        }

    }
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <TabLst />
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                        {/* Form */}

                        <form>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountFirstName">
                                            First Name *
                                        </label>
                                        <input value={form.first_name} onChange={inputChange} name="first_name" className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" required />
                                        {
                                            error.first_name && <p className="error-text">{error.first_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountLastName">
                                            Last Name *
                                        </label>
                                        <input value={form.last_name} onChange={inputChange} name="last_name" className="form-control  form-control-sm" id="accountLastName" type="text" placeholder="Last Name *" defaultValue="Robinson" required />
                                        {
                                            error.last_name && <p className="error-text">{error.last_name}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountEmail">
                                            Email Address *
                                        </label>
                                        <input disabled value={login.email} className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue="user@email.com" required />

                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="accountPassword">
                                            Current Password *
                                        </label>
                                        <input value={form.password} onChange={inputChange} name="password" className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
                                        {
                                            error.password && <p className="error-text">{error.password}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="AccountNewPassword">
                                            New Password *
                                        </label>
                                        <input value={form.new_password} onChange={inputChange} name="new_password" className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
                                        {
                                            error.new_password && <p className="error-text">{error.new_password}</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Birthday */}
                                    <div className="form-group">
                                        {/* Label */}
                                        <label>Date of Birth</label>
                                        {/* Inputs */}
                                        <div className="form-row">
                                            <div className="col-auto">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountDate">
                                                    Date
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountDate">
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option selected>12</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountMonth">
                                                    Month
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountMonth">
                                                    <option>January</option>
                                                    <option selected>February</option>
                                                    <option>March</option>
                                                </select>
                                            </div>
                                            <div className="col-auto">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountYear">
                                                    Year
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountYear">
                                                    <option>1990</option>
                                                    <option selected>1991</option>
                                                    <option>1992</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Gender */}
                                    <div className="form-group mb-8">
                                        <label>Gender</label>
                                        <div className="btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-sm btn-outline-border active">
                                                <input type="radio" name="gender" defaultChecked /> Male
                                            </label>
                                            <label className="btn btn-sm btn-outline-border">
                                                <input type="radio" name="gender" /> Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit" onClick={onSubmit}>Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}