// API 파일모음집 !

import path from "path";
import { promises as fs} from "fs";

export type Product = {
    id : string,
    name : string,
    price : number;
}

export async function getProducts() : Promise<Product[]> {
    // data 경로의 json 파일 불러오기
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(data);
}

export async function getProduct(id : string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find(item => item.id === id);
}