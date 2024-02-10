export interface FindAllFoodsDto {
  foods: {
    id: string;
    name: string;
    salesPrice: number;
  }[];
}
