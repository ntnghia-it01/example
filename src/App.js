// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import {StudentInfo, StudentInfoPC} from './components/StudentInfo'
// import StudentInfo from './components/StudentInfo'
// import { useEffect, useState } from 'react';

// function App() {

//   //state
//   //[ten bien, setter]
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("abc");

//   //Start components
//   useEffect(()=>{
//     console.log("start");
//   }, []);

//   //Event lang nghe khi count update
//   useEffect(()=>{
//     console.log("count == ", count);
//   }, [count]);

//   //Event lang nghe khi name update
//   useEffect(()=>{
//     console.log("name == ", name);
//   }, [name]);

//   //Event lang nghe khi count or name update
//   useEffect(()=>{
//     console.log("count == ", count);
//     console.log("name == ", name);
//   }, [count, name]);
  
//   const student = {
//     name: "Nguyen Van A",
//     code: "PC12345",
//     address: "Can Tho"
//   };

//   const students = [
//     {
//       name: "Nguyen Van A",
//       code: "PC12345",
//       address: {
//         adressLine: "ABC"
//       }
//     },
//     {
//       name: "Nguyen Van B",
//       code: "PC12346",
//       address: null
//     },
//     {
//       name: "Nguyen Van C",
//       code: "PC12347",
//       address: "Can Tho"
//     }
//   ];

//   const studentsPC = [
//     {
//       name: "Nguyen Van A",
//       code: "PC12345",
//       address: {
//         adressLine: "ABC"
//       }
//     },
//     {
//       name: "Nguyen Van B",
//       code: "PC12346",
//       address: null
//     },
//     {
//       name: "Nguyen Van C",
//       code: "PC12347",
//       address: "Can Tho"
//     }
//   ];

//   const minus = ()=>{
//     setCount(count - 1);
//   }

//   const plus = ()=>{
//     console.log("------------");
//     console.log("count === ", count);
//     setCount(count + 1);
//   }

//   return (
//     <div className='container p-5'>
//       <div className='row'>
//         <button className='btn btn-danger me-3 w-auto' onClick={minus}>{`-`}</button>
//         <h1 className='w-auto text-primary'>{count}</h1>
//         <button className='btn btn-warning ms-3 w-auto' onClick={plus}>{`+`}</button>
//       </div>

//       <img src={logo} style={{width: '50px', height: '50px'}}/>
//       <img src="/logo192.png" style={{width: '50px', height: '50px'}}/>
//       <img src="/assets/images/logo512.png" style={{width: '50px', height: '50px'}}/>
      
//       <h1>{`Danh sách sinh viên FPL`}</h1>
//       {students.map((value, index)=>{
//         return (
//           <StudentInfo key={index} 
//             name={value?.name}
//             code={value?.code}
//             address={value?.address?.adressLine || value?.address}/>
//         )
//       })}

//       <h1>{`Danh sách sinh viên Phổ Cao`}</h1>
//       {studentsPC.map((value, index)=>{
//         return (
//           <StudentInfo key={index}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;



import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
  Route, //Component
  createBrowserRouter, //Func
  createRoutesFromElements
} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';

const App = () =>{

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<div></div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;