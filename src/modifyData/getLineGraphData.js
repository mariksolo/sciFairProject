export default function getLineGraphData(results, xVariable, yVariable) {
  console.log("get line graph data")
  console.log(yVariable);
  console.log(results);
  let resultsCopy = results.slice();
  let d = resultsCopy.map(data => {
    Object.keys(data).forEach(k => {
      data[k] = Number(data[k]);
      if (k === xVariable) {
        data["x"] = data[k];
        delete data[k];
      } else if (k === yVariable) {
        data["y"] = data[k];
        delete data[k];
      }
    });

    // console.log(data)
    return data;
  });
  console.log(results);
  return d;
}
