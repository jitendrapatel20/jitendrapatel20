import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Catnav.css';

function CatNav() {
    return (
        <div className='container-fluid text-white bg-dark border-top border-dark w-100'>
            <ul className='d-flex flex-column flex-md-row justify-content-start p-3 list-unstyled m-0'>
                <li className='list-item mb-2 mb-md-0 me-5'>Men</li>
                <li className='list-item mb-2 mb-md-0 me-5'>Women</li>
                <li className='list-item mb-2 mb-md-0 me-5'>Kids</li>
                <li className='list-item mb-2 mb-md-0 '>Best Offer</li>
            </ul>
        </div>
    );
}

export default CatNav;





// import React from 'react'

// function CatNav() {
//     return (
//         <>
//             <div className='container-fluid text-white bg-dark  border-top border-dark w-100 '>
//                 <ul className='d-flex justify-content-around p-3 list-unstyled'>
//                     <li >Men</li>
//                     <li >Women</li>
//                     <li >Kids</li>
//                     <li >Best Offer</li>
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default CatNav