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
import * as tf from "@tensorflow/tfjs";
require("@tensorflow/tfjs-node");
import SOCmodel from "./model.json";
import fs from "fs";
import csv from "csv-parser";
import Overview from "./pages/Overview";
import Analysis from "./pages/Analysis";
import getLineGraphData from "./modifyData/getLineGraphData"
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], foundData:false };
  }
  
  async componentDidMount() {
    console.log("component did mount")
    try {
      const model = await tf.loadLayersModel(
        "file://" + __dirname + "/model.json"
      );
      let sample = [123, 13, 0.5, 1233, 123, 123, 123, 123];
      const predictions = model
        .predict(tf.tensor(sample, [1, sample.length]))
        .arraySync();

      let results = [];
      fs.createReadStream(__dirname + "/demoData.csv")
        .pipe(csv())
        .on("data", data => results.push(data))
        .on("end", () => {
          // results = results.map(data => [
          //   Number(data["pH"]),
          //   Number(data["clay"]),
          //   Number(data["ca_nh4"]),
          //   Number(data["mg_nh4"]),
          //   Number(data["na_nh4"]),
          //   Number(data["k_nh4"]),
          //   Number(data["CECnh4"]),
          //   Number(data["CECsum"])
          // ]);

          // for (let i = 0; i < results.length; i++) {

          //   console.log(
          //     model
          //       .predict(tf.tensor(results[i], [1, results[i].length]))
          //       .arraySync()
          //   );
          // }
          this.setState({ data: results });
          console.log("The data?!: ");
          console.log(this.state.data);
          console.log(results);
          this.setState({foundData: true})
        });
    } catch (error) {
      console.error(error);
    }
  }
  // handleNavbarTabChange = (navbarTabId) => this.setState({ navbarTabId });
  render() {
    if(this.state.foundData) {
      getLineGraphData(this.state.data, "day", "pH")
      return (
        <div id="Layout" className="bottomRoot">
          <Tabs>
            {/* <Tab
              id="tab1"
              title="tab1"
              panel={<Overview data={this.state.data} />}
            /> */}
            {/* <Tab
              id="tab2"
              title="tab2"
              panel={<Analysis data={this.state.data} />}
            /> */}
            <Tab id="tab3" title="tab3" panel={<H1>Hello3</H1>} />
          </Tabs>
        </div>
      );
    } else {
      return (<h1>loading</h1>);
      
    }
    
  }
}
