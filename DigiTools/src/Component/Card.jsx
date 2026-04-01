import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { toast } from 'react-toastify';

const Card = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    console.log(totalPrice)

    const handlePayment = () => {
        setCarts([])

        toast.success("Payment successful21")
    };
    

    const handleDelete = (item) =>{
        // console.log(item)
        const filteredArray = carts.filter(c => c.id !== item.id)
        console.log(filteredArray)
        setCarts(filteredArray);

        toast.success("Item deleted")
    }



    return (
        <div className=' p-10 border rounded-2xl ml-2 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>

            {
                carts.length === 0 ?
                    <div className="mt-6 bg-blue-100 rounded-2xl py-16 flex flex-col items-center justify-center text-center m-6">

                        {/* Icon */}
                        <FiShoppingCart className="text-5xl text-gray-500 mb-4" />

                        {/* Text */}
                        <p className="text-gray-600 text-xl font-semibold">
                            Your Cart is empty
                        </p>

                    </div>


                    :

                    <>
                        <div className='space-y-5 mt-4 bg-gray-100'>
                            {
                                carts.map(item =>
                                    <div className='flex items-center justify-between border rounded-lg p-3' key={item.id}>

                                        <div className='flex items-center gap-2'>
                                            <div className="pt-10 p-6 ">
                                                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center text-5xl shadow-inner">
                                                    {item.icon}
                                                </div>
                                            </div>


                                            <div className="text-xl font-bold">
                                                {item.name}
                                                <div className='text-gray-600 font-bold'>${item.price}/{item.period}</div>
                                            </div>
                                            
                                        </div>

                                       <div className='flex gap-10'>
                                         

                                        
                            <button onClick={()=> handleDelete(item)} className='btn rounded-full text-red-500'>Remove</button>
                                       </div>

                                    </div>
                                )
                            }
                        </div>

                        <div className='flex my-2  justify-between   p-5 rounded-lg text-3xl  font-bold'>
                            <div>Total:</div>
                            <div>${totalPrice}</div>

                        </div>

                        <div>
                            <button onClick={handlePayment} className='btn h-16 w-full mt-2 bg-red-500 text-white text-2xl rounded-lg'> Proceed to Checkout</button>
                        </div>

                    </>
            }


        </div>

    );
};

export default Card;