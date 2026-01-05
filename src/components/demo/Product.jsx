export const Product = ({title, price, inStock, categories}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>In Stock: {inStock ? "Yes in Stock" : "Out of Stock"}</p>
            <p>Category: {categories.join(", ")}</p>
            
        </div>
    )
}