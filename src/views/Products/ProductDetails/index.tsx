import React, { useState } from 'react'
import ProductSummary from "../ProductSummary";
import AppHeader from '../../../shared/components/AppHeader';
import EditIcon from "../../../assets/icons/edit_outline.svg"
import "./styles.scss"
import ProductInfoDrawer from '../ProductDetailsForm/ProductInfoDrawer';
import ProductMessageIcon from '../../../assets/icons/chat.svg'
import ProductInfoModal from './ProductInfoModal';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../routes/routeConstants/appRoutes';
type Props = {}

const ProductDetails = (props: Props) => {
  const navigate = useNavigate();
  const [productInfoModal, setProductInfoModal] = useState(false);
  const openProductInfoModal = () => {
    setProductInfoModal(true);}
  const closeProductInfoModal = () => setProductInfoModal(false);

  const back =() => {
    console.log("back")
  }

  const formRedirect = () => {
    navigate(AppRoutes.PRODUCT_FORM_EDIT)
  }

  return ( 
    <div className="product-details-wrapper">
      <AppHeader
      title="Beverage Product"
      smallHeader
      buttonText="Edit"
      showAddIcon
      buttonAction={formRedirect}
      customPrimaryButtonIcon={EditIcon}
      buttonType="default"
      additionalButtonText={(<div onClick={openProductInfoModal} className='product-message-icon icon-chat'></div> )}
      additionalButtonType='text'
    />
    <ProductSummary preview />

    <ProductInfoDrawer visible={true} />
    <ProductInfoModal visible={productInfoModal} closeModal={closeProductInfoModal}/>
    </div>

  
  )
}

export default ProductDetails