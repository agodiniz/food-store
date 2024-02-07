export interface CheckStockInputDto {
  foodId: string;
}

export interface CheckStockOutputDto {
  foodId: string;
  stock: number;
}
