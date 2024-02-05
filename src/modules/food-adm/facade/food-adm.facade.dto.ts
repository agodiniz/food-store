export interface AddFoodFacadeInputDto {
  id?: string;
  name: string;
  purchasePrice: number;
  stock: number;
}

export interface CheckStockFacadeInputDto {
    foodId: string;
}

export interface CheckStockFacadeOutputDto {
    foodId: string;
    stock: number;
}
