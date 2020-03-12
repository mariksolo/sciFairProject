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
import * as tf from "@tensorflow/tfjs";
require("@tensorflow/tfjs-node");
import SOCmodel from "./model.json";
import fs from "fs";
import csv from "csv-parser";
import Overview from "./pages/Overview";
import Analysis from "./pages/Analysis";
import Manage from "./pages/LiveModel";
import getLineGraphData from "./modifyData/getLineGraphData";
import normalize from "./modifyData/normalize";
import DataStats from "./classes/DataStats";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loadedModel: false, normedData: [] };
    let results = [];
    let stream = fs.createReadStream(__dirname + "/demoData.csv");
    stream
      .pipe(csv())
      .on("data", data => results.push(data))
      .on("end", () => {
        this.setState({ data: results });

        console.log("in constructor");
        let normedResults = results.map(data => [
          normalize(
            Number(data["pH"]),
            DataStats["pH"]["mean"],
            DataStats["pH"]["sd"]
          ),
          normalize(
            Number(data["clay"]),
            DataStats["clay"]["mean"],
            DataStats["clay"]["sd"]
          ),
          normalize(
            Number(data["ca_nh4"]),
            DataStats["ca_nh4"]["mean"],
            DataStats["ca_nh4"]["sd"]
          ),
          normalize(
            Number(data["mg_nh4"]),
            DataStats["mg_nh4"]["mean"],
            DataStats["mg_nh4"]["sd"]
          ),
          normalize(
            Number(data["na_nh4"]),
            DataStats["na_nh4"]["mean"],
            DataStats["na_nh4"]["sd"]
          ),
          normalize(
            Number(data["k_nh4"]),
            DataStats["k_nh4"]["mean"],
            DataStats["k_nh4"]["sd"]
          ),
          normalize(
            Number(data["CECnh4"]),
            DataStats["CECnh4"]["mean"],
            DataStats["CECnh4"]["sd"]
          ),
          normalize(
            Number(data["CECsum"]),
            DataStats["CECsum"]["mean"],
            DataStats["CECsum"]["sd"]
          )
        ]);

        this.setState({ normedData: normedResults });
        console.log(this.state.data);
        console.log(this.state.normedData);
        // for (let i = 0; i < results.length; i++) {

        //   console.log(
        //     model
        //       .predict(tf.tensor(results[i], [1, results[i].length]))
        //       .arraySync()
        //   );
        // }
      });
    // stream.close();
  }

  async componentDidMount() {
    console.log("component did mount");

    try {
      const model = await tf.loadLayersModel(
        "file://" + __dirname + "/model.json"
      );
      for (let i = 0; i < this.state.normedData.length; i++) {
        console.log("result");
        console.log(this.state.normedData[i]);

        this.state.data[i]["oc"] = model
          .predict(
            tf.tensor(this.state.normedData[i], [
              1,
              this.state.normedData[i].length
            ])
          )
          .arraySync();

        console.log(this.state.data);
      }

      this.setState({ loadedModel: model });
      console.log("loadedModel is true");
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loadedModel) {
      return (
        <div id="Layout" c>
          <Tabs>
            <Tab
              id="tab1"
              title="Overview"
              panel={<Overview data={this.state.data} />}
            />
            <Tab
              id="tab2"
              title="Analysis"
              panel={<Analysis data={this.state.data} />}
            />
            <Tab
              id="tab3"
              title="Live Calculation"
              panel={
                <Manage data={this.state.data} model={this.state.loadedModel} />
              }
            />
          </Tabs>
        </div>
      );
    } else {
      
      return (
        <div className="container">
        
          <Spinner className="spinnerStyle" size={100}/>
        </div>
      );
    }
  }
}
