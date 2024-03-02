import React, { useState } from 'react'
import AppHeader from '../../shared/components/AppHeader'
import ProductList from './ProductList'
import { ProductsModel } from '../../models/Products/products.model'
import { brandData, productData } from './data'
import BrandList from './BrandList'
import ProductForm from './ProductForm'
import BrandForm from './BrandForm'
import AppTabs from '../../shared/components/AppTabs'


type Props = {}


export enum ProductTab {
  PRODUCT= "product",
  REVIEW = "review",
  VERIFIED = "verified",
  DRAFT= "draft",
  DECLINED= "declined",
  BRANDS ="brands"
}
const tabItems = [
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-product_def' /> All Products</span>,
    id: ProductTab.PRODUCT,
    children: <ProductList type={ProductTab.PRODUCT} data={productData as ProductsModel[]}/>,
  },
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-search' /> In Review</span>,
    id: ProductTab.REVIEW,
    children: <ProductList type={ProductTab.REVIEW} data={productData as ProductsModel[]} extendedCard/>,
  },
  {
    tab: <span className='tab-title'><span className='tab-icon icon-verified' /> Verified</span>,
    id: ProductTab.VERIFIED,
    children: <ProductList type={ProductTab.VERIFIED} data={productData as ProductsModel[]} extendedCard/>,
  },
  {
    tab: <span className='tab-title'><span className='tab-icon icon-draft' /> Draft</span>,
    id: ProductTab.DRAFT,
    children: <ProductList type={ProductTab.DRAFT} data={productData as ProductsModel[]}/>,
  },
  {
    tab: <span className='tab-title'><span className='tab-icon icon-declined' /> Declined</span>,
    id: ProductTab.DECLINED,
    children: <ProductList type={ProductTab.DECLINED} data={productData as ProductsModel[]} extendedCard/>,
  },
  {
    tab:  <span className='tab-title'><span className='tab-icon icon-brand' /> Brand</span>,
    id: ProductTab.BRANDS,
    children: <BrandList data={brandData} />,
  },
]


const Products = (props: Props) => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [activeKey, setActiveKey] = useState("product")
  const handleAddProduct = () => {
    setShowProductForm(true);
  }

  const handleAddBrand = () => setShowBrandForm(true)
  const closeFormModal =() => {
    setShowProductForm(false);
    setShowBrandForm(false);
  }

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  }
  return (
    <div className='products-wrapper'>
      <AppHeader title="Product" showAddIcon smallHeader buttonText={`New ${activeKey!=="brands"?'Product': 'Brand'}`} buttonAction={activeKey!=="brands"? handleAddProduct: handleAddBrand}/>
      <div>
        <AppTabs handleTabChange={handleTabChange} activeKey={activeKey} tabItems={tabItems} />
      </div>
      <ProductForm visible={showProductForm}  closeForm={closeFormModal}/>
      <BrandForm visible={showBrandForm}  closeForm={closeFormModal}/>
    </div>
  )
}

export default Products