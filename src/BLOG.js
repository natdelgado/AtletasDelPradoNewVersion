import React from "react";
import "./App.css";
export default function Blog({posts}){
    return(
        <>
            {posts.map((post)=>{
                const {id, img, titulo, resumenPost} =post;
                return(
                    <div className="tarjetaPost" key={id}>
                        <img src={img} alt="" />
                        <h4>{titulo}</h4>
                        <p>{resumenPost}</p>
                    </div>
                )
            })}
        </>
    )
}