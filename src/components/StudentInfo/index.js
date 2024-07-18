import React from 'react';

// function sum({a = 5, b = 5}){
//   return a + b;
// }
// state
// props => du lieu duoc gui tu ben ngoai vao
const StudentInfo = ({name = '-', code = '-', address}) => {

  return (
    <div>
      <h1 className='text-warning'>{`Name: ${name}`}</h1>
      <h1 className='text-primary'>{`Code: ${code}`}</h1>
      <h1 className='text-success'>{`Address: ${address || '-'}`}</h1>
    </div>
  )
}

//Xuat hien 1 lan
// export {StudentInfo, StudentInfoPC}
export default StudentInfo;