import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

function SideNav() {
    return (
        <div className='container-fluid p-0'>
            <div className='text-center shadow-lg p-3 mb-5 bg-white rounded' style={{ minHeight: '800px' }}>
                <h6>Category</h6>
                <div className="accordion mt-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Mens
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li className='list-item mb-1'><a href='#' className='text-decoration-none text-black'>Shirts</a></li>
                                    <li className='list-item mb-1'><a href='#' className='text-decoration-none text-black'>Casuals</a></li>
                                    <li className='list-item mb-1'><a href='#' className='text-decoration-none text-black'>Boots</a></li>
                                    <li className='list-item'><a href='#' className='text-decoration-none text-black'>T-Shirts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;




// import React from 'react';
// import '../components/Sidenav.css';

// function SideNav() {
//     return (
//         <div className='container ms-0'   >
//             <div className=' text-center shadow-lg p-3 mb-5 bg-white rounded ' style={{ height: '800px' }} >
//                 <h6>Category</h6>
//                 <div className="accordion mt-3" id="accordionExample">
//                     <div className="accordion-item">
//                         <h2 className="accordion-header" id="headingOne">
//                             <button
//                                 className="accordion-button"
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target="#collapseOne"
//                                 aria-expanded="true"
//                                 aria-controls="collapseOne"
//                             >
//                                 Mens
//                             </button>
//                         </h2>
//                         <div
//                             id="collapseOne"
//                             className="accordion-collapse collapse show"
//                             aria-labelledby="headingOne"
//                             data-bs-parent="#accordionExample"
//                         >
//                             <div className="accordion-body">
//                                 <ul className="list-unstyled">
//                                     <li className='list-item mb-1'><a href='#' className=' text-decoration-none text-black'>Shirts</a></li>
//                                     <li className='list-item mb-1'><a href='#' className=' text-decoration-none text-black'>Casuals</a></li>
//                                     <li className='list-item mb-1'><a href='#' className=' text-decoration-none text-black'>Boots</a></li>
//                                     <li className='list-item'><a href='#' className=' text-decoration-none text-black'>T-Shirts</a></li>

//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SideNav;
















// import React from 'react'

// function SideNav() {
//     return (
//         <>
//             <div className='text-center shadow-lg p-3 mb-5 bg-white rounded' style={{ height: 500 }}>
//                 <h6>Category</h6>
//                 <div className="accordion" id="accordionExample">
//                     <div className="accordion-item">
//                         <h2 className="accordion-header " id="headingOne">
//                             <button
//                                 className="accordion-button "
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target="#collapseOne"
//                                 aria-expanded="true"
//                                 aria-controls="collapseOne"
//                             >
//                                 <a href='#' >Mens</a>
//                             </button>
//                         </h2>
//                         <div
//                             id="collapseOne"
//                             className="accordion-collapse collapse show"
//                             aria-labelledby="headingOne"
//                             data-bs-parent="#accordionExample"
//                         >
//                             <div className="accordion-body">
//                                 <ulc className="list-unstyled" >
//                                     <a href='#' className='text-decoration-none text-black'><li>1</li></a>
//                                     <a href='#' className='text-decoration-none text-black'><li>1</li></a>
//                                     <a href='#' className='text-decoration-none text-black'><li>1</li></a>

//                                 </ulc>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default SideNav