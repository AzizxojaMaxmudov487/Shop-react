export default function GoodItem(props) {
    const { id, name, description, price, full_background,addToBasket } = props;
    return (
        <>
            <div className="card" id={id}>
                <div className="card-image">
                    <img src={full_background} />
                    <span className="card-title">
                        {name}
                    </span>
                </div>
                <div className="card-content">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="card-action">
                    <div className="card-action">
                        <button
                            className="btn"
                            onClick={()=> addToBasket({id,name,price})}
                        >Buy</button>
                        <span className="right">{price} $</span>
                    </div>
                </div>
            </div>

        </>
    )
}