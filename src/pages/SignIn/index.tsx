import React, { useState } from "react";
import logo from "../../assets/B2BitLogo.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo b2bit" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border-none rounded-xl w-full py-4 px-3 mb-4 text-gray-700 bg-gray-100  focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*************"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              className="shadow appearance-none border-none rounded-xl w-full py-4 px-3 mb-4 text-gray-700 bg-gray-100  focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-b2bit-blue cursor-pointer text-white text-lg py-3 px-4 mb-4 rounded-xl w-full focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
