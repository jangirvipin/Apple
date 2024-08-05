import React from "react";
const a="https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png";


export default function Ipad2n2(){
    return(
        <div className="ipad2n1">
            <img src={a}></img>
            <p>New</p>
            <h5>iPad Air</h5>
            <h3>Serious performance in a thin and</h3>
            <h4>light design.</h4>
            <h2>From $800</h2>
            <button> Learn more</button>
            <a href="/BuyIpadAir">Buy</a>
        </div>
    )
}