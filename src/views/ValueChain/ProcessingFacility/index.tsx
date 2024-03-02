import React from 'react'
import Table from '../../../shared/components/Table'
import Delete from "../../../assets/icons/delete.svg";
import Duplicate from "../../../assets/icons/duplicate.svg";
type Props = {
  data: any
}


const columns = [{
  title: "Processing Facility",
  key: "processingFacility",
  dataIndex: "processingFacility",
  width: 100,
  render: (text: string) => text 
},
{
  title: "Scope1 (tonnes CO2e)",
  key: "scope1",
  dataIndex: "scope1",
  width: 100

},
{
  title: "scope2 (tonnes CO2e)",
  key: "scope2",
  dataIndex: "scope2",
  width: 100
},
{
  title: "Scope3 (tonnes CO2e)",
  key: "scope3",
  dataIndex: "scope3",
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
    <span className='card-action'><img src={Delete} alt="" /></span>
    <span className='card-action'><img src={Duplicate} alt="" /></span>
    </p>)
  }
}]
const ProcessingFacility = ({data}: Props) => {
  return (
    <div className='facility-list-wrapper'>
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

export default ProcessingFacility