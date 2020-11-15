import { Route, Link, Switch } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { PrivateRoute } from "./PrivateRoute";

const Home = () => <h1>Home</h1>;
const PrivatePage = () => {
  const { logOut } = useAuth();
  return <button onClick={logOut}>Log out</button>;
};
const Login = () => {
  const { logIn } = useAuth();
  return <button onClick={logIn}>Log in</button>;
};

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private-page">Private page</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute
          path="/private-page"
          redirectPath="/login"
        >
          <PrivatePage />
        </PrivateRoute>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
