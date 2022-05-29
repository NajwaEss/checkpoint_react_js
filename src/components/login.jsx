import React , { useState, useEffect } from "react";
function Login() {
    const [username,setUsername]=useState("");
    const [password, setPassword]=useState("");
    const  handleChangeUsername= event => {
        setUsername(event.target.value);
    };
    const handleChangePassword= event => {
        setPassword(event.target.value);
    };
    const handleClick = () =>{
        //console.log(username);
        console.log(username);
    };
   
  return (
    <div style={{position:"absolute",top:"40%",left:"30%",width:"40%"}}>
      <form>
        <div className="input-group">
         
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChangeUsername}
            value={username}
          ></input>
        </div>
        <div className="input-group">
          
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={password}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary butt" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
export default Login;
{
  /* <form>
        <div class="form-group">
          <label>username</label>
          <input class="form-control" type="text"></input>
        </div>
        <div class="form-group">
          <label>password</label>
          <input class="form-control" type="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */
}
