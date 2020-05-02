import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"PhotoShop",price:"$90.99"},
    {name:"Ilastator",price:'$6.99'},
    {name:'PDF Reader',price:'$55.99'}
  ]
  const students = [
    {n:"Alamin", id:"166611"},
    {n:"Tanvir", id:"166612"},
    {n:"Foysal", id:"166613"},
    {n:"Taohid", id:"166614"},
    {n:"Sani", id:"166615"}
  ]

  
  const nayoks = ["Anwar","Manna","Saimon"];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a react Person</p>
        <Users></Users>
        <Count></Count>
          
        
        
        {/* <Student name="habib" id = "3232"></Student>
        <Student name="rahat" id = "3652"></Student> */}
        <ul>
         {
           nayoks.map(nayok=><li>{nayok}</li>)
         }
         {
           products.map(pd=><Product product ={pd} ></Product>)
         }
         {
           students.map(st=><Student student={st}></Student>)
         }
         
        </ul>
        <Product product = {products[0]}></Product>
        <Person name={nayoks[1]} nayka="Maoshumi"></Person>
        <Person name="Salman Sha"nayka="Shabnur"></Person>
        <Person name="Bappa Raz" nayka="Cheka"></Person>

      </header>
    </div>
  );
}
function Student(props){
  const studentStyle={
    backgroundColor:'green',
    color:'black'
  }
  
  return (
    <div style={studentStyle}>
      <h3>Pass:{props.student.n}</h3>
  <h5>Id:{props.student.id}</h5>
    </div>
  )
}
function Count(){
    
const [count, setCount] = useState(50);
const handleIncrease=()=>{
  const newCount = count + 1;
  setCount(newCount);
};

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Buy Now</button>
      <br/>
      <button onClick={()=> setCount(count-1)} >Decrise</button>
    </div>
  )
    
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      {
        <ul>
          {
            users.map(user=><li>{user.name}</li>)
          }
        </ul>
      }
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:"1px solid gray",
    backgroundColor:"lightgray",
    width:"200px",
    height:"300px"
  }
  const {name,price} = props.product;
  return(
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h1>Price:{price}</h1>
      <button>Bye Now</button>
    </div>
  )
}
function Person(props){
  const personStyle ={
    border:"2px solid red",
    margin: "10px",
    padding: "10px"
  }
  return (
   
    <div style = {personStyle}>
      <h1>Nayok:{props.name}</h1>
      <p>Hero of {props.nayka}</p>
    </div>

  )
}

export default App;
