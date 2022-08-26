import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import style from "./../styles/auth.module.css";

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
    // e.preventDefault();
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
                  <input name="fname" onChange={handleInp} />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Company Name</label>
                </td>
                <td>
                  <input name="cname" onChange={handleInp} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Work Email</label>
                </td>
                <td>
                  <input name="wemail" onChange={handleInp} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password</label>
                </td>
                <td>
                  <input name="password" onChange={handleInp} />
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
