"use client";

import { useState } from "react";

enum StateOfRegister {
  LOGIN,
  REGISTER,
}

const RegisterForm = () => {
  const [loginOrRegister, setLoginOrRegister] = useState<StateOfRegister>(
    StateOfRegister.LOGIN
  );

  const toggleLoginOrRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (loginOrRegister === StateOfRegister.LOGIN) {
      setLoginOrRegister(StateOfRegister.REGISTER);
    } else {
      setLoginOrRegister(StateOfRegister.LOGIN);
    }
  };

  return (
    <form className="md:w-1/3 w-1/2 bg-gray-50 p-2 flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">
        Please{" "}
        {loginOrRegister === StateOfRegister.LOGIN ? "Login" : "Register"}
      </h2>

      {loginOrRegister === StateOfRegister.REGISTER && (
        <input
          type="text"
          className="w-full py-2 px-4 rounded border border-blue-400"
          placeholder="Email"
        />
      )}

      <input
        type="text"
        className="w-full py-2 px-4 rounded border border-blue-400"
        placeholder="Username"
      />
      <input
        type="text"
        className="w-full py-2 px-4 rounded border border-blue-400"
        placeholder="Password"
      />
      <section className="grid grid-cols-3 items-center gap-4">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-200 hover:bg-blue-400 hover:text-white rounded"
        >
          {loginOrRegister === StateOfRegister.LOGIN ? "Login" : "Register"}
        </button>
        <p className="text-center w-full">or do you want to ...</p>
        <a
          className="text-center underline mx-auto cursor-pointer hover:text-blue-400"
          onClick={toggleLoginOrRegister}
        >
          {loginOrRegister === StateOfRegister.LOGIN ? "Register" : "Login"}
        </a>
      </section>
    </form>
  );
};

export default RegisterForm;
