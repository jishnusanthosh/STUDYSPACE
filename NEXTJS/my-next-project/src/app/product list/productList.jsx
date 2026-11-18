export default async function productList(params) {
    
    const response= await fetch('https://fakestoreapi.com/products');
    const data= await response.json();

    return (
        <div>
            <h1>products</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`}>{product.title}</a>
                    </li>   

                ))}
            </ul>
        </div>
    )

}