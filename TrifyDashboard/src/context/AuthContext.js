import { createContext, useState, useEffect } from "react";
import Axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logoutUser = () => {
    console.log("Logging out");
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  const loginUser = async (e) => {
    console.log("attempting log in");
    e.preventDefault();
    try {
      let response = await Axios.post("https://dev-api.trify.us/api/token/", {
        username: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(response.data);
      // if (response.status === 200) {
      setAuthTokens(response.data);
      setUser(jwtDecode(response.data.access));
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      console.log("log in success");
      navigate("/");
    } catch (error) {
      console.log("log in fail");
    }
  };

  let updateToken = async () => {
    console.log("Updating Token");
    console.log(authTokens);
    if (!authTokens) {
      console.log("No auth tokens");
      logoutUser();
      setLoading(false);
      return;
    }

    try {
      let response = await Axios.post(
        "https://dev-api.trify.us/api/token/refresh/",
        {
          refresh: authTokens?.refresh,
        }
      );

      if (response.status === 200) {
        response.data.refresh = authTokens.refresh;
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Error refreshing token:", error);
      console.log("Logging out user");
      logoutUser();
    }
    if (loading) {
      setLoading(false);
    }
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    authTokens: authTokens,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMins = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMins);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
