import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UnprotectedRoutes = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      navigate("/user/data-manager");
    }
  }, [user, navigate]);
  return <Outlet />;
};

export default UnprotectedRoutes;
