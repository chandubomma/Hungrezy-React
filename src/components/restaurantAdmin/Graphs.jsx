import { AreaGraph } from "../Charts/AreaGraph";
import BarGraph from "../Charts/BarGraph";

export default function Graphs() {
  return (
    <div className="grid grid-cols-2">
      <BarGraph />
      <AreaGraph />
    </div>
  );
}
