"use client"
import {Title} from "@/components/shared/title";
import {useEffect, useRef} from "react";
import {useIntersection} from "react-use";
import {cn} from "@/lib/utils";

import ProductCard from "@/components/shared/product-card";
import {useCategoryStore} from "@/storage/category";

export interface ProductsGroupListProps {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
                                                                 items,
                                                                 title,
                                                                 className,
                                                                 listClassName,
                                                                 categoryId
                                                             }) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.6,
    });


    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div
            className={className}
            id={title}
            ref={intersectionRef}
        >
            <Title
                text={title}
                size="lg"
                className="font-extrabold mb-5"
            />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items
                    .map((product, i) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.items[0].price}
                            imageUrl={product.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsGroupList;