import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const formRef = useRef(null);

  //So, formRef is a reference object that allows you to interact with the form DOM element directly within your React component, which you're using to reset the form after submission.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(passRef.current.value);

      // Reset the form to clear all fields
    formRef.current.reset();
   
    // Re-focus on the name input for user convenience
    nameRef.current.focus();
    notifyError();
  };
   const notifyError = () => {
      toast.error("Invalid Username or Password! ", {
        autoClose: 1200,
        pauseOnHover: false,
        closeOnClick: true,
        // draggable: false,
      });
    };

  useEffect(() => {
    if (nameRef.current) {
        nameRef.current.focus(); //By default the cursor will be in the name
      }
  }, []);

  return (
    <div className="text-center ">
      <h2 className="text-5xl font-bold text-indigo-900">
        <span className=" text-pink-50">Join us</span> to enhance your
        experience
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto w-50"
        action=""
      >
        <h2 className="text-3xl font-bold text-white mb-4 mt-16">Sign In</h2>
        <input
        ref={nameRef}
          name="name"
          type="text"
          className="bg-blue-100  px-2 rounded-md text-black"
        />
        <br />
        <input
        ref={passRef}
          name="password"
          type="password"
          className="bg-blue-100 px-2 rounded-md text-black"
        />
        <br />
        <input
          name="submit"
          type="submit"
          className="hover:bg-pink-950 font-bold text-xl border-2 p-2 px-3  items-center bg-purple-800 rounded-xl text-purple-50"
        />
        <br />
      </form>
    </div>
  );
};

export default Login;
