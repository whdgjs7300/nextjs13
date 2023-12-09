import { notFound } from "next/navigation";


type Props = {
    params : {
        slug : string;
    }
}


export default function PantsPage({params} : Props) {
    if(params.slug === 'nothing') {
        notFound();
    }
    return <h1>{params.slug} 페이지</h1>
}

// SEO 최적화
export function generateMetadata({params} : Props) {
    return {
        title : `제품의 이름 : ${params.slug}`
    }
}


export function generateStaticParams() {
    const products = ['pants','skirt'];
    return products.map(product => ({
        slug : product,
    }))
}