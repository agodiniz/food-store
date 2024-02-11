export interface FindDeliveryCatalogFacadeInputDto {
  id: string;
}

export interface FindDeliveryCatalogFacadeOutputDto {
  id: string;
  name: string;
  salesPrice: number;
}

export interface FindAllDeliveryCatalogFacadeOutputDto {
  foods: {
    id: string;
    name: string;
    salesPrice: number;
  }[];
}
