import React from "react";
import { Link } from "react-router-dom";

class Page3 extends React.Component{

    render(){
        return(
            <div>
                HelloPage3!!!
                <br/>
                <Link to={`/`}>Go To page1</Link>
            </div>
        );
    }
}

export default Page3;