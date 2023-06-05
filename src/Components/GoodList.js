import React from "react"
import GoodItem from "./GoodItem";

export default function GoodList (props){
    const {goods = [],addToBasket} = props;

    return(
        <>
        <div className="goods">
            {
                goods.map((item)=>(
                    <GoodItem key={item.id} addToBasket={addToBasket} {...item} />
                ))
            }
        </div>


        </>
    )
}