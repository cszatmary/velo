import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTh } from '@fortawesome/free-solid-svg-icons';
import {toggleGridAction} from "../actions/p5Actions";

const MenuBar = (props) => (
  <Container className="d-flex">
    <div className="flex-column">
      <Nav>
        <NavItem className="my-2">
          <FontAwesomeIcon icon={faTh} onClick={() => props.toggleGridAction(!props.p5.isGridVisible)} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faCamera} onClick={() => {
            const canvas = document.getElementsByTagName('canvas')[0];
            const img = canvas.toDataURL('png');

            const aTag = document.createElement('a');
            aTag.setAttribute('href', img);
            aTag.setAttribute('download', 'velo.png');
            document.body.appendChild(aTag);
            aTag.click();
            document.body.removeChild(aTag);
          }} />
        </NavItem>
      </Nav>
    </div>
  </Container>
);

function mapStateToProps({ p5 }) {
  return { p5 };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleGridAction: isVisible => {
      dispatch(toggleGridAction(isVisible));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);