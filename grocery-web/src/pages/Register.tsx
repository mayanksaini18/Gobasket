import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // TEMP: mock register success
    navigate("/home");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create Account</h2>

      <input placeholder="Name" />
      <br />
      <input placeholder="Email" />
      <br />
      <input placeholder="Password" type="password" />
      <br />

      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
};

export default Register;
