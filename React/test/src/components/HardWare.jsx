
const hardware = [
    {
        "id": 1,
        "name": "Gaming Laptop",
        "price": 1500.99,
        "category": "Laptops",
        "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
      },
      {
        "id": 2,
        "name": "Wireless Mouse",
        "price": 49.99,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1587355766958-b99b1b703c1a"
      },
      {
        "id": 3,
        "name": "Mechanical Keyboard",
        "price": 120.50,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
      },
      {
        "id": 4,
        "name": "4K Monitor",
        "price": 450.00,
        "category": "Monitors",
        "image": "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c"
      },
      {
        "id": 5,
        "name": "Gaming GPU",
        "price": 799.99,
        "category": "Graphics Cards",
        "image": "https://images.unsplash.com/photo-1592890288564-76643d8f4e4b"
      },
      {
        "id": 6,
        "name": "External SSD",
        "price": 199.99,
        "category": "Storage",
        "image": "https://images.unsplash.com/photo-1592890866114-9a8a7dff069e"
      },
      {
        "id": 7,
        "name": "Smartwatch",
        "price": 249.99,
        "category": "Wearables",
        "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
      },
      {
        "id": 8,
        "name": "Noise-Cancelling Headphones",
        "price": 299.99,
        "category": "Audio",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      },
      {
        "id": 9,
        "name": "Wireless Router",
        "price": 129.99,
        "category": "Networking",
        "image": "https://images.unsplash.com/photo-1592919505780-498de2376e6c"
      },
      {
        "id": 10,
        "name": "3D Printer",
        "price": 499.99,
        "category": "Printers",
        "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
      },
      {
        "id": 11,
        "name": "Smart Home Hub",
        "price": 99.99,
        "category": "Smart Home",
        "image": "https://images.unsplash.com/photo-1592890288564-76643d8f4e4b"
      },
      {
        "id": 12,
        "name": "Fitness Tracker",
        "price": 79.99,
        "category": "Wearables",
        "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
      },
      {
        "id": 13,
        "name": "VR Headset",
        "price": 399.99,
        "category": "Virtual Reality",
        "image": "https://images.unsplash.com/photo-1592890866114-9a8a7dff069e"
      },
      {
        "id": 14,
        "name": "Gaming Chair",
        "price": 299.99,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
      },
      {
        "id": 15,
        "name": "External Hard Drive",
        "price": 89.99,
        "category": "Storage",
        "image": "https://images.unsplash.com/photo-1592890288564-76643d8f4e4b"
      },
      {
        "id": 16,
        "name": "Bluetooth Speaker",
        "price": 59.99,
        "category": "Audio",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      }
];
function HardWareData(props) {

    
    // console.log("hardWareData Data:", hardware);

    return (
        <div  style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
            {props.hardWare.map((hardware, index) => (
                <div key={index} style={{
                    textAlign: "center",
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    width: "180px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#fff"
                }}>
                    <img src={hardware.image} alt={hardware.name} style={{ width: "100%", height: "120px", borderRadius: "10px" }} />
                    <h2>{hardware.name}</h2>
                    <p>Price: ${hardware.price}</p>
                </div>
            ))}
        </div>
    );
}

export {hardware} ; 
export default HardWareData ; 