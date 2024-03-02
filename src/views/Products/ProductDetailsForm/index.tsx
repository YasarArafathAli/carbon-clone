import React, { useEffect, useState } from 'react';
import AppHeader from '../../../shared/components/AppHeader';
import { Col, Divider, Drawer, Form, Row} from 'antd';
import './styles.scss';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Formik, FormikValues } from 'formik';
import RawMaterial, { RawMaterialType } from './RawMaterialField';
import {
  EndMarketModel,
  MaterialsModel,
  ProductsModel,
} from '../../../models/Products/products.model';
import ProductFormHeader from './ProductFormHeader';
import TransportationField from './TransportationFIeld';
import EndMarketField from './EndMarketField';
import StepFlow from './StepFlow';
import ProductSummary from '../ProductSummary';
import ProductInfoDrawer from './ProductInfoDrawer';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../routes/routeConstants/appRoutes';

import {productDetails} from "../data";

type Props = {
  edit?: boolean;
};

const ProductDetailsForm = ({edit}: Props) => {

  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<MaterialsModel[]>(edit? productDetails.ingredients : []);
  const [primaryMaterials, setPrimaryMaterials] = useState<MaterialsModel[]>(
   edit? productDetails.primaryMaterial : []
  );

  const [formValues, setFormValues] = useState<ProductsModel>(
    edit ? (productDetails as ProductsModel) : new ProductsModel()
  );

  const [secondaryMaterials, setSecondaryMaterials] = useState<
    MaterialsModel[]
  >( edit? productDetails.secondaryMaterial : []);
  const [showInfoDrawer, setShowInfoDrawer] = useState(false);
 
  
  const [endMarkets, setEndMarkets] = useState<EndMarketModel[]>(edit?productDetails.endMarketLocation : []);
  const [fieldCount, setFieldCount] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    !ingredients.length && handleAddIngredient();
    !endMarkets.length && handleAddEndMarket();
  }, []);
  const handleAddIngredient = () => {
    const newIngredient = {
      ...new MaterialsModel(),
      id: fieldCount,
    } as MaterialsModel;
    setIngredients((prev) => [...prev, newIngredient]);
    setFieldCount((prev) => prev + 1);
  };

  const handleAddPrimaryMaterial = () => {
    const newMaterial = {
      ...new MaterialsModel(),
      id: fieldCount,
    } as MaterialsModel;
    setPrimaryMaterials((prev) => [...prev, newMaterial]);
    setFieldCount((prev) => prev + 1);
  };

  const handleAddEndMarket = () => {
    const newMarket = {
      ...new EndMarketModel(),
      id: fieldCount
    } as EndMarketModel;
    setEndMarkets(prev => [...prev, newMarket])
    setFieldCount((prev) => prev + 1);
  };

  const handleAddSecondaryMaterial = () => {
    const newMaterial = {
      ...new MaterialsModel(),
      id: fieldCount,
    } as MaterialsModel;
    setSecondaryMaterials((prev) => [...prev, newMaterial]);
    setFieldCount((prev) => prev + 1);
  };

 
  const submitForApproval = () => {
    navigate(AppRoutes.PRODUCT)    
  }


  const deleteField = (id: number, type: RawMaterialType) => () => {
    switch (type) {
      case RawMaterialType.INGREDIENT:
        ingredients.length > 1 &&
          setIngredients((prev) => prev.filter((ing) => ing.id !== id));
      case RawMaterialType.PRIMARY:
        setPrimaryMaterials((prev) => prev.filter((ing) => ing.id !== id));
      case RawMaterialType.SECONDARY:
        setSecondaryMaterials((prev) => prev.filter((ing) => ing.id !== id));
      case RawMaterialType.END_MARKET:
        setEndMarkets(prev => prev.filter((market) => market.id !== id))
    }
  };

  const toggleDrawer = () => setShowInfoDrawer(prev => !prev)

  const onSubmit = (values: FormikValues) => {
    nextFormSubmit()
  };
  const nextFormSubmit = () => {
    setActiveStep((prev) => prev + 1);
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const content = [
    {
      content: (
        <div className="form-step-wrapper">
          <Formik
            initialValues={formValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
          >
            {(form) => (
              <>
                <ProductFormHeader
                  title="1. Raw Material"
                  primaryButtonText="Next"
                  showHeaderAdditionalButtons
                  primarySubmitHandler={form.submitForm}
                  backButtonHandler={back}
                  handleAddIngredient={handleAddIngredient}
                  handleAddPrimaryMaterial={handleAddPrimaryMaterial}
                  handleAddSecondaryMaterial={handleAddSecondaryMaterial}
                />
                <Form>
                  <div className="form-sub-header">
                    <h5>Ingredients</h5>
                  </div>
                  {ingredients.map(
                    (ingredient, index) =>
                      ingredient.id && (
                        <RawMaterial
                          deleteHandler={deleteField(
                            ingredient.id,
                            RawMaterialType.INGREDIENT
                          )}
                          index={index}
                          form={form}
                          data={ingredient}
                        />
                      )
                  )}
                  {(!!primaryMaterials.length ||
                    !!secondaryMaterials.length) && (
                    <>
                      <Divider />
                      <div className="form-title">
                        <h4>Packing Material</h4>
                      </div>
                    </>
                  )}

                  {!!primaryMaterials.length && (
                    <div className="form-sub-header">
                      <h5>Primary Packing Material</h5>
                    </div>
                  )}
                  {primaryMaterials.map(
                    (material, index) =>
                      material.id && (
                        <RawMaterial
                          deleteHandler={deleteField(
                            material.id,
                            RawMaterialType.INGREDIENT
                          )}
                          index={index}
                          form={form}
                          data={material}
                          type={RawMaterialType.PRIMARY}
                        />
                      )
                  )}
                  {!!secondaryMaterials.length && (
                    <div className="form-sub-header">
                      <h5>Secondary Packing Material</h5>
                    </div>
                  )}
                  {secondaryMaterials.map(
                    (material, index) =>
                      material.id && (
                        <RawMaterial
                          deleteHandler={deleteField(
                            material.id,
                            RawMaterialType.INGREDIENT
                          )}
                          index={index}
                          form={form}
                          data={material}
                          type={RawMaterialType.SECONDARY}
                        />
                      )
                  )}
                </Form>
              </>
            )}
          </Formik>
        </div>
      ),
    },
    {
      content: (
        <div className="form-step-wrapper">
          <Formik
            initialValues={formValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
          >
            {(form) => (
              <Form>
                <ProductFormHeader
                  title="2. Raw Material Transportation"
                  primaryButtonText="Next"
                  showBackButton
                  primarySubmitHandler={form.submitForm}
                  backButtonHandler={back}
                />

                <div className="form-sub-header">
                  <h5>Ingredients</h5>
                </div>
                {ingredients.map(
                  (ingredient, index) =>
                    ingredient.id && (
                      <TransportationField
                        index={index}
                        form={form}
                        data={ingredient}
                      />
                    )
                )}
                {(!!primaryMaterials.length || !!secondaryMaterials.length) && (
                  <>
                    <Divider />
                    <div className="form-title">
                      <h4>Packing Material</h4>
                    </div>
                  </>
                )}

                {!!primaryMaterials.length && (
                  <div className="form-sub-header">
                    <h5>Primary Packing Material</h5>
                  </div>
                )}
                {primaryMaterials.map(
                  (material, index) =>
                    material.id && (
                      <TransportationField
                        index={index}
                        data={material}
                        form={form}
                        type={RawMaterialType.PRIMARY}
                      />
                    )
                )}
                {!!secondaryMaterials.length && (
                  <div className="form-sub-header">
                    <h5>Secondary Packing Material</h5>
                  </div>
                )}
                {secondaryMaterials.map(
                  (material, index) =>
                    material.id && (
                      <TransportationField
                        index={index}
                        data={material}
                        form={form}
                        type={RawMaterialType.SECONDARY}
                      />
                    )
                )}
              </Form>
            )}
          </Formik>
        </div>
      ),
    },
    {
      content: (
        <div className="form-step-wrapper">
          <Formik
            initialValues={formValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
          >
            {({ submitForm, values }) => (
              <Form>
                <ProductFormHeader
                  title="3. Processing Facility"
                  primaryButtonText="Next"
                  showBackButton
                  primarySubmitHandler={submitForm}
                  backButtonHandler={back}
                />
                <Row gutter={[32, 0]} className="form-actions">
                  <Col span={6}>
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      name="processingFacility.facilityName"
                      value={values.processingFacility?.facilityName}
                      placeholder="Processing Facility name"
                      title="Processing Facility name"
                    />
                  </Col>
                  <Col span={16}>
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      name="processingFacility.address"
                      placeholder="Street/Locality"
                      value={values.processingFacility?.address}
                      title="Processing Facility Address"
                    />
                  </Col>
                  <Col span={6}>
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      value={values.processingFacility?.scope1}
                      name="processingFacility.scope1"
                      placeholder="Scope 1 (tonnes CO2e)"
                      title="Processing Facility Scope 1 (tonnes CO2e)"
                    />
                  </Col>
                  <Col span={6}>
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      value={values.processingFacility?.scope2}
                      name="processingFacility.scope2"
                      placeholder=" Scope 2 (tonnes CO2e)"
                      title="Processing Facility Scope 2 (tonnes CO2e)"
                    />
                  </Col>
                  <Col span={6}>
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      value={values.processingFacility?.wasteCF}
                      name="processingFacility.wasteCF"
                      title="Waste Management CF (kg CO2e)"
                      placeholder="CF (kg CO2e)"
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      ),
    },
    {
      content: (
        <div className="form-step-wrapper">
          <Formik
            initialValues={formValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
          >
            {(form) => {
              const { submitForm, values } = form;
              return (
                <Form>
                  <ProductFormHeader
                    title="4. Product Distribution"
                    primaryButtonText="Next"
                    showBackButton
                    primarySubmitHandler={submitForm}
                    backButtonHandler={back}
                    showEndMarketButton
                    endMarketHandler={handleAddEndMarket}
                  />
                  <Row gutter={[32, 0]} className="form-actions">
                    <Col span={3}>
                      <InputField
                        type={INPUT_TYPE.TEXT}
                        name="productDistribution.goodsTransported"
                        placeholder=""
                        value={values.productDistribution?.goodsTransported}
                        title="Total goods transported"
                      />
                    </Col>
                    <Col span={3}>
                      <InputField
                        type={INPUT_TYPE.TEXT}
                        name="productDistribution.goodsStored"
                        value={values.productDistribution?.goodsStored}
                        placeholder=""
                        title="Goods stored in processing facility"
                      />
                    </Col>
                    <Col span={3}>
                      <InputField
                        type={INPUT_TYPE.TEXT}
                        name="productDistribution.goodsSoldOnline"
                        value={values.productDistribution?.goodsSoldOnline}
                        placeholder=""
                        title="Goods sold via online retail"
                      />
                    </Col>
                    <Col span={3}>
                      <InputField
                        type={INPUT_TYPE.TEXT}
                        name="productDistribution.goodsSoldOffline"
                        value={values.productDistribution?.goodsSoldOffline}
                        placeholder=""
                        title="Goods sold via offline retail"
                      />
                    </Col>

                    {endMarkets.map((endMarket, index) => (
                      <Col span={24}>
                        <EndMarketField form={form} index={index} data={endMarket} />
                      </Col>
                    ))}
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </div>
      ),
    },
    {
      content: (
        <ProductSummary back={back} submitForApproval={submitForApproval} />
      ),
    },
  ];
  return (
    <div className={`product-details-form-wrapper ${activeStep>=4 ? "final-step": "" }`}>
      <AppHeader
        title="New Product"
        smallHeader
        buttonText="Save as draft"
        additionalButtonText="Cancel"
        buttonType="default"
        additionalButtonType="link"
      />

      {content[activeStep].content}
      

    <ProductInfoDrawer visible={activeStep>3} />
      <Drawer
        height={showInfoDrawer? 600 : 150}
        width={900}
        closable={false}
        visible={activeStep<4}
        placement="bottom"
        zIndex={5}
        mask={false}
      >
        <div className="product-details-steps" onClick={toggleDrawer}>
        <StepFlow activeStep={activeStep} />
        </div>
        <Drawer
        height={600}
        className="product-details-steps"
        visible={showInfoDrawer}
        placement="bottom"
        zIndex={5}
        closable={false}
        onClose={toggleDrawer}
        keyboard
        mask={false}
      ></Drawer>
      </Drawer>
     
    </div>
  );
};

export default ProductDetailsForm;
