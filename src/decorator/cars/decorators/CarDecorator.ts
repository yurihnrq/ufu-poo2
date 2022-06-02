import { ICar } from '../interfaces/ICar';

// Decorador base
export abstract class CarDecorator implements ICar {
  protected car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  public get price(): number {
    // Chama responsabilidade do objeto a ser decorado.
    return this.car.price;
  }

  public set price(price: number) {
    this.car.price = price;
  }

  public get description(): string {
    return this.car.description;
  }

  public set description(description: string) {
    this.car.description = description;
  }
}
