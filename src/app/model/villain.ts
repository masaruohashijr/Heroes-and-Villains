export class Villain {
  public id!: number
    constructor(
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  }