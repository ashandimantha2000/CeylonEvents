import styles from "../../components/AdminComp/Admin.module.scss";
import AdminNav from "../../components/AdminComp/AdminNav";
import AdminData from "../../components/AdminComp/AdminData";

function Dashboard() {
  return (
    <div className={styles.all}>
      <AdminNav />
      <AdminData />
    </div>
  );
}

export default Dashboard;
