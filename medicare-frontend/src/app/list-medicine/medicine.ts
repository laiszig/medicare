import { Category } from "../sort-category/category";
import { Company } from "../sort-company/company";

export class Medicine {
    
    id: number;
    name: string;
    company: Company;
    category: Category;
    description: string;
    price: number;

}