import {serializable, alias, primitive, object, list} from 'serializr';


export class MetaModel{
  @serializable(alias('id', primitive()))
  id?: string | number;

  @serializable(alias('label', primitive()))
  label?: string | number;
}
export class TransportationModel{
  @serializable(alias('ingredientID', primitive()))
  ingredientId?: number;

  @serializable(alias('supplier', object(MetaModel)))
  supplier?: MetaModel;

  @serializable(alias('temperature', object(MetaModel)))
  temperature?: MetaModel;

  @serializable(alias('airTransport', primitive()))
  airTransport?: boolean;
}

export class MaterialsModel {
  @serializable(alias('name', primitive()))
  name?: string;

  @serializable(alias('origin', primitive()))
  origin?: string;

  @serializable(alias('region', primitive()))
  region?: string;

  @serializable(alias('id', primitive()))
  id?: number;

  @serializable(alias('quantity', primitive()))
  quantity?: number;

  @serializable(alias('unit', primitive()))
  unit?: string;

  @serializable(alias('noOfUnits', primitive()))
  noOfUnits?: number;

  @serializable(alias('transportation', object(TransportationModel)))
  transportation?: TransportationModel;
}

export class ProcessingFacilityModel{
  @serializable(alias('facilityName', primitive()))
  facilityName?: string;

  @serializable(alias('address', primitive()))
  address?: string;

  @serializable(alias('scope1', primitive()))
  scope1?: number;

  @serializable(alias('scope2', primitive()))
  scope2?: number;

  @serializable(alias('wasteCF', primitive()))
  wasteCF?: number;

  @serializable(alias('facilityId', primitive()))
  facilityId?: number;
}

export class ProductDistributionModel{
  @serializable(alias('goodsTransported', primitive()))
  goodsTransported?: number;

  @serializable(alias('goodsStored', primitive()))
  goodsStored?: number;

  @serializable(alias('goodsSoldOnline', primitive()))
  goodsSoldOnline?: number;

  @serializable(alias('goodsSoldOffline', primitive()))
  goodsSoldOffline?: number;
}

export class EndMarketModel {
  @serializable(alias('location', primitive()))
  location?: string;

  @serializable(alias('goods_sent', primitive()))
  goodsSent?: number;

  @serializable(alias('air_transport', primitive()))
  airTransport?: boolean;

  @serializable(alias('id', primitive()))
  id?: number;
}

export class ProductsModel {
  @serializable(alias('title', primitive()))
  title?: string;

  @serializable(alias('status', primitive()))
  status?: string;

  @serializable(alias('location', primitive()))
  location?: string;

  @serializable(alias('brand', primitive()))
  brand?: string;

  @serializable(alias('emission', primitive()))
  emission?: number;

  @serializable(alias('product_image', primitive()))
  productImage?: string;

  @serializable(alias('id', primitive()))
  id?: number;

  @serializable(alias('newWeight', primitive()))
  newWeight?: number;

  @serializable(alias('weightUnits', primitive()))
  weightUnits?: string;

  @serializable(alias('gross', primitive()))
  gross?: number;

  @serializable(alias('processingFacilitySale', primitive()))
  processingFacilitySale?: number;

  @serializable(alias('soldCost', primitive()))
  soldCost?: number;

  @serializable(alias('productionUnits', primitive()))
  productionUnits?: number;

  @serializable(alias('density', primitive()))
  density?: number;

  @serializable(alias('ingredients', list(object(MaterialsModel))))
  ingredients?: MaterialsModel[];

  @serializable(alias('primaryMaterial', list(object(MaterialsModel))))
  primaryMaterial?: MaterialsModel[];

  @serializable(alias('secondaryMaterial', list(object(MaterialsModel))))
  secondaryMaterial?: MaterialsModel[];

  @serializable(alias('processingFacility', object(ProcessingFacilityModel)))
  processingFacility?: ProcessingFacilityModel;

  @serializable(alias('productDistribution', object(ProductDistributionModel)))
  productDistribution?: ProductDistributionModel;

  @serializable(alias('endMarketLocation', list(object(EndMarketModel))))
  endMarketLocation?: EndMarketModel[];
}

