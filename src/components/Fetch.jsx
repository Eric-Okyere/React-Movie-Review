import React, { Component } from 'react'

 class UserClass extends Component {
    constructor(props){
        super();
        this.state={eric: []}
    }

componentDidMount(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=VI69eEb0HOidBHUf3aDJkjp230oWaNHz")
    .then((res)=>{
        res.json().then((users)=>{
            console.log(users.results)
        this.setState({ eric:users.results});
        
    });
})
    .catch((err)=>{
        console.log(err);
    })


}

  render() {
    return (
        <>
        {this.state.eric.map((item, index)=>{
            return(
                <div key={index}>
                <img src={item.multimedia?.src} alt='piture'/>
                <h1>Byline: {item.byline}</h1>
                <h1>Critics: {item.critics_pick}</h1>
                <h1>Titile: {item.display_title}</h1>
                <h1>Headline: {item.headline}</h1>
              
                <hr />
                </div>
            );
        })}
      
      </>
    );
  }
}
export default UserClass;