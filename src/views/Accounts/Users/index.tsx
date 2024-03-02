import React, { useState } from 'react'
import Table from '../../../shared/components/Table'
import SearchField from '../../../shared/components/SearchField'
import { Col, Row } from 'antd';
import "./styles.scss"
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
  title: "Role",
  key: "role",
  dataIndex: "role",
  width: 100

},
{
  title: "Email",
  key: "email",
  dataIndex: "email",
  width: 100
},
{
  title: "Phone Number",
  key: "phoneNumber",
  dataIndex: "phoneNumber",
  width: 100
},
{
  title: "Manufacturer / Brand",
  key: "brand",
  dataIndex: "brand",
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
const Users = ({data}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const onSearch = () =>{

  }
  return (
    <div className='user-list-wrapper'>
      <Row className='table-search-field'>
        <Col span={24}><SearchField searchValue={searchValue} setSearchValue={setSearchValue} onSearch={onSearch} /></Col>
      </Row>
      

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

export default Users