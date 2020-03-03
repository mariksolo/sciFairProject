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
          <ZoomableChart data={this.props.data} xVar="day" yVar="pH" />

          <div className="col">
            <div className="bp3-select">
              <select defaultValue={"1"} onChange={this.handleIDchange}>
                {/* <option selected>Choose the y variable</option> */}
                <option value="1">day 1</option>
                <option value="2">day 2</option>
                <option value="3">day 3</option>
                <option value="4">day 4</option>
                <option value="5">day 5</option>
                <option value="6">day 6</option>
                <option value="7">day 7</option>
                <option value="8">day 8</option>
                <option value="9">day 9</option>
                <option value="10">day 10</option>
                <option value="11">day 11</option>
                <option value="12">day 12</option>
                <option value="13">day 13</option>
                <option value="14">day 14</option>
              </select>
            </div>

            <RadarChart
              data={[this.props.data[this.state.id-1]]}
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
            {/* <RadarChart
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
            /> */}
          </div>
          <div className="row">
            <div className="col">
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
                    <option value="pH">SOC</option>
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
                    <option value="pH">SOC</option>
                  </select>
                </div>
              </div>
              <XYPlot width={300} height={300}>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
