import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you have Bootstrap CSS imported
import TopNav from './components/TopNav';
import CatNav from './components/CatNav';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;






// import './App.css';

// function App() {
//   return (


//     // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     //   <div className="container-fluid d-flex">
//     //     <a className="navbar-brand" href="#">
//     //       eStore  
//     //     </a>

//     //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     //       {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//     //         <li className="nav-item">
//     //           <a className="nav-link active" aria-current="page" href="#">
//     //             Home
//     //           </a>
//     //         </li>
//     //         <li className="nav-item">
//     //           <a className="nav-link" href="#">
//     //             Link
//     //           </a>
//     //         </li>
//     //         <li className="nav-item dropdown">
//     //           <a
//     //             className="nav-link dropdown-toggle"
//     //             href="#"
//     //             id="navbarDropdown"
//     //             role="button"
//     //             data-bs-toggle="dropdown"
//     //             aria-expanded="false"
//     //           >
//     //             Dropdown
//     //           </a>
//     //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//     //             <li>
//     //               <a className="dropdown-item" href="#">
//     //                 Action
//     //               </a>
//     //             </li>
//     //             <li>
//     //               <a className="dropdown-item" href="#">
//     //                 Another action
//     //               </a>
//     //             </li>
//     //             <li>
//     //               <hr className="dropdown-divider" />
//     //             </li>
//     //             <li>
//     //               <a className="dropdown-item" href="#">
//     //                 Something else here
//     //               </a>
//     //             </li>
//     //           </ul>
//     //         </li>
//     //         <li className="nav-item">
//     //           <a
//     //             className="nav-link disabled"
//     //             href="#"
//     //             tabIndex={-1}
//     //             aria-disabled="true"
//     //           >
//     //             Disabled
//     //           </a>
//     //         </li>
//     //       </ul> */}
//     //       <form className="d-flex">
//     //         <input
//     //           className="form-input "
//     //           type="search"
//     //           placeholder="Search"
//     //           aria-label="Search"
//     //         />
//     //         <button className="btn btn-warning" type="button">
//     //           <span className='bi bi-search'></span>
//     //         </button>
//     //       </form>
//     //     </div>
//     //   </div>
//     // </nav>


//     <div className="App">
//       <div className='bg-dark w-100 '>
//         <div className='row p-2 d-flex'>
//           <div className='col-3'>
//             <h1 className='text-white ms-2'>eStore</h1>
//           </div>
//           <div className='col-6 d-inline-block '>
//             <select className='form-select w-25 me-2 bg-warning '>
//               <option selected>Category</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//             <div className='input-group mt-2'>
//               <input type='text' className='form-control w-25' placeholder='Search'></input>
//               <button type='button' className='btn btn-warning ' ><span className='bi bi-search'></span></button>
//             </div>
//           </div>
//           <div className='3'>


//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;
