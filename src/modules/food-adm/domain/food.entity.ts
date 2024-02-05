import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";

type FoodProps = {
  id?: Id;
  name: string;
  purchasePrice: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export default class Food extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _purchasePrice: number;
  private _stock: number;

  constructor(props: FoodProps) {
    super(props.id);
    this._name = props.name;
    this._purchasePrice = props.purchasePrice;
    this._stock = props.stock;
  }

  get name(): string {
    return this._name;
  }

  get purchasePrice(): number {
    return this._purchasePrice;
  }

  get stock(): number {
    return this._stock;
  }

  set name(name: string) {
    this._name = name;
  }

  set purchasePrice(purchasePrice: number) {
    this._purchasePrice = purchasePrice;
  }

  set stock(stock: number) {
    this._stock = stock;
  }
}
