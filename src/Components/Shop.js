import React, { useState, useEffect } from "react"
import { API_URL, API_KEY } from "../config"
import GoodList from "./GoodList"
import { toast } from "react-toastify";
import Loading from "./Loading";
import Cart from "./Cart";
import BasketList from "./BasketList";
export default function Shop() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }

            setOrder([...order, newItem])
        }
        else {
            const newOrder = order.map((orderItem, index) => {


                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }
                else {
                    return item
                }
            })
            setOrder(newOrder)
        }

        toast.success('Shops added to Basket succesfully!')
    }
    const removeFromBasket = (itemID) => {
        const newOrder = order.filter(item => item.id !== itemID)
        setOrder(newOrder)

        toast.error('Shops deleted from Basket succesfully!')
    }
    const incrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            }
            else {
                return el
            }

        })
        setOrder(newOrder)
    }
    const decrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            }
            else {
                return el
            }

        })
        setOrder(newOrder)
    }
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
        // console.log(isBasketShow)
    }
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })

            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);

            })

        // console.log(goods)
    })

    return (
        <>
            <div className="shop">
                <div className="container">
                    <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
                    {loading ? <GoodList goods={goods} addToBasket={addToBasket} /> : <Loading />}
                    {isBasketShow && <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    />}

                </div>

            </div>
        </>
    )
}