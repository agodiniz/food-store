import DeliveryCatalogFacade from "../facade/delivery-catalog.facade";
import FoodRepository from "../repository/food.repository";
import FindAllFoodsUseCase from "../usecase/find-all-foods/find-all-foods.usecase";
import FindFoodUseCase from "../usecase/find-food/find-food.usecase";

export default class DeliveryCatalogFacadeFactory {
    static create(): DeliveryCatalogFacade {
        const foodRepository = new FoodRepository();
        const findUseCase = new FindFoodUseCase(foodRepository);
        const findAllUseCase = new FindAllFoodsUseCase(foodRepository);

        const facade = new DeliveryCatalogFacade({
            findUseCase,
            findAllUseCase,
        });
        return facade;
    }
}