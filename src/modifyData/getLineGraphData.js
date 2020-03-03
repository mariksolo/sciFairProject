export default function getLineGraphData(results, xVariable, yVariable, size=false) {
  
  let resultsCopy = JSON.parse(JSON.stringify(results));
  let d = resultsCopy.map(data => {
    Object.keys(data).forEach(k => {
      data[k] = Number(data[k]);
      if (k === xVariable) {
        data["x"] = data[k];
        delete data[k];
      } else if (k === yVariable) {
        data["y"] = data[k];
        delete data[k];
      } else if (size && k===size) {
        data["size"] = data[k];
        delete data[k];
      }
    });

    // console.log(data)
    return data;
  });
  
  return d;
}
