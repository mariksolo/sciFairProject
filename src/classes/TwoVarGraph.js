import React from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  
} from "react-vis";
import getLineGraphData from "../modifyData/getLineGraphData";

export default function TwoVarGraph(props) {
  // console.log(props.yVar);
  // console.log(props.data);
  // console.log(getLineGraphData(props.data, props.xVar, props.yVar))
  return (
    <XYPlot height={300} width={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />

      <LineSeries data={getLineGraphData(props.data, props.xVar, props.yVar)} />
      
    </XYPlot>
  );
}
