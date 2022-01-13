import { Power } from "./power";

export class Villain {
  public id!: number
    constructor(
      public name: string,
      public alterEgo?: string,
      public powerId: number = 0,
      public power?: Power,
    ) {  }
  }