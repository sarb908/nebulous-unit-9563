import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import style from "./../styles/auth.module.css";
import * as types from "./../redux/authReducer/actionTypes";
import { useToast } from "@chakra-ui/react";
import { signupHandler } from "../redux/authReducer/actions";
const Section = styled.section`
  background-color: #f26314;
  height: 170px;
  justify-content: center;
`;
const Heading = styled.p`
  color: ${(props) => (props.primary ? "white" : "white")};
  font-size: ${(props) => (props.primary ? "40px" : "20px")};
  line-height: ${(props) => (props.primary ? "40px" : "30px")};
  font-weight: ${(props) => (props.primary ? "700" : "500")};
  text-align: ${(props) => (props.primary ? "center" : "center")};
  padding-top: ${(props) => (props.primary ? "40px" : "0px")};
`;
const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #20960b;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 600;
`;

export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inp, setInp] = useState({});

  const handleInp = (e) => {
    const { value, name } = e.target;
    let payload = {
      ...inp,
      [name]: value,
    };
    setInp(payload);
  };
  const submitSignUp = (e) => {
    e.preventDefault();
    if (!inp.email || !inp.pswd || !inp.name || !inp.company) {
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
    dispatch(signupHandler(inp)).then((r) => {
      // console.log(r);
      if (r.type === types.SIGNUP_SUCCESS) {
        toast({
          title: `SignUp Success`,
          status: "success",
          isClosable: true,
        });
        navigate("/login");
        return;
      }
    });
    //  console.log(inp);
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      <Section>
        <Heading primary>Start your free 30-day trial.</Heading>
        <Heading> Fully functional. No credit card required.</Heading>
      </Section>

      <form className={style.formTag}>
        <div className={style.formdiv}>
          <table>
            <tbody>
              <tr>
                <td colSpan="2">
                  <h5> Sign up with your email below </h5>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Name</label>
                </td>
                <td>
                  <input name="name" onChange={handleInp} />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Company Name</label>
                </td>
                <td>
                  <input name="company" onChange={handleInp} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Work Email</label>
                </td>
                <td>
                  <input name="email" onChange={handleInp} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password</label>
                </td>
                <td>
                  <input name="pswd" type="password" onChange={handleInp} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Button onClick={submitSignUp}>Create My Account</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
