import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductComponent() {
    const [productData, setProductData] = useState([
        {
            pName: "shoes",
            price: 45,
            image: "shop2.PNG"
        },
        {
            pName: "jacket",
            price: 38,
            image: "shop2.PNG"
        },
        {
            pName: "Boots",
            price: 52,
            image: "shop2.PNG"
        },
        {
            pName: "shoes",
            price: 1000,
            image: "shop2.PNG"
        },
        {
            pName: "shoes",
            price: 1000,
            image: "shop2.PNG"
        },
        {
            pName: "shoes",
            price: 1000,
            image: "shop2.PNG"
        }
    ]);

    return (
        <div className='container '>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {productData.map((product, key) => (
                    <div key={key} className=" ">
                        <div className="card shadow-lg bg-white rounded mb-2" style={{ width: "18rem" }}>
                            <div className='d-flex justify-content-center align-items-center m-3 border rounded shadow-sm' style={{ height: "10rem" }}>
                                <img src={require(`../assets/${product.image}`)} className="card-img-top" style={{
                                    width: "8rem", height: "8rem", objectFit: "contain"
                                }} alt={product.pName} />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.pName}</h5>
                                <p className="card-text">Rs {product.price}</p>
                                <div>
                                    <span className='bi bi-star-fill text-warning'></span>
                                    <span className='bi bi-star-fill text-warning'></span>
                                    <span className='bi bi-star-fill text-warning'></span>
                                    <span className='bi bi-star-fill text-warning'></span>
                                    <span className='bi bi-star-fill text-warning'></span>
                                </div>
                                {/* <a href="#" className="btn btn-dark">Add To Cart</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductComponent;





















// import React, { useState } from 'react'

// function ProductComponent() {
//     const [productData, setProductData] = useState([
//         {
//             pNmae: "shoes",
//             price: 45,
//             image: "shop2.PNG"
//         },
//         {
//             pNmae: "jacket",
//             price: 38,
//             image: "shop2.PNG"
//         },
//         {
//             pNmae: "Boots",
//             price: 52,
//             image: "shop2.PNG"
//         },
//         {
//             pNmae: "shoes",
//             price: 1000,
//             image: "shop2.PNG"
//         },
//         {
//             pNmae: "shoes",
//             price: 1000,
//             image: "shop2.PNG"
//         },
//         {
//             pNmae: "shoes",
//             price: 1000,
//             image: "shop2.PNG"
//         }

//     ])
//     return (
//         <div className='d-flex justify-content-between'>
//             {
//                 productData.map((product, key) => {
//                     return (
//                         <div key={key} className=" card  d-flex align-item-center text-center ms-3 shadow-lg  bg-white rounded" style={{ width: "18rem" }}>
//                             <div className='align-item-center m-3   border ronded shadow-sm'>
//                                 <img src={require('../assets/' + product.image)} className="card-img-top " style={{
//                                     width: "10rem", height: "10rem"
//                                 }} alt="..." />
//                             </div>
//                             <div className="card-body">
//                                 <h5 className="card-title">{product.pNmae}</h5>
//                                 <p className="card-text">Rs {product.price}</p>
//                                 {/* <a href="#" className="btn btn-dark">Add To cart</a> */}
//                             </div>
//                         </div>
//                     )
//                 })

//             }

//         </div>

//     )
// }

// export default ProductComponent