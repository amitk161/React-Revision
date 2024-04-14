import { React, useState, useEffect } from "react";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
];

function Checkbox() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  function handleChange(e) {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  }

  return (
    <div>
      <form>
        <h3>Select User</h3>
        <div>
          <input
            type="checkbox"
            name="allSelect"
            onChange={handleChange}
            checked={users.filter((u) => u.isChecked !== true).length < 1} //checked is fullfilled when this condition is true otherwise its false.
          />
          <label>All Select</label>
        </div>

        {users.map((user) => {
          return (
            <div key={user.name}>
              <input
                type="checkbox"
                name={user.name}
                onChange={handleChange}
                checked={user.isChecked || false} //checked property is same as value property of text input. it is governed by state.(controlled component)
              />
              <label>{user.name}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Checkbox;
