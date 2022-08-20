import { auth } from "./firebase";
import { useEffect } from "react";
import "./App.css";
import { useStateValue } from "./Context/StateProvider";
import Header from "./Header";
import AllRoutes from "./Routes/AllRoutes";
// import {loadStripe} from '@stripe/react-stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

// export const promise = loadStripe(
//   "pk_test_51LYQjYSFdb74njlsbpgODC96KitDU4kK3PEPqszumfk1o2mJa7n4QqSQWxb7TtKqQ5eFEkzB69ngDY9MECri36XD00j7qgqxf4"
// );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run when components loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);
      if(authUser) {
    //     //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
    //     //the user just logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])
  return (
    <div className="App">
      
      <AllRoutes/>
      
    </div>
  );
}

export default App;
