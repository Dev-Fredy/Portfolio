import React from "react";

function Login() {
  let [form, setForm] = useState({
    username,
    password,
  });

  let handleChange = async (e) => {
    let { checked, value, name, type } = e.target;

    setForm((prevState) => ({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row py-3">
        <label htmlFor="username" className="w-fit px-3">
          Username
        </label>
        <input
          type="username"
          value={form.username}
          onChange={handleChange}
          id="username"
        />
      </div>
    </form>
  );
}

export default Login;
