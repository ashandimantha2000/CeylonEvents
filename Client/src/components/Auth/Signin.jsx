import "./Auth.scss";

function Signin() {
  return (
    <div className="main">
      <div className="details">
        <h2>Sign In</h2>
        <h4>Enter your email and password to sign in</h4>
        <form className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          ></input>
        </form>
      </div>
      <div>
        <img src="../src/assets/images/auth-back.svg" alt="auth-back" />
      </div>
    </div>
  );
}

export default Signin;
