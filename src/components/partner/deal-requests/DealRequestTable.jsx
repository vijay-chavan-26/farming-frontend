import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import ActionDropdownStatus from '../utils/ActionDropdownStatus'
import { DealTableData } from "../../../language-data/DealTableData";

const DepartmentsTableColumns = [
  Table.SELECTION_COLUMN,
  {
    title: "#EID",
    dataIndex: "eId",
    key: "eId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    //   width: "20%",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "TV User",
    dataIndex: "tvUser",
    key: "tvUser",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const DealRequestTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = (UsersTableData) => {
    setLoading(true);
    console.log(UsersTableData);
    const updatedData = UsersTableData.map((item) => {
      return {
        key: item.id.toString(),
        eId: item.id.toString(),
        name: item.name,
        userId: item.userId,
        role: item.role,
        department: item.department,
        tvUser: item.tvUser ? "Yes" : "No",

        status: item.status ? (
          <div className="text-green-500 text-xs inline-flex items-center bg-green-50 rounded-3xl justify-center pr-3 py-0">
            <RxDotFilled size={"1.5rem"} />
            <p>Active</p>
          </div>
        ) : (
          <div className="text-red-500 text-xs inline-flex items-center bg-red-50 rounded-3xl justify-center pr-3 py-0">
            <RxDotFilled size={"1.5rem"} />
            <p>Deactive</p>
          </div>
        ),
        action: <ActionDropdownStatus item={item} />,
      };
    });
    setData(updatedData);
    setLoading(false);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: UsersTableData.length,
      },
    });
  };

  // const fetchUserData = async () => {
  //   try {
  //     const res = await get_request(`${API_URL}/user-by-dept-name`);
  //     if (res.skytech_user) {
  //       return res.skytech_user;
  //     } else {
  //       message.error("Something went wrong!");
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Something went wrong!");
  //     return;
  //   }
  // };

  useEffect(() => {
    // fetchUserData().then((res) => {
      fetchData(DealTableData);
    // });
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };

  return (
    <div>
      <Table
        columns={DepartmentsTableColumns}
        rowKey={(record) => record.key}
        rowSelection={{}}
        dataSource={data}
        scroll={{ x: true }}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default DealRequestTable;
 