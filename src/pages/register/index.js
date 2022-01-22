import React from "react";
import { useForm } from "react-hook-form";
import { PageLayout } from "../../components/structure";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("---Registration details---", data);
  };

  return (
    <PageLayout>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <h2>Enter the following details to have account with us</h2>
            <div className="flex flex-col spacey-3">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstname">First name:</label>
                <input
                  className="border-2"
                  type="text"
                  id="firstname"
                  {...register("firstname")}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="lastname">Last name:</label>
                <input
                  className="border-2"
                  type="text"
                  id="lastname"
                  {...register("lastname")}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="mobile_number">Mobile number:</label>
                <input
                  className="border-2"
                  type="text"
                  id="mobile_number"
                  {...register("mobile_number")}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email_address">Email address:</label>
                <input
                  className="border-2"
                  type="text"
                  id="email_address"
                  {...register("email_address")}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="password">Password:</label>
                <input
                  className="border-2"
                  type="text"
                  id="password"
                  {...register("password")}
                />
              </div>
            </div>
            <div>
              <button className="border-2 p-2 rounded bg-blue-400">
                Create account
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
