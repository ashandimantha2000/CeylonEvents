import Layout from "./Layout";
import { NavLink } from "react-router-dom";

function LoginComp() {
  return (
    <Layout>
      <form>
        <h1>Login</h1>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
        <br />
        <NavLink to="/signup">
          <p>Don't have an account? Sign Up</p>
        </NavLink>
      </form>
    </Layout>
  );
}

export default LoginComp;
