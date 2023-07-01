import InventoryStats from "../components/InventoryStats";
import InventoryTable from "../components/InventoryTable";
const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <InventoryStats />
      <InventoryTable />
    </div>
  );
};

export default Dashboard;
