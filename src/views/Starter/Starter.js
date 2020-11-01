// import React, { lazy } from 'react'
// import {
//   CBadge,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CCallout
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import React from 'react'

export default function Starter() {


    const deleteLocalStorage = () => {
        console.log('clicked')
        localStorage.removeItem("role");
        // remove all
        // localStorage.clear();
        console.log("deleted");
      };

      


    return (
        <div>
            <p onClick={deleteLocalStorage}> Starter Component  </p>
        </div>
    )
}
