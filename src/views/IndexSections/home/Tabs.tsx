import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export interface ITemplateProps {
  prop1?: any;
  prop2?: any;
}

const Template: React.FC<ITemplateProps> = ({
  prop1,
  prop2
}) => {

  return (
    null
  );
}

export default Template;