import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };

    console.log("Child Constructor");

  }

    componentDidMount(){
        console.log("Child componentDidMount");
    }
  render() {
      console.log("Childer render");
    const { name, location } = this.props;
    return (
      <>
        <div className="user-card">
          <h1>Count : {this.state.count} </h1>
          <h1>Count : {this.state.count2} </h1>
          <button
            onClick={()=>{
                this.setState({

                    count : this.state.count +1,
                    count2 : this.state.count2 +10,

                }
                )
            }}
          >
            Increase Count
          </button>
          <h2> Name : {name} </h2>
          <h3> Location : {location} </h3>
          <h4> Contact : @waheed </h4>
        </div>
      </>
    );
  }
}

export default UserClass;
