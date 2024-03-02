import React, { useState } from 'react'
import AppHeader from '../../shared/components/AppHeader'
import { supplierData, facilityData } from './data'
import Suppliers from './Suppliers'
import ProcessingFacility from './ProcessingFacility'
import SupplierForm from './SupplierForm'
import FacilityForm from './FacilityForm'
import AppTabs from '../../shared/components/AppTabs'
import "./styles.scss"
type Props = {}


export enum ValueChainTabs{
  PROCESSING_FACILITY="facility",
  SUPPLIERS = "suppliers"
}


const tabItems = [
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-processing_facility_line' /> Processing Facility</span>,
    id: ValueChainTabs.PROCESSING_FACILITY,
    children: <ProcessingFacility data={facilityData} />,
  },
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-supplier' /> Suppliers</span>,
    id: ValueChainTabs.SUPPLIERS,
    children: <Suppliers data={supplierData} />,
  },
]


const ValueChain = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(ValueChainTabs.PROCESSING_FACILITY);
  const [showFacilityForm, setShowFacilityForm] = useState(false);
  const [showSupplierForm, setShowSupplierForm] = useState(false);



  const handleAddFacility = () => {
    setShowFacilityForm(true);
  }
  const handleAddSupplier = () => {
    setShowSupplierForm(true);
  }

  const handleTabSelect = (key: string) => {
    setSelectedTab(key as ValueChainTabs)
  }
  const closeFormModal =() => {
    setShowFacilityForm(false);
    setShowSupplierForm(false);
  }
  return (
    <div className='value-chain-wrapper'>
      <AppHeader title='Value Chain' showAddIcon smallHeader buttonText={<>{" "}<span>{selectedTab === ValueChainTabs.PROCESSING_FACILITY? "New processing facility" : "New supplier"}</span></>} buttonAction={selectedTab === ValueChainTabs.PROCESSING_FACILITY? handleAddFacility: handleAddSupplier}/>
      <div>
        <AppTabs handleTabChange={handleTabSelect} activeKey={selectedTab} tabItems={tabItems}/>
      </div>
      <FacilityForm visible={showFacilityForm}  closeForm={closeFormModal}/>
      <SupplierForm visible={showSupplierForm}  closeForm={closeFormModal}/>
    </div>
  )
}

export default ValueChain