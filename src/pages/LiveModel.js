import React from "react";
import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  H1,
  ControlGroup,
  InputGroup,
  FormGroup,
  AnchorButton,
  Intent,
  Alignment
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
import normalize from "../modifyData/normalize";
import DataStats from "../classes/DataStats";
import * as tf from "@tensorflow/tfjs";
require("@tensorflow/tfjs-node");

export default class LiveModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { oc: "", data: [] };
    this.findOC = this.findOC.bind(this);
    this.setVariable = this.setVariable.bind(this);
  }

  findOC(event) {
    console.log(this.state.data.length);
    console.log(this.state.data);

    if (this.state.data.length == 8) {
      let arrayIsFull = true;
      for (let i = 0; i < 8; i++) {
        if (!this.state.data[i]) {
          arrayIsFull = false;
          break;
        }
      }
      if (arrayIsFull) {
        console.log("Is full");
        this.setState({
          oc: this.props.model
            .predict(tf.tensor(this.state.data, [1, this.state.data.length]))
            .arraySync()
        });
      } else {
        console.log("Not full");
      }
    }
  }
  setVariable(event) {
    let newData = this.state.data;
    newData[event.currentTarget.id] = normalize(
      Number(event.currentTarget.value),
      DataStats[event.currentTarget.placeholder]["mean"],
      DataStats[event.currentTarget.placeholder]["sd"]
    );
    this.setState({ data: newData });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="container col">
      
      <H1>Live Organic Carbon Calculation</H1>
      <div className="row">
      <div className="col">
      
        <FormGroup
          helperText="Make sure to input values with the correct units"
          labelFor="text-input"
          onSubmit={this.findOC}
        >
          <InputGroup id={0} placeholder="pH" onChange={this.setVariable} />
          <InputGroup id={1} placeholder="Total Clay" onChange={this.setVariable} />
          <InputGroup id={2} placeholder="Extractable Calcium" onChange={this.setVariable} />
          <InputGroup id={3} placeholder="Extractable Magnesium" onChange={this.setVariable} />
          <InputGroup id={4} placeholder="Extractable Sodium" onChange={this.setVariable} />
          <InputGroup id={5} placeholder="Extractable Potassium" onChange={this.setVariable} />
          <InputGroup
            id={6}
            placeholder="Ammonium Acetate Cation Exchange Capacity"
            onChange={this.setVariable}
          />
          <InputGroup id={7} placeholder="Total Cation Exchange Capacity" onChange={this.setVariable} />
          <div className={Classes.DARK}>
            <Button
              intent={Intent.WARNING}
              type="submit"
              text="Infer OC"
              onClick={this.findOC}
            />
          </div>
        </FormGroup>
        
        
        </div>
        </div>
        <p>Organic Carbon: {Math.round(this.state.oc * 100) / 100} % wt</p>
      </div>
    );
  }
}
