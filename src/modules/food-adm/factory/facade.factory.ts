import FoodAdmFacade from "../facade/food-adm.facade";
import FoodRepository from "../repository/food.repository";
import AddFoodUseCase from "../usecase/add-food/add-food.usecase";
import CheckStockUseCase from "../usecase/check-stock/check-stock.usecase";

export default class FoodAdmFacadeFactory {
  static create() {
    const foodRepository = new FoodRepository();
    const addFoodUseCase = new AddFoodUseCase(foodRepository);
    const checkStockUseCase = new CheckStockUseCase(foodRepository);
    const foodFacade = new FoodAdmFacade({
      addUseCase: addFoodUseCase,
      stockUseCase: checkStockUseCase,
    });
    return foodFacade;
  }
}
