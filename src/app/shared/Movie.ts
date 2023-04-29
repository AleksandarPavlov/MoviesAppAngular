export class Movie{
    constructor(
      public id: number,
      public name: String,
      public description: String,
      public category: String,
      public rating: number,
      public releaseDate: Date,
      public image: String,
  
    ){}
  }