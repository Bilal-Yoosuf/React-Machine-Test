import Axios from "axios";


  const url = "https://jsonplaceholder.typicode.com/todos";
 

  Axios.get(url).then((response) => {
    localStorage.setItem("localToDoList", JSON.stringify(response.data));
  });


  


