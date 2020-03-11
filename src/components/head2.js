import React from 'react';

const Head2 = (props) => {
    return (
        <div className="container d-flex" id="head2">
            <div className="row mt-3">
                <div className="col-4 p-5 text-center">
                    <img src="../public/assets/img/2.jpg" width="340px" height="333px" className="rounded-circle"/>
                </div>
                <div className="col-8 p-5">
                        <h2>The Second Heading <span className="text-muted">Is Pretty Cool Too
                    </span></h2>
                        <p>Lorem, ipsum dolor it amet consectetur adipisicing elit.
                        Voluptates dolor minus sed temporibus quidem itaque beatae expedita vel fuga quam
                        pariatur vero facilis quasi, reprehenderit, incidunt repellendus, facere repudiandae
                    ipsa?</p>
                    </div>
            </div>
        </div>
           )
}
export default Head2