import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Navigate, Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import style from "./../styles/auth.module.css";
import * as types from "./../redux/authReducer/actionTypes";
import GoogleButton from "../components/GoogleButton";
import { loginHandler } from "../redux/authReducer/actions";
const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #5ea551;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 600;
`;
export default function Signin() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [inp, setInp] = useState();
  const isAuth = useSelector((state) => state.authReducer?.isAuth);

  const handleInp = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...inp,
      [name]: value,
    };
    setInp(payload);
  };

  const submitSignIn = (e) => {
    e.preventDefault();
    if (!inp.email || !inp.pswd) {
      toast({
        title: `invalid cred`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!inp.email.includes("@")) {
      toast({
        title: `email is not valid`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (inp.pswd.length < 5) {
      toast({
        title: `password length is too small`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    console.log(inp);
    dispatch(loginHandler(inp)).then((r) => {
      if (r.type === types.LOGIN_SUCCESS) {
        toast({
          title: `Login Success`,
          status: "success",
          isClosable: true,
        });
      } else {
        toast({
          title: `Try Again`,
          status: "error",
          isClosable: true,
        });
      }
    });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={style.singinForm}>
      <div className={style.signin_card}>
        <table>
          <tbody>
            <tr>
              <td className={style.heading}>
                <h4>Sign in to a Harvest or Forecast account</h4>
              </td>
            </tr>
            <a href="http://localhost:8080/auth/google">
              <GoogleButton />
            </a>
            <tr>
              <td>
                <h5> Login With Your Harvest Email </h5>
              </td>
            </tr>

            <tr>
              <td className={style.signin}>
                <input
                  placeholder="Work Mail"
                  name="email"
                  onChange={handleInp}
                />
              </td>
            </tr>
            <tr>
              <td className={style.signin}>
                <input
                  type="password"
                  placeholder="Password"
                  name="pswd"
                  onChange={handleInp}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={submitSignIn}>Sign In</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
