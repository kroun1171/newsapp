import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let{title,description,imageurl,newsurl}=this.props
        return (
                <div>
                    <div className="card px-500" style={{width: "18rem"}}>
                        <img src={!imageurl?"https://www.vecteezy.com/free-videos/breaking-news" : imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer"href={newsurl} target="_blank"  className="btn btn-primary btn-sm">Read more</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Newsitem
