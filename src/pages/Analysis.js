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
  H1,
  ControlGroup,
  InputGroup
} from "@blueprintjs/core";

// import "../../node_modules/normalize.css/normalize.css";
// import "~@blueprintjs/core/lib/css/blueprint.css";
// import "~@blueprintjs/icons/lib/css/blueprint-icons.css";
// import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  RadarChart,
  MarkSeries,
  
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
      <div className="container">
        <div className="col">
          <H1>Analysis</H1>
          <ZoomableChart data={this.props.data} xVar="day" yVar="pH" />
          {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="pH" /> */}
          <div className="row">
            <RadarChart
              data={[this.props.data[0]]}
              domains={[
                { name: "ca_nh4", domain: [0, 40] },
                { name: "mg_nh4", domain: [0, 40] },
                { name: "na_nh4", domain: [0, 40] },
                { name: "k_nh4", domain: [0, 40] }
              ]}
              height={500}
              width={500}
              margin={{ left: 60, right: 60, top: 60, bottom: 60 }}
            />
            <RadarChart
              data={[this.props.data[12]]}
              domains={[
                { name: "ca_nh4", domain: [0, 40] },
                { name: "mg_nh4", domain: [0, 40] },
                { name: "na_nh4", domain: [0, 40] },
                { name: "k_nh4", domain: [0, 40] }
              ]}
              height={500}
              width={500}
              margin={{ left: 60, right: 60, top: 60, bottom: 60 }}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <ControlGroup fill={true} vertical={false}>
                  <Button icon="filter">Filter</Button>
                  <InputGroup placeholder="Find filters..." />
                </ControlGroup>
              </div>
              <XYPlot width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <MarkSeries
                  className="mark-series-example"
                  sizeRange={[5, 15]}
                  data={getLineGraphData(this.props.data, "pH", "clay", "day")}
                />
              </XYPlot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
