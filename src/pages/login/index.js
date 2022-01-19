import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PageLayout } from "../../components/structure";

export default function Login() {
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  const postUser = async (user) => {
    let addedUsers = [];
    try {
      addedUsers = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user, id: uuidv4() }),
        "Content-Type": "application/json",
      }).then((users) => users.json());
      if (addedUsers) {
        setUsers(addedUsers);
      }
    } catch (e) {
      console.log("Failed adding new user");
    } finally {
      console.log("User has been added...");
    }
  };

  return (
    <PageLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postUser({ name, lastName });
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <div>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="lastname">Last name:</label>
          <div>
            <input
              type="text"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <button>Add user</button>
      </form>

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
