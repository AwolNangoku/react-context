import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/structure";
import useAuth from "../../hooks/use-auth";

export default function Login() {
  const { signin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (logins) =>
    signin(logins, () =>
      navigate(location.state?.from?.pathname || "/shop", {
        replace: true,
      })
    );

  return (
    <PageLayout>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <h2>Enter the following details to signin</h2>
            <div className="flex flex-col spacey-3">
              <div className="flex flex-col space-y-2">
                <label htmlFor="username">Username:</label>
                <input
                  className="border-2"
                  type="text"
                  id="username"
                  {...register("username")}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="password">Password</label>
                <input
                  className="border-2"
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
            </div>
            <div>
              <button className="border-2 p-2 rounded bg-blue-400">
                Signin
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
