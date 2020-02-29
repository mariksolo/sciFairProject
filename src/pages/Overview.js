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
            {/* <div className="row"> */}
            <table className="bp3-html-table bp3-interactive bp3-small bp3-html-table-striped">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>Nitrogen</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
                <tr>
                  <td>pH</td>
                  <td>4.7</td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}
          </div>
          <div className="col">
            <div className="row">
              <H2>0.2 - 9.8 %wt</H2>
            </div>
            <div className="graphContainer">
              <div className="row">
                {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="pH" /> */}

                <TwoVarGraph data={this.props.data} xVar="day" yVar="clay" />
                {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="ca_nh4" /> */}
              </div>
              <div className="row">
                {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="mg_nh4" />
                <TwoVarGraph data={this.props.data} xVar="day" yVar="na_nh4" />
                <TwoVarGraph data={this.props.data} xVar="day" yVar="k_nh4" /> */}
              </div>
              <div className="row">
                {/* <TwoVarGraph data={this.props.data} xVar="day" yVar="CECnh4" />
                <TwoVarGraph data={this.props.data} xVar="day" yVar="CECsum" /> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
