import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const GoogleAuth = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const img = searchParams.get("img");

  useEffect(() => {
    alert("Login Successful");
    window.location.href = "/";
  });
  console.log(token, img);
  localStorage.setItem("creds", JSON.stringify({ token, img }));
  return <div></div>;
};

export default GoogleAuth;
