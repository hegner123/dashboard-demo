import { PieChart } from "react-minimal-pie-chart";

export function Pie(props) {
  let data = [];
  function Slice(title, value, color) {
    this.title = title;
    this.value = value;
    this.color = color;
  }

  props.values.forEach((value) => {
    let newValue = new Slice(value.title, value.value, value.color);
    data.push(newValue);
  });

  return (
    <PieChart
      data={data}
      viewBoxSize={props.size}
      radius={props.radius}
      animate={true}
      label={({ dataEntry }) => dataEntry.value + "%"}
    />
  );
}
