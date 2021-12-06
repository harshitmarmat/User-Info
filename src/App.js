import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
// import DisplayContainer from './Components/DisplayContainer';
// import UserForm from './Components/Form/UserForm';
// import Error from './Components/Error/Error'
function App() {

//   const [isListEmpty,setIsListEmpty] = useState('false');
//   const [userList,setUserList] = useState([{
//     name : '',
//     age : '',
//     id :''
//   }]);

//   const addInformation = (userInfo)=>{
//     console.log(userList.length);
//     console.log(userInfo);
//     setIsListEmpty('true');
//     setUserList((prev)=>{
//       return ([
//         userInfo,
//         ...prev
//       ])

//     })
//   }
//   console.log(isListEmpty);

//   return (
//     <div >
//       <UserForm
//         information={addInformation}
//       />

//       <DisplayContainer
//         userList ={userList}
//         emptyList = {isListEmpty}
//       />
//       {/* <Error /> */}
//     </div>
//   );
  return(
    <div>
      <AddUser/>
    </div>
  )
}

export default App;