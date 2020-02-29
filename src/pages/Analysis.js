import React from "react";
import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  H1
} from "@blueprintjs/core";
// import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import getLineGraphData from "../modifyData/getLineGraphData";
// import "./App.css";
import TwoVarGraph from "../classes/TwoVarGraph";
import ZoomableChart from "../classes/ZoomableChart";

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //   console.log(this.props.data)
    return (
      <div>
        <H1>Analysis</H1>
        <ZoomableChart data={this.props.data} xVar ="day" yVar = "clay"/>
        {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="pH" /> */}
      </div>
    );
  }
}
