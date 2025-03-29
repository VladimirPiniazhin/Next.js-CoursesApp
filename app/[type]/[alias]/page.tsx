import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { getProduct } from "@/api/product";
import { Metadata } from "next";



export async function generateMetadata({ params }: { params: { alias: string, type: string } }): Promise<Metadata> {
    const page = await getPage(params.alias);
    return {
        title: page?.metaTitle,
        description: page?.metaDescription
    }
}


export async function generateStaticParams() {
    const result = [];

    for (const menuItem of firstLevelMenu) {
        const menu = await getMenu(menuItem.id);
        
        const paths = menu.flatMap(item => item.pages.map(page => ({
                type: menuItem.route,
                alias: page.alias
            }))
        );
        
        result.push(...paths);
    }
    
    return result;
}

export default async function Page({ params }: { params: { alias: string, type: string } }) {
    const resolvedParams = await params;
    const { alias, type } = resolvedParams;
    
    try {
        const page = await getPage(alias);
        
        if (!page) {
            notFound();
        }

        const product = await getProduct(page.category);
        return (
            <div>
                {product && <PageComponent page={page} products={product} />}
            </div>
        );
    } catch (error) {
        notFound();
    }
}
