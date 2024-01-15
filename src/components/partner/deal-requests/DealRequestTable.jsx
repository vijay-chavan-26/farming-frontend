import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import DealDropdown from '../utils/DealDropdown'
import { DealTableData } from "../../../language-data/DealTableData";
import { get_request, put_request } from "../../utils/ApiRequests";
import API_URL from "../../utils/ApiRequests";
import { useSelector } from "react-redux";

const DepartmentsTableColumns = [
  Table.SELECTION_COLUMN,
  {
    title: "Item Name",
    dataIndex: "itemName",
    key: "itemName",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  
  {
    title: "Qty",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Booking Date",
    dataIndex: "bookingDate",
    key: "bookingDate",
  },
  {
    title: "Return Date",
    dataIndex: "returnDate",
    key: "returnDate",
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
  const [itemData, setItemData] = useState();
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
    // console.log(UsersTableData);
    const modifiedData = UsersTableData.reverse()

    const updatedData = modifiedData?.map((item) => {
      let itemName = ""
      if(itemData){
        itemName = itemData.find((data)=>data._id === item.itemId )
      }
      return {
        key: item._id.toString(),
        itemName: itemName?.name,
        name: item.name,
        type: item.itemType,
        quantity: item.bookedQuantity,
        bookingDate: item.bookingDate,
        returnDate: item.returnDate,
        email: item.email,
        contact: item.mobile_number,

        status: item.status === "Pending" ? (
          <div className="text-yellow-500 text-xs inline-flex items-center bg-yellow-50 rounded-3xl justify-center pr-3 py-0">
            <RxDotFilled size={"1.5rem"} />
            <p>Pending</p>
          </div>
        ) : item.status === "Accepted" ? (
          <div className="text-green-500 text-xs inline-flex items-center bg-green-50 rounded-3xl justify-center pr-3 py-0">
            <RxDotFilled size={"1.5rem"} />
            <p>Accepted</p>
          </div>
        ): (
          <div className="text-red-500 text-xs inline-flex items-center bg-red-50 rounded-3xl justify-center pr-3 py-0">
            <RxDotFilled size={"1.5rem"} />
            <p>Rejected</p>
          </div>
        ),

        action: item.status === "Pending" && <DealDropdown item={item} onReject={onReject} onAccept={onAccept} />,
      };
    });
    setData(updatedData);
    setLoading(false);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: UsersTableData?.length,
      },
    });
  };

  const fetchDealsData = async () => {
    try {
      const res = await get_request(`${API_URL}/deals/get-deals-user/${user._id}`);
      console.log(res)
      if (res.message) {
        return res.deals;
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

  const fetchUserData = async () => {
    console.log(user)
    try {
      const res = await get_request(`${API_URL}/partner/get-equipments/all`);
      if (res) {
        setItemData(res)
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

  const onReject = async(item) =>{
      try {
        const res = await put_request(`${API_URL}/deals/reject-deals`,{dealId: item._id});
        console.log(res)
        if (res.message) {
          fetchDealsData().then((res) => {
            fetchData(res);
          });
          message.success("Deal Rejected!");
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
  }

  const onAccept = async(item) =>{
      try {
        const res = await put_request(`${API_URL}/deals/accept-deals`,{dealId: item._id});
        console.log(res)
        if (res.message) {
          fetchDealsData().then((res) => {
            fetchData(res);
          });
          message.success("Deal Accepted!");
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
  }

  useEffect(() => {
    if(!itemData){
      fetchUserData()
    }
    if(user._id){
      fetchDealsData().then((res) => {
        fetchData(res);
      });
    }
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

export default DealRequestTable;
 