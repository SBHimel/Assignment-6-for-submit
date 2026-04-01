import React, { use } from 'react';
import ChildProduct from './ChildProduct';

const Products = ({ cardsPromise, carts, setCarts }) => {
    const cards = use(cardsPromise)
    // console.log(cards)

    

    return (
        <div>
            

            {/* Map use kora hoyeche ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 py-22 max-w-7xl mx-auto">
                {

                    cards.map((card) => (
                        <ChildProduct key={card.id} card={card}   carts={carts}  setCarts={setCarts}></ChildProduct>
                    ))
                }

            </div>
        </div>
    );
};

export default Products;