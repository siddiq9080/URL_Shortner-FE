import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader } from "./loading";
import { registerverifyemail } from "../api_utils/server_api";

export const Emailverifyregister = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const verifyAccount = async () => {
    try {
      const response = await registerverifyemail(params.get("token"));
      setloading(false);
      alert(response.msg);
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setloading(true);
    verifyAccount();
  }, []);

  if (loading) {
    <Loader />;
  }

  return (
    <>
      <h1>User Login Page</h1>
      <br />
      <div className="d-flex justify-content-center">
        <h2>Email verifed succesfully</h2>
      </div>
      {loading && <Loader />}
    </>
  );
};
