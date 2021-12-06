import React from "react";
import Card from "../Card/Card";

class CardList extends React.Component {
    
    state = {
        data: []
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = () => { 
        fetch(
            "https://gorest.co.in/public/v1/posts")
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                data: json.data
                            })
        })
    }
    
    render() {
        const {data} = this.state;
        return(
          <div className="CardList">
             {
                 data.map(element => {
                    return(
                            <Card cardID={element.id} cardTitle={element.title} cardBody={element.body} />
                    );
                 })
             }
          </div>
      );
    }
  }

export default CardList;
