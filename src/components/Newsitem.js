import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
            <div className="card">
            <span className="position-absolute top-0  translate-middle  bg-danger border  " style={{left:'90%',zIndex:1}}>{source}
                              </span>
                <img src={!imageUrl?"https://c.ndtvimg.com/2023-03/m4r6rqsg_sasha-cheetah_625x300_27_March_23.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
                </div>
      </div>
    )
  }
}

export default Newsitem
