export class Product {
  id: number;
  name: string;
  description: string;
  image: string;
  formattedPrice: string;
  isLoading?: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.formattedPrice = data.formattedPrice;
  }
}