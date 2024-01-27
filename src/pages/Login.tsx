import { useState } from "react";
import { login, register } from "../api/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onRegister = (e: React.FormEvent) => {
    const target = e.target as typeof e.target & {
      username: { value?: string },
      email: { value?: string },
      password: { value?: string },
    }; 

    if (target.username.value && target.email.value && target.password.value && 
        register(target.username.value, target.email.value, target.password.value)) {
      navigate("/");
    } else {
      setHasError(true);
    }
  };

  const onLogin = (e: React.FormEvent) => {
    const target = e.target as typeof e.target & {
      email: { value?: string },
      password: { value?: string },
    };

    if (target.email.value && target.password.value && 
        login(target.email.value, target.password.value)) {
      navigate("/");
    } else {
      setHasError(true);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      onRegister(e);
    } else {
      onLogin(e);
    }
  };

  return (
    <main className="absolute top-[50%] left-[50%]
                     -translate-x-[50%] -translate-y-[50%]
                     w-max h-max p-16 bg-[#d9d9d9]">
      <h1 className="text-center text-2xl font-bold">
        {isRegistering ? "Create new account" : "Login to your account"}
      </h1>

      <form className="flex flex-col my-10" onSubmit={onSubmit}>
        {isRegistering && (
          <>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text"
                   className="mb-5 rounded-sm 
                             border-[#a7a7a7] border-solid border-2" />
          </>
        )}
        
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"
               className="mb-5 rounded-sm 
                        border-[#a7a7a7] border-solid border-2" />
        
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"
               className="mb-5 rounded-sm 
                        border-[#a7a7a7] border-solid border-2" />
        
        <input type="submit" value={isRegistering ? "Register" : "Login"}
               className="bg-[#707070] rounded-md p-2 text-white font-bold" />
        {hasError && (
          <span className="text-sm max-w-56 mx-auto text-red-600 font-bold">
            {isRegistering ? "A user with those credentials may already exist"
                           : "A user with those credentials does not exist"}
          </span>
        )}
      </form>

      <p onClick={() => {
        setIsRegistering(!isRegistering)
        setHasError(false);
      }}
         className="text-sm text-center cursor-pointer underline text-[#787878]">
        {isRegistering ? "Already have an account? Sign in here!"
                      : "Don't have an account? Sign up here!"}
      </p>
    </main>
  );
}

export default Login;
