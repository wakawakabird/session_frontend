import React from "react";
import { Link } from "react-router-dom";

class Rank extends React.Component{

    render(){
        return(
            <div>
                ランキング
                <br/>
                <Link to={`/`}>戻る</Link>
            </div>
        );
    }
}

export default Rank;