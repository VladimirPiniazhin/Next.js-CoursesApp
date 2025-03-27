import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { getProduct } from "@/api/product";

export async function generateStaticParams() {
    const result = [];

    for (const menuItem of firstLevelMenu) {
        const menu = await getMenu(menuItem.id);
        
        const paths = menu.flatMap(item => 
            item.pages.map(page => ({
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
                <PageComponent page={page} products={product} />
            </div>
        );
    } catch (error) {
        notFound();
    }
}
