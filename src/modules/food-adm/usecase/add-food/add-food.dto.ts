export interface AddFoodInputDto {
  id?: string;
  name: string;
  purchasePrice: number;
  stock: number;
}

export interface AddFoodOutputDto {
  id: string;
  name: string;
  purchasePrice: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
