import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from './page.module.css';
import MeowArticle from "@/components/MeowArticle";
// ISR로 변경하기 !!
// export const revalidate = 3;

export default async function ProductsPage() {

    // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();
    
    
    return <div>
        <>
            <h1>제품 소개 페이지</h1>
            <ul>
                {
                    products.map(({id, name}, index)=> <li key={index}>
                        <Link href={`products/${id}`}>{name}</Link>
                    </li>)
                }
            </ul>
            <MeowArticle />
        </>
            
        
    </div>
        
}