import { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isRegistering) {
      // TODO
    } else {
      // TODO
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
        
        <label htmlFor="pass">Password</label>
        <input id="pass" name="pass" type="password"
               className="mb-5 rounded-sm 
                        border-[#a7a7a7] border-solid border-2" />
        
        <input type="submit" value={isRegistering ? "Register" : "Login"}
               className="bg-[#707070] rounded-md p-2 text-white font-bold" />
      </form>

      <p onClick={() => setIsRegistering(!isRegistering)}
         className="text-sm text-center cursor-pointer underline text-[#787878]">
        {isRegistering ? "Already have an account? Sign in here!"
                      : "Don't have an account? Sign up here!"}
      </p>
    </main>
  );
}

export default Login;
