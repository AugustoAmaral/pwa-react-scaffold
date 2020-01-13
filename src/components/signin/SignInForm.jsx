import React, { useState } from "react";

const SignInForm = () => {
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });

  const handleChange = (fieldName, fieldValue) => {
    setLoginDetails({ ...loginDetails, [fieldName]: fieldValue });
  };

  return <div></div>;
};

export default SignInForm;
