import { getPage } from "@/api/page";
import { Htag } from "@/components/Htag/Htag";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";

export const metadata: Metadata = {
    title: 'Product',
    description: 'Product page',
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProduct({ params }: { params: { alias: string } }) {
    const page = await getPage(params.alias);
    if (!page) {
        return notFound();
    }
    return (
    <div>
        <Htag tag="h1">{page.title}</Htag>
    </div>);
}
