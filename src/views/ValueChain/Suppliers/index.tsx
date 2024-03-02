import React from 'react'
import Table from '../../../shared/components/Table'
import Delete from "../../../assets/icons/delete.svg";
import Duplicate from "../../../assets/icons/duplicate.svg";
type Props = {
  data: any
}


const columns = [{
  title: "Supplier",
  key: "supplier",
  dataIndex: "supplier",
  width: 100,
  render: (text: string) => text 
},
{
  title: "Address",
  key: "address",
  dataIndex: "address",
  width: 100

},
{
  title: "",
  key: "",
  dataIndex: "",
  width: 1,
  className:"table-actions",
  render: () => {
    return  (<p>
    <span className='card-action icon-delete'></span>
    <span className='card-action icon-duplicate'></span>
    </p>)
  }
}]
const Suppliers = ({data}: Props) => {
  return (
    <div className='suppliers-list-wrapper'>
      <Table
      dataSource={data}
      columns={columns}
      pagination={{
        pageSize: 20
      }}
      ></Table>
    </div>
  )
}

export default Suppliers