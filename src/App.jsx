import axios from "axios";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Context, server } from "./main";
import { useContext, useEffect } from "react";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
