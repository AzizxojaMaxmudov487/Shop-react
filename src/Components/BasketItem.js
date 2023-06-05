export default function BasketItem(props) {
    const { id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
    return (
        <>
            <li className="collection-item">
                {name} x{quantity} = {price * quantity}
                <span className="secondary-content">

                    <a
                        className="waves-effect waves-light btn basket_icnr"
                        onClick={() => incrementQuantity(id)}
                    >
                        <i class="material-icons left ">
                            exposure_plus_1
                        </i>
                        Add
                    </a>

                    <a
                        className="waves-effect waves-light btn basket_icnr"
                        // onClick={() => decrementQuantity(id)}
                        onClick={ quantity === 0 ?  ()=> props.removeFromBasket(id): () => decrementQuantity(id)}
                        style={{ margin: '0px 10px' }}

                    >
                        <i class="material-icons left ">exposure_minus_1</i>
                        Remove
                    </a>


                    <a
                        className="waves-effect waves-light btn basket_icnr"
                        onClick={() => props.removeFromBasket(id)}
                    >
                        <i className="material-icons left basket_delete">
                            delete_forever
                        </i>
                        Delete
                    </a>


                </span>
            </li>
        </>
    )
}