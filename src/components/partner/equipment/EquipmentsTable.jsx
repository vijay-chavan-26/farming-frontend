import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import ActionDropdownStatus from '../utils/ActionDropdownStatus'
import { DealTableData } from "../../../language-data/DealTableData";
import API_URL, { get_request } from "../../utils/ApiRequests";
import { useSelector } from "react-redux";


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
    title: "Desc",
    dataIndex: "desc",
    key: "desc",
    //   width: "20%",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    //   width: "20%",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    //   width: "20%",
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

const EquipmentsTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const user = useSelector((state) => state.user.user);


  const fetchData = (UsersTableData) => {
    setLoading(true);
    console.log(UsersTableData);
    const updatedData = UsersTableData.map((item,index) => {

      return {
        key: (index+1).toString(),
        eId: (index+1).toString(),
        name: item.name,
       desc: item.desc.length > 15 ? `${item.desc.substring(0, 15)}...` : item.desc,
        type: item.type,
        price: item.price && "₹"+item.price,

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

  const fetchUserData = async () => {
    console.log(user)
    try {
      const res = await get_request(`${API_URL}/partner/get-equipments/by-id/${user._id}`);
      if (res.length > 0) {
        return res;
      } else {
        message.error("Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
      return;
    }
  };

  useEffect(() => {
    if(user._id)
    fetchUserData().then((res) => {
      fetchData(res);
    });
  }, [JSON.stringify(tableParams),user]);

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

export default EquipmentsTable;
  