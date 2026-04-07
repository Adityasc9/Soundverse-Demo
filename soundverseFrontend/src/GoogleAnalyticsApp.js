import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './cssFiles/GoogleAnalyticsApp.css';

const GoogleAnalyticsApp = () => {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    responseType: "token",
    scope:
      ["openid", "email", "profile"].join(" "),
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse?.access_token;
      if (accessToken) {
        navigate("/result", { state: { accessToken } });
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });



  return (
    <div className="App">
      <h1>Google Analytics Report</h1>
      <Button className="button-1" onClick={googleLogin}>
        Check Analytics
      </Button>
      <br />
      <br />
      <Button
        className="button-1"
        onClick={() => navigate("/result", { state: { accessToken: "demo-access-token" } })}
      >
        Skip Login
      </Button>
    </div>
  );
};

export default GoogleAnalyticsApp;
