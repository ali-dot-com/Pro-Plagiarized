import "./signin.css"

function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-lg-7 my-3 bg-image img-fluid signin-image"></div>

                    <div className="col-lg-5 right-items d-flex align-items-center justify-content-center">
                        <h1 className="my-2 sign-In-Heading"><span>C</span>haapa.com</h1>
                        <span className="mt-2">Log in to your existing account</span>
                        <form action="" className="form mt-4 d-flex align-items-center justify-content-center">
                            <div class="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                                <a href="#" className="forget-password">Forgot Password?</a>
                            </div>
                            <div className="form-floating">
                                <button type="" className="btn btn-primary">Sign In</button>
                            </div>
                            <br /><br /><br />
                            <span className="new-account">Dont have an account?&nbsp;
                                <a href="#" className="forget-password">Sign Up</a>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
