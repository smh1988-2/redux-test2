import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { handleLogin, selectUser } from "./userSlice"

function Login() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch;

    function handleLoginSubmit(e) {
        // e.preventDefault();
        dispatch(handleLogin())
    }
    // console.log(handleLogin)
    // console.log(selectUser)

  return (
    <div>
      <h2>Login in to ToDo</h2>
      <form>
          <input type="text" placeholder="username"></input>
          <br />
          <br />
          <input type="text" placeholder="password"></input>
          <br />
          <br />
          <p onClick={() => dispatch(handleLogin())}>Log in</p>
      </form>

      {/* <p>Current user: {selectUser}</p> */}
      <p>Current user password:</p>
    </div>
  );
}

export default Login;
