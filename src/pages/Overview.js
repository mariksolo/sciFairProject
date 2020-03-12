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
  H2
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

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.data)
    return (
      <div className="bottomRoot">
        {/* <div className="row"> */}
        <div className="container">
        
          <div className="col">
          <H1>General Overview</H1>
            <div className="row">
            
              <div className="container">
                <TwoVarGraph
                  data={this.props.data}
                  xVar="day"
                  yVar="pH"
                  xLabel="Month"
                  yLabel="pH"
                />

                <TwoVarGraph
                  data={this.props.data}
                  xVar="day"
                  yVar="clay"
                  xLabel="Month"
                  yLabel="Total Clay (% wt)"
                />
                <TwoVarGraph
                  data={this.props.data}
                  xVar="day"
                  yVar="ca_nh4"
                  xLabel="Month"
                  yLabel="Extractable Calcium (cmol/kg)"
                />
              </div>
            </div>
            <div className="row">
              <TwoVarGraph
                data={this.props.data}
                xVar="day"
                yVar="mg_nh4"
                xLabel="Month"
                yLabel="Extractable Magnesium (cmol/kg)"
              />
              <TwoVarGraph
                data={this.props.data}
                xVar="day"
                yVar="na_nh4"
                xLabel="Month"
                yLabel="Extractable Sodium (cmol/kg)"
              />
              <TwoVarGraph
                data={this.props.data}
                xVar="day"
                yVar="k_nh4"
                xLabel="Month"
                yLabel="Extractable Potassium (cmol/kg)"
              />
            </div>
            <div className="row">
              <TwoVarGraph
                data={this.props.data}
                xVar="day"
                yVar="CECnh4"
                xLabel="Month"
                yLabel="Ammonium Acetate Cation Exchange Capacity (cmol/kg)"
              />
              <TwoVarGraph
                data={this.props.data}
                xVar="day"
                yVar="CECsum"
                xLabel="Month"
                yLabel="Total Cation Exchange Capacity (cmol/kg)"
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
