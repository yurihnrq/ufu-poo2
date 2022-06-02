import { ICar } from '../interfaces/ICar';
import { CarDecorator } from './CarDecorator';

export class MultimediaDecorator extends CarDecorator {
  constructor(car: ICar) {
    super(car);
  }

  public get price(): number {
    return this.car.price + 2000;
  }

  public get description(): string {
    return this.car.description + ' with multimedia';
  }
}
