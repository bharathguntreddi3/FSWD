import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hello from './basics/Hello';
// import Greet from './basics/Greet';
// import GreetCC from './basics/GreetCC';
// import Course from './props/Course';
// import CourseList from './props/CourseList';
// import CourseList2 from './props/CourseList2';
// import Customer from './props/Customer';
// import ProductsList from './props/ProductsList';
// import CourseCC from './props/CourseCC';
// import Counter from './state/Counter';
// import Passengers from './state/Passengers';
// import PassengersList from './state/PassengersList';
// import CounterCC from './state/CounterCC';
// import Cart from './state/Cart';
// import GitUserInfo from './ajax/GetUserInfo';
import Main from './routing/Main';


// let courses = [
//   { title: "Power BI", fee: 10000 },
//   { title: "Python", fee: 7500 },
//   { title: "Data Science", fee: 20000 }
// ]

// let products = [
//   { id: 101, name: "Laptop", price: 45000 },
//   { id: 102, name: "Mobile", price: 25000 },
//   { id: 103, name: "Tablet", price: 15000 }
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Course title="Power BI" fee = "10000"/> */}
    {/* <CourseList courses={courses}/> */}
    {/* <CourseList courses={courses} trainer="Bharath"/> */}
    {/* <Customer name="larry page" email="larry@google.com" age={40}/> */}
    {/* <ProductsList products = {products}/> */}
    {/* <CourseCC title="power BI" fee={100}/> */}
    {/* <Counter/> */}
    {/* <PassengersList/> */}
    {/* <CounterCC /> */}
    {/* <Cart /> */}
    {/* <GitUserInfo /> */}
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

