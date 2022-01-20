import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { PageLayout } from "../../components/structure";
import { requestGET, requestPOST } from "../../utils/network-requests";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/users/";
    requestGET({ url }).then((users) => setUsers(users));
  }, []);

  const onSubmit = async (user) => {
    const url = "http://localhost:3000/users/register";
    try {
      const addedUsers = await requestPOST({
        url,
        data: { ...user, id: uuidv4() },
      });
      if (addedUsers) {
        setUsers(addedUsers);
      }
    } catch (e) {
      console.log("Failed adding new user");
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <h2>Enter the following details to signin</h2>
            <div className="flex flex-col spacey-3">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email_address">Email address:</label>
                <input
                  className="border-2"
                  type="text"
                  id="email_address"
                  {...register("emailAddress")}
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

      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </PageLayout>
  );
}
