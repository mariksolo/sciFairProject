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
import getLineGraphData from "./modifyData/getLineGraphData";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loadedModel: false };
    let results = [];
    let stream = fs.createReadStream(__dirname + "/demoData.csv");
    stream
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
        
      });
    // stream.close();
    let t = [{test: 1, test2: 2, test3: 3}, {test: 1.1, test2: 2.1, test3: 3.1, }]
    
  }

  async componentDidMount() {
    console.log("component did mount");
    try {
      const model = await tf.loadLayersModel(
        "file://" + __dirname + "/model.json"
      );
      let sample = [123, 13, 0.5, 1233, 123, 123, 123, 123];
      const predictions = model
        .predict(tf.tensor(sample, [1, sample.length]))
        .arraySync();
      this.setState({ loadedModel: true });
      console.log("loadedModel is true");
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loadedModel) {
      return (
        <div id="Layout" className="bottomRoot">
          <Tabs>
            <Tab
              id="tab1"
              title="tab1"
              panel={<Overview data={this.state.data} />}
            />
            <Tab
              id="tab2"
              title="tab2"
              panel={<Analysis data={this.state.data} />}
            />
            <Tab id="tab3" title="tab3" panel={<H1>Hello3</H1>} />
          </Tabs>
        </div>
      );
    } else {
      return <h1>loading</h1>;
    }
  }
}
