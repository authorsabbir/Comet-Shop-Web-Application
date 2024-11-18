import Switch from "../../components/Switch/Switch";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import team1 from "../../assets/images/team/2.jpg"

const Brand = () => {
  return (
    <>
      <div className="all-brands-container">
        <h2>All Brands</h2>
        <button className="create-brand-btn">Create New Brand</button>
      </div>
      <div className="table-container">
        <table className="awesome-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>
                <img
                  src={team1}
                  alt="Brand Logo"
                  className="logo"
                />
              </td>
              <td>Another Brand</td>
              <td>another-slug</td>
              <td>2024-11-17</td>
              <td className="status-inactive"><Switch /></td>
              <td className="action-icons">
                <FaRegEye className="action-icon view" />
                <CiEdit className="action-icon edit" />
                <AiOutlineDelete className="action-icon delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Brand;
