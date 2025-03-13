export default function Fruits(){
    const fruits =[{
        name:`apple` , 
        price : 7 , 
        quantity: 20 
    },
    {
        name:`banana` , 
        price : 20 , 
        quantity: 10 
    } , 
    {
        name:`apple` , 
        price : 7 , 
        quantity: 20 
    }] 
    return(
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
            {fruits.map((hardware, index) => (
                <div key={index} style={{
                    textAlign: "center",
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    width: "180px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#fff"
                }}>
                    <h2>{hardware.name}</h2>
                    <p>Price: ${hardware.price}</p>
                </div>
            ))}
        </div>
    )
}