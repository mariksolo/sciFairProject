import React from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

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
  H1,
  H2,
  H5
} from "@blueprintjs/core";
import getLineGraphData from "../modifyData/getLineGraphData";

export default function TwoVarGraph(props) {
  // console.log(props.yVar);
  // console.log(props.data);
  // console.log(getLineGraphData(props.data, props.xVar, props.yVar))
  return (
    <div className="container col">
    
      <H5>{props.yLabel}</H5>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title={props.xLabel} />
        <YAxis title={props.yLabel} />

        <LineSeries
          data={getLineGraphData(props.data, props.xVar, props.yVar)}
        />
      </XYPlot>
    </div>
  );
}
