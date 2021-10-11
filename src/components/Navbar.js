import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
       
      <MDBNavbar expand='lg' dark bgColor='primary'>
        
          <MDBNavbarBrand href='#'>
            <a class="navbar-brand" href='#'>
              <img src="/images/dcls.logo.png" height="30px" alt="" />
            </a>
          </MDBNavbarBrand>

      
        <MDBNavbarNav right>
                  
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/phone'>Phones</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/phones'>Add Phone</MDBNavbarLink>
              </MDBNavbarItem>
          
        </MDBNavbarNav>
     
    </MDBNavbar>
    )
}

export default navbar;


