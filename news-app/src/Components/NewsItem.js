import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL, author, date, source} = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}> 
                        {source}
                    </span>
                    <img src={imageURL ? imageURL : "https://image.shutterstock.com/image-illustration/breaking-news-minimalistic-logo-on-260nw-1298244646.jpg"} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By: {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsURL} className="btn btn-sm btn-outline-dark">Read Full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
