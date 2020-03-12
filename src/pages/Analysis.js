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
  Slider
} from "react-vis";
import getLineGraphData from "../modifyData/getLineGraphData";
// import "./App.css";
import TwoVarGraph from "../classes/TwoVarGraph";
import ZoomableChart from "../classes/ZoomableChart";

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yVar: "clay", circle: "pH", id: 12 };
    this.handleYvarChange = this.handleYvarChange.bind(this);
    this.handleCircleChange = this.handleCircleChange.bind(this);
    this.handleIDchange = this.handleIDchange.bind(this);
  }

  handleYvarChange(event) {
    this.setState({ yVar: event.currentTarget.value });
  }
  handleCircleChange(event) {
    this.setState({ circle: event.currentTarget.value });
  }
  handleIDchange(event) {
    this.setState({ id: event.currentTarget.value });
  }

  render() {
    //   console.log(this.props.data)

    return (
      <div className="container">
        <div className="col">
          <H1>Analysis</H1>
          <Tabs>
            <Tab
              id="soc"
              title="SOC Trends"
              panel={
                <ZoomableChart
                  height={700}
                  width={700}
                  data={this.props.data}
                  xVar="day"
                  yVar="oc"
                />
              }
            />
            <Tab
              id="radar"
              title="Radar Chart Analysis"
              panel={
                <div className="col">
                  <RadarChart
                    data={[this.props.data[this.state.id - 1]]}
                    domains={[
                      { name: "ca_nh4", domain: [0, 40] },
                      { name: "mg_nh4", domain: [0, 40] },
                      { name: "na_nh4", domain: [0, 40] },
                      { name: "k_nh4", domain: [0, 40] }
                    ]}
                    height={700}
                    width={700}
                    margin={{ left: 90, right: 90, top: 90, bottom: 90 }}
                  />

                  <div className="bp3-select">
                    <select defaultValue={"1"} onChange={this.handleIDchange}>
                      {/* <option selected>Choose the y variable</option> */}
                      <option value="1">January '19</option>
                      <option value="2">February '19</option>
                      <option value="3">March '19</option>
                      <option value="4">April '19</option>
                      <option value="5">May '19</option>
                      <option value="6">June '19</option>
                      <option value="7">July '19</option>
                      <option value="8">August '19</option>
                      <option value="9">September '19</option>
                      <option value="10">October '19</option>
                      <option value="11">November '19</option>
                      <option value="12">December '19</option>
                      <option value="13">January '20</option>
                      <option value="14">February '20</option>
                    </select>
                  </div>
                </div>
              }
            />

            <Tab
              id="markSeries"
              title="Mark Series Analysis"
              panel={
                <div className="col">
                  <XYPlot width={700} height={700}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <MarkSeries
                      className="mark-series-example"
                      sizeRange={[5, 15]}
                      data={getLineGraphData(
                        this.props.data,
                        "day",
                        this.state.yVar,
                        this.state.circle
                      )}
                    />
                  </XYPlot>

                  <div className="row">
                    <div className="bp3-select">
                      <select
                        defaultValue={"clay"}
                        onChange={this.handleYvarChange}
                      >
                        {/* <option selected>Choose the y variable</option> */}
                        <option value="pH">pH</option>
                        <option value="clay">clay</option>
                        <option value="ca_nh4">ca_nh4</option>
                        <option value="mg_nh4">mg_nh4</option>
                        <option value="na_nh4">na_nh4</option>
                        <option value="k_nh4">k_nh4</option>
                        <option value="CECnh4">CECnh4</option>
                        <option value="CECsum">CECsum</option>
                        <option value="oc">OC</option>
                      </select>
                    </div>

                    <div className="bp3-select">
                      <select
                        defaultValue={"pH"}
                        onChange={this.handleCircleChange}
                      >
                        {/* <option selected>Choose circle weight</option> */}
                        <option value="pH">pH</option>
                        <option value="clay">clay</option>
                        <option value="ca_nh4">ca_nh4</option>
                        <option value="mg_nh4">mg_nh4</option>
                        <option value="na_nh4">na_nh4</option>
                        <option value="k_nh4">k_nh4</option>
                        <option value="CECnh4">CECnh4</option>
                        <option value="CECsum">CECsum</option>
                        <option value="oc">OC</option>
                      </select>
                    </div>
                  </div>
                </div>
              }
            />
          </Tabs>
        </div>
      </div>
    );
  }
}
