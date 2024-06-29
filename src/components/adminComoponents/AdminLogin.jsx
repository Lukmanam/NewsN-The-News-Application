import React from "react";

const AdminLogin = () => {
  return (
    <>
      <div className="w-full  text-slate-900 p-10 flex justify-center items-center bg-gray-100 overflow-hidden">
        <h1 className="text-center text-5xl font-bold font-sans flex items-center mt-6">
          News
          <span className="ml-2 text-red-700 italic font-sans">N </span>
        </h1>
      </div>

      <div className="w-screen flex h-full justify-center bg-gray-100 pb-8">
        <div className="md:w-1/4 sm:w-5/6 h-4/5 rounded-md   bg-white shadow-xl">
          <h1 className="text-5xl text-center p-10 mt-5">Admin Login</h1>

          <div className="form flex flex-col items-center">
            <div className="mt-5">
              <label htmlFor="adminId" className="pl-10 text-md font-bold ">
                Admin ID :
              </label>
              <input
                type="text"
                className="m-2 h-10 w-1/2 rounded-xl outline text-2xl text-center outline-1 focus:outline-2 focus:shadow-xl outline-offset-2"
                name="adminID"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="pl-10 text-md font-bold ">
                Password :
              </label>
              <input
                type="password"
                className="m-2 h-10 w-1/2 rounded-xl outline outline-slate-600 outline-1 focus:outline-2 focus:shadow-xl  text-2xl text-center"
                name="adminID"
              />
            </div>
            <div className="btn w-1/2 items-center m-20 bg-red-900/80 text-white hover:bg-red-900/100">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
