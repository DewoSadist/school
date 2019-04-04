import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class StaticDataSource {
    private data: Product[];

    constructor() {
        this.data = [new Product(1, "HTML/HTML", "Web", 275),
            new Product(2, "CSS/SASS", "Web", 48.95),
            new Product(3, "Angularjs", "Web framework", 19.50),
            new Product(4, "Angular", "Web framework", 34.95),
            new Product(5, "Python", "China chert", 16)];
    }

    getData(): Product[] {
        return this.data;
    }
}
