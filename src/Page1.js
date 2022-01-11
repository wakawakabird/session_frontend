import React from "react";
import { Link } from "react-router-dom";

class Page1 extends React.Component{

    render(){
        return(
            <div>
                ようこそ!!!
                <br/>
                <Link to={`/page2`}>セットの追加</Link>
                <br/>
                <Link to={`/page3`}>セットを見る</Link>
                <br/>
                <Link to={`/rank`}>いいねランキング</Link>
            </div>
        );
    }
}

export default Page1;