import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PriveteRoute({ children }) {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token === "undefined") {
      return navigate("/signin");
    }
  }, [token, navigate]);

  return children;
}
