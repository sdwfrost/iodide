import React from "react";
import styled from "react-emotion";
import ConsoleContainer from "./console-container";
import ConsoleGutter from "./console-gutter";
import ConsoleBody from "./console-body";

const OutputContainer = styled(ConsoleContainer)`
  margin-top: 0px;
`;

const OutputBody = styled(ConsoleBody)`
  min-height: 0px;

  display: block;
  overflow: auto;
  word-break: break-all;
  padding: 8px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Carat = styled("span")`
  font-weight: 100;
  color: darkgray;
`;

export default class ConsoleOutput extends React.Component {
  render() {
    return (
      <OutputContainer>
        <ConsoleGutter side="left">
          <Carat> {">"}</Carat>
        </ConsoleGutter>
        <OutputBody>{this.props.children}</OutputBody>
        <ConsoleGutter side="right">&nbsp;</ConsoleGutter>
      </OutputContainer>
    );
  }
}