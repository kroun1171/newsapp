import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
    
    constructor() {
        super();
        //console.log("i am constructor")
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
       // console.log("cdm")
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e538aecb1c1f4337b5795a98fda6e4f8&page=1"
        let data=await fetch(url)
        let parseddata=await data.json()
        console.log(parseddata)
        this.setState({articles : parseddata.articles})
    }
     handlenextclick=async ()=>{
        console.log("next")
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e538aecb1c1f4337b5795a98fda6e4f8&page= ${this.state.page+1}`
        let data=await fetch(url)
        let parseddata=await data.json()
        console.log(parseddata)
        
        this.setState({
            page:this.state.page+1,
            articles : parseddata.articles
        })

    }
     handleprevclick=async()=>{
        console.log("prev")
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e538aecb1c1f4337b5795a98fda6e4f8&page= ${this.state.page-1}`
        let data=await fetch(url)
        let parseddata=await data.json()
        console.log(parseddata)
        
        this.setState({
            page:this.state.page-1,
            articles : parseddata.articles
        })
    }
    render() {
        return (
            <div className='container my-4'>
                <h2>KROUN HEADLINES</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}
                                newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<1}className="btn btn-dark"onClick={this.handleprevclick}>&laquo;Prev</button>
                    <button className="btn btn-dark" onClick={this.handlenextclick}>Next&raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
