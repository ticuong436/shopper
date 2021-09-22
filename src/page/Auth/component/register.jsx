import { useState } from "react";
import { useSelector } from "react-redux";
import useFormValidate from "../../../hook/useFormValidate"
import Auth from "../../../service/auth";

export default function Register() {
    let [err, setErr] = useState()
    let { form, inputChange, error, check } = useFormValidate({
        firstname: '',
        lastname: '',
        phone: '',
        username: '',
        fb: '',
        option: '',
        password: ''

    }, {
        rule: {
            firstname: {
                required: true
            },
            lastname: {
                required: true,

            },
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            },
            confirmpassword: {
                required: true,
                match: 'password'
            }

        },
        message: {
            firstname: {
                required: 'Họ và tên không được để trống'
            },
            lastname: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                required: 'Số điện thoại không được để trống',
                pattern: 'Phải là số điện thoại Việt Nam'
            },
            username: {
                required: 'Email không được để trống',
                pattern: 'Địa chỉ Email không đúng'
            },
            fb: {
                required: 'Link FB không được để trống',
                pattern: 'Đây không phải là Link FaceBook'
            },
            password: {
                required: 'Vui Lòng nhập Password',

            },
            confirmpassword: {
                required: 'Vui Lòng nhập Password',
                match: 'Không hớp với mật khẩu đã nhập'

            }

        }
    })

    let { statusRegister } = useSelector(store => store.authReducer)
    async function onSubmit(e) {
        e.preventDefault();
        let errorObj = check()
        if (Object.keys(errorObj).length === 0) {
            let res = await Auth.register({
                username: form.username,
                password: form.password
            })
            if (res.error) {
                setErr(res.error)
            } else {
                setErr('Đăng kí thành công')
            }
        }
    }
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>
                    {/* Form */}
                    {
                        err == 'Đăng kí thành công' ? <p style={{ color: 'green' }}>{err}</p> : <p style={{ color: 'red' }}>{err}</p>
                    }
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                {statusRegister && <p className="error-text">{statusRegister}</p>}
                                <div className="form-group">

                                    <label className="sr-only" htmlFor="registerFirstName">
                                        First Name *
                                    </label>

                                    <input value={form.firstname} onChange={inputChange} name="firstname" className="form-control form-control-sm" id="registerLastName" type="text" placeholder="First Name *" required />
                                    {
                                        error.firstname && <p className="error-text">{error.firstname}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerLastName">
                                        Last Name *
                                    </label>
                                    <input value={form.lastname} onChange={inputChange} name="lastname" className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                                    {
                                        error.lastname && <p className="error-text">{error.lastname}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerEmail">
                                        Email Address *
                                    </label>
                                    <input value={form.username} name="username" onChange={inputChange} className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                                    {
                                        error.username && <p className="error-text">{error.username}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPassword">
                                        Password *
                                    </label>
                                    <input value={form.password} name="password" onChange={inputChange} className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                                    {
                                        error.password && <p className="error-text" >{error.password}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPasswordConfirm">
                                        Confirm Password *
                                    </label>
                                    <input value={form.confirmpassword} name="confirmpassword" onChange={inputChange} className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
                                    {
                                        error.confirmpassword && <p className="error-text" >{error.confirmpassword}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit" onClick={onSubmit}>
                                    Register
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}