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
    Spinner
  } from "@blueprintjs/core";

import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  XYPlot,
  LineSeries,
  Highlight
} from "react-vis";
import getLineGraphData from "../modifyData/getLineGraphData";
export default class ZoomableChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lastDrawLocation: null,}
  }


  render() {
    const { lastDrawLocation } = this.state;
    return (
      <div>
        <div>
          <XYPlot
            animation
            xDomain={
              lastDrawLocation && [
                lastDrawLocation.left,
                lastDrawLocation.right
              ]
            }
            yDomain={
              lastDrawLocation && [
                lastDrawLocation.bottom,
                lastDrawLocation.top
              ]
            }
            width={500}
            height={300}
          >
            <HorizontalGridLines />

            <YAxis />
            <XAxis />

            {/* <LineSeries data={getLineGraphData(this.props.data, "day", "pH")} /> */}
            <LineSeries data={getLineGraphData(this.props.data, this.props.xVar, this.props.yVar)} />

            <Highlight
              onBrushEnd={area => this.setState({ lastDrawLocation: area })}
              onDrag={area => {
                this.setState({
                  lastDrawLocation: {
                    bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                    left: lastDrawLocation.left - (area.right - area.left),
                    right: lastDrawLocation.right - (area.right - area.left),
                    top: lastDrawLocation.top + (area.top - area.bottom)
                  }
                });
              }}
            />
          </XYPlot>
        </div>

        <Button
          // className="showcase-button"
          onClick={() => this.setState({ lastDrawLocation: null })}
          
        >
          Reset Zoom
        </Button>

        
      </div>
    );
  }
}
