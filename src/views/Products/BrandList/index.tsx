import React from 'react'
import Table from '../../../shared/components/Table'
import Delete from "../../../assets/icons/delete.svg";
import Duplicate from "../../../assets/icons/duplicate.svg";
type Props = {
  data: any
}


const columns = [{
  title: "Name",
  key: "name",
  dataIndex: "name",
  width: 100,
  render: (text: string) => text 
},
{
  title: "Category",
  key: "category",
  dataIndex: "category",
  width: 100

},
{
  title: "Products",
  key: "products",
  dataIndex: "products",
  width: 100
},
{
  title: "Total Emissions (times CO2e)",
  key: "emissions",
  dataIndex: "emissions",
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
    <span className='card-action icon-delete' />
    <span className='card-action icon-duplicate' />
    </p>)
  }
}]
const BrandList = ({data}: Props) => {
  return (
    <div className='brand-list-wrapper'>
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

export default BrandList