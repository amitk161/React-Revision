import { React, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if(!formData.name.trim()){
        newErrors.name = "Name is required!";
        isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(!formData.email.trim() || !emailRegex.test(formData.email)) {
        newErrors.email = "Email is not valid!";
        isValid = false;
    }

    if(formData.password.length < 6) {
        newErrors.password = "Password should be atleast of length 6"
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    } else {
      console.log("Failed to Submit");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
        <input
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
