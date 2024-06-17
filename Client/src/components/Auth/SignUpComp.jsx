import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import Layout from "./Layout";

function SignUpComp() {
  return (
    <Layout>
      <form>
        <h1>Sign Up</h1>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <br />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="retypr-password" name="retype-password" />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <NavLink to="/login"><p>Already have an account? Login</p></NavLink>
      </form>
    </Layout>
  )
}

export default SignUpComp