import Layout from "./Layout";
import { NavLink } from "react-router-dom";

function LoginComp() {
  return (
    <Layout bg="https://img3.wallspic.com/previews/0/5/0/7/17050/17050-daft_punk-deejay-disc_jockey-event-rock_concert-x750.jpg">
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
