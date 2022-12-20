import React, { useEffect, useState } from "react";
import "./dash.css";
import { db } from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Nav from "../Navbar/Nav";

const Dashboard=()=> {
  const [userTable, setUserTable] = useState([]);

  const fetchdata = async () => {
    await getDocs(collection(db, "User")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserTable(newData);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Nav
        btn="Blog List"
        btn2="User List"
        btn3="Logout"
        path="/bloglist"
        path2="/dashboard"
        path3="/admin"
      />
      <div className="user-table">
        <h1 className="table-head">User lists</h1>

        <table className=" table-box ">
          <thead className="upper-tab">
            <tr>
              <th className="num">S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>User id</th>
            </tr>
          </thead>
          <tbody>
            {userTable.map((data, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="num">{++index}</td>
                    <td>{data.user.name}</td>
                    <td>{data.user.email}</td>
                    <td>{data.id}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
