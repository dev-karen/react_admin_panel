import useTitle from "../../hooks/useTitle";
import DashboardLayout from "components/layouts/dashboardLayout";

export function Dashboard() {
  useTitle("Dashboard");
  return (
    <DashboardLayout title="dashboard">
      <p>THIS IS DASHBOARD</p>
    </DashboardLayout>
  );
}
export default Dashboard;
