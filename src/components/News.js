// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'

// export class News extends Component {
//     // articles = [
//     //     {
//     //       "source": {
//     //         "id": "wired",
//     //         "name": "Wired"
//     //       },
//     //       "author": "Wired",
//     //       "title": "The Uniquely American Future of US Authoritarianism",
//     //       "description": "The GOP-fueled far right differs from similar movements around the globe, thanks to the country’s politics, electoral system, and changing demographics.",
//     //       "url": "https://www.wired.com/story/us-authoritarian-movement-future",
//     //       "urlToImage": "https://media.wired.com/photos/641df5773491f4dd17124cde/191:100/w_1280,c_limit/The-Uniquely-American-Future-of-US-Authoritarianism-Security-GettyImages-1410363302.jpg",
//     //       "publishedAt": "2023-03-26T11:00:00Z",
//     //       "content": "Assuming democracy remains intact in the years to come, Levitsky thinks the GOP will have to eventually moderate its stance in response to changing demographics. The current extremism will not be sus… [+3547 chars]"
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "msnbc",
//     //         "name": "MSNBC"
//     //       },
//     //       "author": "Ja&#x27;han Jones",
//     //       "title": "Ron DeSantis is the political version of Clark Griswold",
//     //       "description": "The Florida governor's coercive style of politics is like Chevy Chase's character's fanatical obsession with getting his family to Walley World in \"Vacation.\"",
//     //       "url": "https://www.msnbc.com/the-reidout/reidout-blog/desantis-clark-griswold-vacation-florida-rcna76538",
//     //       "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-03/230324-2x1-ron-desantis-clark-griswold-ew-1201p-833492.jpg",
//     //       "publishedAt": "2023-03-25T10:00:00Z",
//     //       "content": "Virtually every feature written about Florida Gov. Ron DeSantis speaks to a megalomania thats become apparent to folks whove watched the Republican over the years. \r\nYouve undoubtedly heard variation… [+3921 chars]"
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "newsweek",
//     //         "name": "Newsweek"
//     //       },
//     //       "author": "Mark Davis",
//     //       "title": "Newsweek",
//     //       "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
//     //       "url": "https://www.newsweek.com/",
//     //       "urlToImage": "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
//     //       "publishedAt": "2023-03-01T12:07:28.8517009Z",
//     //       "content": null
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "the-washington-times",
//     //         "name": "The Washington Times"
//     //       },
//     //       "author": "The Washington Times https://www.washingtontimes.com",
//     //       "title": "Latest Quizzes",
//     //       "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
//     //       "url": "https://www.washingtontimes.com/quiz/",
//     //       "urlToImage": null,
//     //       "publishedAt": "2022-08-30T16:37:43.8583104Z",
//     //       "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "the-american-conservative",
//     //         "name": "The American Conservative"
//     //       },
//     //       "author": null,
//     //       "title": "Politics Archives - The American Conservative",
//     //       "description": null,
//     //       "url": "https://www.theamericanconservative.com/category/politics/",
//     //       "urlToImage": null,
//     //       "publishedAt": "2022-07-07T21:37:27.3936289Z",
//     //       "content": null
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "usa-today",
//     //         "name": "USA Today"
//     //       },
//     //       "author": null,
//     //       "title": "Daily Briefing",
//     //       "description": "The day's top stories, from sports to movies to politics to world events.",
//     //       "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
//     //       "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
//     //       "publishedAt": "2021-08-15T15:35:07+00:00",
//     //       "content": "The day's top stories, from sports to movies to politics to world events."
//     //     },
//     //     {
//     //       "source": {
//     //         "id": "the-jerusalem-post",
//     //         "name": "The Jerusalem Post"
//     //       },
//     //       "author": null,
//     //       "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
//     //       "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
//     //       "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
//     //       "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
//     //       "publishedAt": "2019-11-13T04:41:00Z",
//     //       "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
//     //     }
//     //   ]

