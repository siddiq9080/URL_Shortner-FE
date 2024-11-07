import { useSearchParams } from "react-router-dom";
import { short } from "../api_utils/server_api";
import { useEffect, useState } from "react";
import { Loader } from "./loading";

export const Short = () => {
  const [params] = useSearchParams();
  const [loading, setloading] = useState(false);

  const redirectpage = async () => {
    try {
      const response = await short(params.get("url"));
      location.replace(response.data[0]);
      setloading(false);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setloading(true);
    redirectpage();
  }, []);

  return <>{loading && <Loader />}</>;
};
