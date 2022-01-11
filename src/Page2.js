import React from "react";
import { Link } from "react-router-dom";

class Page2 extends React.Component{

    render(){
        return(
            <div>
                セットを追加しよう!!
                <br/>
                ニックネーム:
                <input type="text" name="name"/>
                <br/>
                一曲目:
                <input type="text" name="tune1"/>
                <br/>
                二曲目:
                <input type="text" name="tune2"/>
                <br/>
                三曲目:
                <input type="text" name="tune3"/>
                <br/>
                <Link to={`/`}>ホームに戻る</Link>
            </div>
        );
    }
}

export default Page2;