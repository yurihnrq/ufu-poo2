import { ICar } from '../cars/interfaces/ICar';

export class Sell {
  public static sellCar(car: ICar): void {
    console.log('Sould car is', car.description);
    console.log('Price:', car.price);
  }
}
