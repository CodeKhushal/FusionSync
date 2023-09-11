import { Link } from "react-router-dom";
import Layout from "../components/Shared/Layout";

const Attendance = () => {
  return (
    <>
      <Layout>
        <div>
          <p>Attendance</p>
          <Link to="/">Dashboard</Link>
        </div>
      </Layout>
    </>
  );
};

export default Attendance;
