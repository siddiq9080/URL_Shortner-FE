import { useEffect, useState } from "react";
import { urlhistory } from "../api_utils/server_api";
import { Link } from "react-router-dom";

export const Urlhistroy = () => {
  const [urldata, seturldata] = useState([]);

  const fetchingurl = async () => {
    const data = await urlhistory();
    const urldata = Object.values(data.data);
    seturldata(urldata);
  };

  useEffect(() => {
    fetchingurl();
  }, []);

  return (
    <>
      {console.log(urldata)}

      <h1 className="text-center mb-5  ">URLSHORTNER HISTORY</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/urlshortner" className="text-info " style={{ margin: 10 }}>
          URL SHORTNER
        </Link>
        <Link to="/dashboard" className="text-info " style={{ margin: 10 }}>
          Dashboard
        </Link>
      </div>

      <div>
        {urldata.map((data, index) => (
          <div key={index}>
            <div className=" text-dark p-3 rounded">
              <div className="card ">
                <div className="container">
                  <div className="row row-cols-sm-2 text-center align-items-center ">
                    <div className="col-md-1 m-1  align-items-stretch">
                      {index + 1}
                    </div>
                    <div className="col-md-1 m-1 p-0  align-items-stretch">
                      {data.date}
                    </div>
                    <div className="col-md-5 m-0 align-items-stretch">
                      {data.longurl}
                    </div>
                    <div className="col-md-4 m-0 align-items-stretch">
                      {data.shorturl}
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
