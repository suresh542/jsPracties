import React from 'react'



var std1={
  sname : "sk",
  age : 22,
  id : "AC17UEC170"
}
export default function Sample1() {
  function select11(){
   document.write(
    "Student name : "+std1.sname,
    std1.find()
    
   );
  }
  function select12(){
    document.write(
      "<br>student age : "+std1.age
    )
  }
  function select13(){
    document.write(
      "<br> student ID : "+std1.id

    )
  }
  return (
    <div>
        <button onClick={select11}>select 1</button>
        <button onClick={select12}>select 2</button>
        <button onClick={select13}> select 3</button>


    </div>
  )
}
