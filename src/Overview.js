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
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
// import "./App.css";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
      ]
    };
  }
  render() {
    // console.log(this.props.data)
    return (
      <div>
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
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={this.props.data} />
        </XYPlot>
      </div>
    );
  }
}
