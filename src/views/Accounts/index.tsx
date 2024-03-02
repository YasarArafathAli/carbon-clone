import React, { useState } from 'react'
import AppHeader from '../../shared/components/AppHeader'
import {  PricingData, UserData } from './data'
import SupplierForm from './AddUserForm'
import AppTabs from '../../shared/components/AppTabs'
import Users from './Users'
import Pricing from './Pricing'
import AccountDetails from './AccountDetails'
import Button from '../../shared/components/Button'
import AddUserForm from './AddUserForm'
import SearchField from '../../shared/components/SearchField'

type Props = {}


export enum AccountsTabs{
  USERS="users",
  PRICING = "pricing"
}


const tabItems = [
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-user_profile' /> User Details</span>,
    id: AccountsTabs.USERS,
    children: <Users data={UserData} />,
  },
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-pricing' /> Pricing</span>,
    id: AccountsTabs.PRICING,
    children: <Pricing data={PricingData} />,
  },
]


const Accounts = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(AccountsTabs.USERS);
  const [showAddUserForm, setShowAddUserForm] = useState(false);


  const handleAddUser = () => {
    setShowAddUserForm(true);
  }

  const handleTabSelect = (key: string) => {
    setSelectedTab(key as AccountsTabs)
  }
  const closeFormModal =() => {
    setShowAddUserForm(false);
  }

 
  return (
    <div className='accounts-wrapper'>
      <AppHeader title='Accounts' showAddIcon smallHeader />
      <AccountDetails />
      <div>
        <AppTabs handleTabChange={handleTabSelect} activeKey={selectedTab} tabItems={tabItems} {...selectedTab === AccountsTabs.USERS &&  {
          extraContent: (<Button type='primary' clickHandler={handleAddUser}><span className='icon-add p-1'/>Add User</Button>)
        }} />
      </div>
      <AddUserForm visible={showAddUserForm}  closeForm={closeFormModal}/>
    </div>
  )
}

export default Accounts