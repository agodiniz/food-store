import {
  FindAllDeliveryCatalogFacadeOutputDto,
  FindDeliveryCatalogFacadeInputDto,
  FindDeliveryCatalogFacadeOutputDto,
} from "./delivery-catalog.facade.dto";

export default interface DeliveryCatalogFacadeInterface {
  find(
    id: FindDeliveryCatalogFacadeInputDto
  ): Promise<FindDeliveryCatalogFacadeOutputDto>;
  findAll(): Promise<FindAllDeliveryCatalogFacadeOutputDto>;
}
