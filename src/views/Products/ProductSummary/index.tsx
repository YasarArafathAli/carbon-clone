import React, { useState } from 'react'
import ProductFormHeader from '../ProductDetailsForm/ProductFormHeader'
import { Row } from 'antd'
import StepFlow from '../ProductDetailsForm/StepFlow'
import ConfirmationModal from '../../../shared/components/ConfirmationModal'

type Props = {
  back?: () => void;
  submitForApproval?: () => void
  preview?: boolean;
}

const ProductSummary = ({back, submitForApproval, preview}: Props) => {
  const [showApprovalConfirmation, setShowApprovalConfirmation] = useState(false);

  const openApprovalConfirmation = () => setShowApprovalConfirmation(true);
  const closeApproval = () => setShowApprovalConfirmation(false);

  return (
    <div className="form-step-wrapper">
    <ProductFormHeader
      title="Total"
      {... !preview ? {
        primaryButtonText:"Submit for approval",
        showBackButton: true,
        primarySubmitHandler: openApprovalConfirmation,
        backButtonHandler: back,
        hideNextArrow: true
      }: {}}
    />
    <Row className='product-details-steps'>
    <StepFlow activeStep={4} hideViewMore/>
    </Row>   

    {submitForApproval &&

     <ConfirmationModal
     visible={showApprovalConfirmation}
     title="Thank you for submitting your product carbon footprint information!"
     description="One of our in house LCA experts has already been notified and will review all information provided within 2 business days. In the meantime, we encourage you to review the preliminary results of your footprint in the Product Dashboard. To ensure integrity of the Product Carbon Footprint as well as protect your brand, you are required to wait until the review has been completed to download and start using your Product Carbon Footprint Label. We also strongly recommend to wait until the review has been completed before sharing any information externally or for official purposes. Once the review is completed, you will be notified by email as well as through our platform."
     onCancel={closeApproval}
     onConfirm={submitForApproval}
     
     />   
    }
    </div>
  )
}

export default ProductSummary