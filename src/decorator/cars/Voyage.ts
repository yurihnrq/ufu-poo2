import { ICar } from './interfaces/ICar';

// Componente de carro concreto
export class Voyage implements ICar {
  #price: number;
  #description: string;

  constructor(price: number, description: string) {
    this.#price = price;
    this.#description = description;
  }

  public get price(): number {
    return this.#price;
  }

  public get description(): string {
    return this.#description;
  }

  public set price(price: number) {
    this.#price = price;
  }

  public set description(description: string) {
    this.#description = description;
  }
}
