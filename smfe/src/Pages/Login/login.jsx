import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../Components/BackendCalls/backendcalls";
import { useContext } from "react";
import { AuthContext } from "../../Components/Auths/AuthContext";

export default function Login() {
  const email = useRef(); 
  const password= useRef(); 
  const {user, isFetching, error, dispatch}= useContext(AuthContext)
  
  const handleClick =(e) => {
    e.preventDefault(); 
  loginCall({email:email.current.value, password: password.current.value}, dispatch)
  }
console.log(user)
  return (
    <div class="wrapper">
  <form class="login" onSubmit={handleClick}>
    <p class="title">Log in</p>
    <input type="text" required placeholder="email" type="email" ref={email} autofocus />
    <i class="fa fa-user"></i>
    <input type="password" required type="password"   ref={password}placeholder="Password" />
    <i class="fa fa-key"></i>
    <button className= "loginButton" type="submit">
      <i class="spinner"></i>
      <span class="state">Log in</span>
    </button>
  </form>
  <footer><a target="blank" href="http://boudra.me/">WELCOME TO VET NET</a></footer>
  </div>
  );
}
