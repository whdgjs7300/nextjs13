import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";


type Props = {
    params : {
        slug : string;
    }
}


export default function PantsPage({params : {slug}} : Props) {
    const product = getProduct(slug);
    if(!product) {
        notFound();
    }

    // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
    return <h1>{product} 페이지</h1>
}

// SEO 최적화
export function generateMetadata({params} : Props) {
    return {
        title : `제품의 이름 : ${params.slug}`
    }
}


export function generateStaticParams() {
    // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
    const products = getProducts();
    return products.map(product => ({
        slug : product,
    }))
}