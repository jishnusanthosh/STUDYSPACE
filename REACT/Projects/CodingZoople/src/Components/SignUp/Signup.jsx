import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
    alert(email);
  }

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email:</label>

        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
