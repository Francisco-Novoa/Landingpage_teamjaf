import React from "react"

const Header = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card bg-dark text-dark border-0 rounded-0px-0">
                        <img src="../public/assets/img/bg,jpg" />
                    <div className="card-img-overlay">
                            <h1 className="card-title text-center bg-white display-1 mt-5 font-weight-bold">One Page Wonder</h1>
                            <h1 className="card-text text-center bg-white display-4 font-weight-bold">Will Knock Your Socks Off</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header