import { NavLink, Outlet } from "react-router-dom";
import Bradcrumb from "../../components/Bradcrumb/Bradcrumb";

const Dashboard = () => {
  return (
    <>
      <Bradcrumb />
      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-3">
                <ul role="tablist" className="nav admin-tab nav-tabs outline">
                  <li role="presentation">
                    <NavLink to="product">Product</NavLink>
                  </li>
                  <li role="presentation">
                    <NavLink to="category">Category</NavLink>
                  </li>
                  <li role="presentation">
                    <NavLink to="tag">Tags</NavLink>
                  </li>
                  <li role="presentation">
                    <NavLink to="brand">Brands</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <Outlet/>
              </div>
            </div>
            {/* end of row*/}
          </div>
          {/* end of section content*/}
        </div>
        {/* end of container*/}
      </section>
    </>
  );
};

export default Dashboard;
