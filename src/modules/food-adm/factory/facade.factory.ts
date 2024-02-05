import FoodAdmFacade from "../facade/food-adm.facade";
import FoodRepository from "../repository/food.repository";
import AddFoodUseCase from "../usecase/add-food/add-food.usecase";

export default class FoodAdmFacadeFactory {
  static create() {
    const foodRepository = new FoodRepository();
    const addFoodUseCase = new AddFoodUseCase(foodRepository);
    const foodFacade = new FoodAdmFacade({
      addUseCase: addFoodUseCase,
      stockUseCase: undefined,
    });
    return foodFacade;
  }
}
