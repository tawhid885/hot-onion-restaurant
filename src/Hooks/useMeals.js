// import {useEffect, useState} from "react";

// const useMeals=()=>{
//     const [meals, setMeals] = useState([]);

//     const breakfast=()=>{
//         return useEffect(()=>{
//             const url = `./Data/breakfast.json`;
//             fetch(url)
//             .then(res=> res.json())
//             .then(data => setMeals(data))
//         }, []);
//     }
//     const lunch=()=>{
//         return useEffect(()=>{
//             const url = `./Data/lunch.json`;
//             fetch(url)
//             .then(res=> res.json())
//             .then(data => setMeals(data))
//         }, []);
//     }
//     const dinner=()=>{
//         return useEffect(()=>{
//             const url = `./Data/dinner.json`;
//             fetch(url)
//             .then(res=> res.json())
//             .then(data => setMeals(data))
//         }, []);
//     }

//     return {
//         meals, 
//         setMeals, 
//         breakfast,
//         lunch, 
//         dinner
//     }
// }

// export default useMeals;