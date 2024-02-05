import {
  AddFoodFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
} from "./food-adm.facade.dto";

export default interface FoodAdmFacadeInterface {
  addFood(input: AddFoodFacadeInputDto): Promise<void>;
  checkStock(
    input: CheckStockFacadeInputDto
  ): Promise<CheckStockFacadeOutputDto>;
}
