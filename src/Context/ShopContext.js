import React,{createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext =createContext(null)


    const getDefaultCart = ()=>{
        let cart={}
        for (let index = 0; index < all_product.length; index++) {
             cart[index] =0;

        }
       // console.log(cart)
        return cart
       }
const ShopContextProvider = (props)=>{
   
   const [cartItem , setCartItem] = useState(getDefaultCart());
   const addTocart = (itemId)=>{
   setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}));
   console.log(cartItem);
   }
   const removTocart = (itemId)=>{
    setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}));
    console.log(cartItem)
    }
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const it in cartItem) { 
            console.log(cartItem[it],"sdf") 
            if(cartItem[it] > 0){
                let itemInfo = all_product.find((product)=>{
                   return product.id===Number(it)
                });
                totalAmount += itemInfo.new_price *cartItem[it]
               
            }
          //  console.log(totalAmount,cartItem[it],cartItem[it].new_price,"fd")
           
        }
        return totalAmount;
    }
    const getTotalCartItems = ()=>{
        let totalCartItems = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                totalCartItems += cartItem[item]
            }
           
        }
        return totalCartItems
    }
    const contextValue = {getTotalCartItems, all_product, cartItem, addTocart, removTocart, getTotalCartAmount }
 
    return (
    <ShopContext.Provider value={contextValue }>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider