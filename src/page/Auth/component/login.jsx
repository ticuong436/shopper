import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../hook/useFormValidate";
import { loginAction } from "../../../redux/actions/authAction";


export default function Login() {



    let { form, error, inputChange, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },

    })

    let dispatch = useDispatch()
    let { loginError } = useSelector(store => store.authReducer)
    console.log(loginError);
    function handleLogin(e) {
        e.preventDefault();

        let error = check();
        if (Object.keys(error).length === 0) {
            dispatch(loginAction(form))
        }

    }
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Returning Customer</h6>
                    {/* Form */}
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    {loginError && <p className="error-text" >{loginError}</p>}
                                    <label className="sr-only" htmlFor="loginEmail">
                                        Email Address *
                                    </label>
                                    <input value={form.username} onChange={inputChange} name="username" className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" required />
                                    {
                                        error.username && <p className="error-text" >{error.username}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginPassword">
                                        Password *
                                    </label>
                                    <input value={form.password} name="password" onChange={inputChange} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />
                                    {
                                        error.password && <p className="error-text" >{error.password}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                        Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit" onClick={handleLogin}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}