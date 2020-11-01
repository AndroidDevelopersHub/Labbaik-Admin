import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {


  var baseUrl = "https://api.labbaik.xyz/admin/";


  //Variablesss
  let history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



  //Methods
  const handleEmail = (event) => {
    setemail(event.target.value);
  };

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };



  const loginClick = () => {
    console.log("clickd");
    console.log("email : " + email + " pass : " + password);


    var str = "hello ";
    str = `${str} hi bye`;
    console.log(str);

    axios({
      method: "GET",
      url: `${baseUrl}${email}/${password}`,
    }).then((response) => {
      console.log(response.data);
      if (response.data.result) {
        localStorage.setItem("role", response.data.role);
        console.log(localStorage.getItem("role"));
        history.replace("/starter")
      }else{
        alert('Wrong Email Password');
      }
    });



  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        name="email"
                        onChange={handleEmail}
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        name="password"
                        onChange={handlePassword}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          onClick={loginClick}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
