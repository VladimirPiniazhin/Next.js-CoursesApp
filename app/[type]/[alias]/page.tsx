import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { getProduct } from "@/api/product";
import { Metadata } from "next";

interface PageParams {
    alias: string;
    type: string;
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
    const resolvedParams = await params;
    const page = await getPage(resolvedParams.alias);
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

export default async function TopPage({ params }: { params: Promise<PageParams> }) {
    const resolvedParams = await params;
    const firstCategoryItem = firstLevelMenu.find(m => m.route === resolvedParams.type);
    if (!firstCategoryItem) {
        notFound();
    }
    
    try {
        const page = await getPage(resolvedParams.alias);
        
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
        console.error(error);
        notFound();
    }
}