//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general'
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string)=>{      /* BY this function we could capitalize the first letter of title which is used below */
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props){
//         super(props);
//         this.state = {
//             // articles:this.articles,    /* I have commented this because I was using this because of above array articles but now i am not using that and i directly fetching the data  */
//             articles:[],
//             loading:false,
//             page:1
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey `;
//     }
//     async updateNews(){
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles,
//             totalResults:parsedData.totalResults,
//             loading:false
//         })

//     }

//     async componentDidMount(){   /* while directly fetcing the data we use this method */
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=1&pagesize=${this.props.pageSize}`;
//         // this.setState({loading:true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // console.log(parsedData);
//         // this.setState({
//         //     articles: parsedData.articles,
//         //     totalResults:parsedData.totalResults,
//         //     loading:false
//         // })

//         this.updateNews();
//     }
//     handleNextClick =  async ()=>{
//         // if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))){

//         //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=${this.state.page+1} &pagesize=${this.props.pageSize}`;
//         //         this.setState({loading:true});
//         //         let data = await fetch(url);
//         //         let parsedData = await data.json()
//         //         this.setState({
//         //             page: this.state.page + 1,
//         //             articles: parsedData.articles,
//         //             loading:false
//         //         })
//         //     }
//         this.setState({page: this.state.page + 1})
//         this.updateNews();
//     }
//     handlePrevClick = async ()=>{
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
//         // this.setState({loading:true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // console.log(parsedData);
//         // this.setState({
//         //     page: this.state.page-1,
//         //     articles: parsedData.articles,
//         //     loading:false
//         // })

//         this.setState({page: this.state.page - 1})
//         this.updateNews();

//     }
//   render() {
//     console.log('render')
//     return (
//       <div className='container my-3'>
//         <h2 className="text-center" style={{margin:'35px 0px'}}>NewMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
//             {this.state.loading && <Spinner/>}
//             <div className="row">

//                 {!this.state.loading && this.state.articles.map((element)=>{
//                     //  let title = element.title;     /* I have declared these 2 variables when I want to slice the characters of title and descprition */
//                     //  let description = element.description;   /* I have used this because we have some null values for description which resulted error's so I have used this technique from stackOverflow */

//                     return <div className="col-md-4" key={element.url}>
//                     <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
//                     author={element.author} date={element.publishedAt} source={element.source.name}/>
//                     </div>
//                 })}

//             </div>
//             <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                     <button disabled = {this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"
//                      className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//       </div>
//     )
//   }
// }
// export default News

// ------------------------------      By using the infinite scroll     ---------------------------------------------------

import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // articles = [
  //     {
  //       "source": {
  //         "id": "wired",
  //         "name": "Wired"
  //       },
  //       "author": "Wired",
  //       "title": "The Uniquely American Future of US Authoritarianism",
  //       "description": "The GOP-fueled far right differs from similar movements around the globe, thanks to the country’s politics, electoral system, and changing demographics.",
  //       "url": "https://www.wired.com/story/us-authoritarian-movement-future",
  //       "urlToImage": "https://media.wired.com/photos/641df5773491f4dd17124cde/191:100/w_1280,c_limit/The-Uniquely-American-Future-of-US-Authoritarianism-Security-GettyImages-1410363302.jpg",
  //       "publishedAt": "2023-03-26T11:00:00Z",
  //       "content": "Assuming democracy remains intact in the years to come, Levitsky thinks the GOP will have to eventually moderate its stance in response to changing demographics. The current extremism will not be sus… [+3547 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "msnbc",
  //         "name": "MSNBC"
  //       },
  //       "author": "Ja&#x27;han Jones",
  //       "title": "Ron DeSantis is the political version of Clark Griswold",
  //       "description": "The Florida governor's coercive style of politics is like Chevy Chase's character's fanatical obsession with getting his family to Walley World in \"Vacation.\"",
  //       "url": "https://www.msnbc.com/the-reidout/reidout-blog/desantis-clark-griswold-vacation-florida-rcna76538",
  //       "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-03/230324-2x1-ron-desantis-clark-griswold-ew-1201p-833492.jpg",
  //       "publishedAt": "2023-03-25T10:00:00Z",
  //       "content": "Virtually every feature written about Florida Gov. Ron DeSantis speaks to a megalomania thats become apparent to folks whove watched the Republican over the years. \r\nYouve undoubtedly heard variation… [+3921 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "newsweek",
  //         "name": "Newsweek"
  //       },
  //       "author": "Mark Davis",
  //       "title": "Newsweek",
  //       "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
  //       "url": "https://www.newsweek.com/",
  //       "urlToImage": "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
  //       "publishedAt": "2023-03-01T12:07:28.8517009Z",
  //       "content": null
  //     },
  //     {
  //       "source": {
  //         "id": "the-washington-times",
  //         "name": "The Washington Times"
  //       },
  //       "author": "The Washington Times https://www.washingtontimes.com",
  //       "title": "Latest Quizzes",
  //       "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
  //       "url": "https://www.washingtontimes.com/quiz/",
  //       "urlToImage": null,
  //       "publishedAt": "2022-08-30T16:37:43.8583104Z",
  //       "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "the-american-conservative",
  //         "name": "The American Conservative"
  //       },
  //       "author": null,
  //       "title": "Politics Archives - The American Conservative",
  //       "description": null,
  //       "url": "https://www.theamericanconservative.com/category/politics/",
  //       "urlToImage": null,
  //       "publishedAt": "2022-07-07T21:37:27.3936289Z",
  //       "content": null
  //     },
  //     {
  //       "source": {
  //         "id": "usa-today",
  //         "name": "USA Today"
  //       },
  //       "author": null,
  //       "title": "Daily Briefing",
  //       "description": "The day's top stories, from sports to movies to politics to world events.",
  //       "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
  //       "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
  //       "publishedAt": "2021-08-15T15:35:07+00:00",
  //       "content": "The day's top stories, from sports to movies to politics to world events."
  //     },
  //     {
  //       "source": {
  //         "id": "the-jerusalem-post",
  //         "name": "The Jerusalem Post"
  //       },
  //       "author": null,
  //       "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
  //       "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
  //       "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
  //       "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
  //       "publishedAt": "2019-11-13T04:41:00Z",
  //       "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
  //     }
  //   ]

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    /* BY this function we could capitalize the first letter of title which is used below */
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      // articles:this.articles,    /* I have commented this because I was using this because of above array articles but now i am not using that and i directly fetching the data  */
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey `;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    /* while directly fetcing the data we use this method */
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     articles: parsedData.articles,
    //     totalResults:parsedData.totalResults,
    //     loading:false
    // })

    this.updateNews();
  }

  fetchMoreData = async() => {
    
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cfe7914f21472598d5606a75014601&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
        });
  };
  
  
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "35px 0px" }}>NewMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}Headlines{" "}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
          loader={<Spinner/>}
        >
            <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              //  let title = element.title;     /* I have declared these 2 variables when I want to slice the characters of title and descprition */
              //  let description = element.description;   /* I have used this because we have some null values for description which resulted error's so I have used this technique from stackOverflow */

              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
    
      </div>
    );
  }
}
export default News;
