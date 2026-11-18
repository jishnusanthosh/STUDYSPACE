 export default async function product({params}) {

    const { id } = params;

    return (
        <div>
            <h1>products</h1>
            <h2>product {id}</h2>
        </div>
    )

        
    
 }