'use client';
import { ReactNode, useReducer, useEffect } from "react";
import { Htag } from "../Htag/Htag";
import styles from "./PageComponent.module.css";
import { PageComponentProps } from "./PageComponent.props";
import { Tag } from "../Tag/Tag";
import { HhData } from "../HhData/HhData";
import { Advantages } from "../Advantages/Advantages";
import { Sort, SortEnum } from "../Sort/Sort";
import { sortReducer } from "./sort.reducer";
import { Product } from "../Product/Product";
//import { useScrollY } from "@/hooks/useScrollY";

export const PageComponent =({page, products}: PageComponentProps): ReactNode => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, { products: products, sort: SortEnum.None});

    //const scrollY = useScrollY();
    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    }
    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Htag tag="h1">{page.title}</Htag>
                    <Tag color="grey" size="medium">{page.category.length}</Tag>
                    <Sort sort={sort} setSort={setSort}/>
                </div>
                <div className={styles.products}>
                    {sortedProducts && sortedProducts.map(p => (
                        <Product 
                            product={p} 
                            key={p._id}
                        />))}
                </div>               
                <div className={styles.hhtitle}>
                    <Htag tag="h2">Вакансии - {page.category}</Htag>
                    <Tag color="red" size="medium">hh.ru</Tag>
                </div>
                {page.hh && <HhData color="white" {...page.hh}/>}

                {page.advantages && page.advantages.length > 0 && 
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages}/>
                </>}
                {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
                <Htag tag="h2">Получаемые навыки</Htag>
                {page.tags.map(t => <Tag color="primary" key={t}>{t}</Tag>)}
            </div>
        </>
    )
}