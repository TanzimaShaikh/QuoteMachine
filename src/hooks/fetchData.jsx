
// import { useEffect } from "react";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const useFetchData = () => {
//   const [data, setData] = useState({});
//   //const [allQuotes,setAllQuotes]=useState([]);
  
//   const [isLoading, setIsLoading] = useState(true);

//   async function fetchData() {
//     await fetch("https://type.fit/api/quotes")
//       .then((response) => response.json())
//       .then((json) => {
//         let randomNumber = Math.floor(Math.random() * json.length);
//         setData(json[randomNumber])
//       })
//       .catch((error) => {
//         toast.error(`${error}`);
//         setIsLoading(false);
//       });
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);
  
//   return {
//     data,
//     isLoading,
//   };
// };

// export default useFetchData;
