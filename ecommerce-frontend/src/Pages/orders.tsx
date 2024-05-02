import React from 'react'
import { ReactElement, useState } from "react";
import TableHOC from "../Components/admin/TableHOC";
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataType={
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status:ReactElement;
    action:ReactElement;
}
const column:Column<DataType>[]=[
    {
        Header:"ID",
        accessor:"_id",
    },{
        Header:"Quantity",
        accessor:"quantity",
    },{
        Header:"Discount",
        accessor:"discount",
    },{
        Header:"Amount",
        accessor:"amount",
    },{
        Header:"Status",
        accessor:"status",
    },{
        Header:"Action",
        accessor:"action",
    },
    
]
const orders = () => {
   const [rows]=useState<DataType[]>([
    {
        _id:"asdasdasdasd",
        amount:45454,
        quantity:23,
        discount:5666,
        status:<span className="red">
            Processsing
        </span>,
        action:<Link to={'/order/asdasdasdasd'}>View</Link>,
    },
   ])

    const Table=TableHOC<DataType>(
        column,
          rows,
        "dashbord-product-box",
        "Orders",
        rows.length > 6
        )();
  return (
    <div className='container' >
        <h1>My Orders</h1>
        {
          Table
        }
    </div>
  )
}

export default orders