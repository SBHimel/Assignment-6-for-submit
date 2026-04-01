import React from 'react';

const Card = ({carts}) => {
    console.log(carts)
    return (
        <div className='bg-red-500 p-10'>
            {
                carts.map(item => 
                    <div className='flex items-center justify-between' key={item.id}>
                        
                        <div>
                            <img className='h-20 w-20 object-contain' src={item.icon} alt="" />
                        </div>

                        <div>
                            <h2 className='text-xl font-bold'>{item.name}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Card;