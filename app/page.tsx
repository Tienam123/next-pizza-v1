import Container from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import Filters from "@/components/shared/filters";
import ProductsGroupList from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className="my-10">
               <Title
                   text="Все пиццы"
                   size="lg"
                   className="font-extrabold mt-10"
               />
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/*Фильтрация*/}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title={'Пиццы'}
                                items={[
                                    {
                                        id: 11,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 1,
                                        items: [{price: 100}]
                                    },
                                    {
                                        id: 12,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 1}]
                                    },
                                    , {
                                        id: 13,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 41,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 51,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 16,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    }
                                ]}
                                categoryId={1}
                            />


                            <ProductsGroupList
                                title={'Комбо'}
                                items={[
                                    {
                                        id: 1,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 1,
                                        items: [{price: 100}]
                                    },
                                    {
                                        id: 2,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 1}]
                                    },
                                    , {
                                        id: 3,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 4,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 5,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 6,
                                        name: '',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    }
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
