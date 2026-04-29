import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class AboutClass extends React.Component {
 constructor(props) {
    super(props);
    

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log(" Parent CompoentDid Moount")
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>Hello This About Us Page</h1>
        <UserClass name={"Waheed Class"} location={"Pune"} />
        {/* <User name={"Waheed Functon"} location={"Mumbai"} /> */}
      </div>
    );
  }
}

// const About = () => {};

export default AboutClass;
