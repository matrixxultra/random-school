import { createContext } from "react"
import { products } from "./data"

const CardContext = createContext()



function CardReducer(state, action) {
    switch (action.type) {
        case 'Ajouter':

            {
                const item1 = state.panier.find(i => i.id == action.payload.id)


                if (!item1) {
                    return { ...state, panier: [...state.panier, { ...action.payload, quantity: 1 }] }

                }
                else {
                    return state

                }
            }

        case 'Increment':

            //console.log(state.panier);

            return {
                ...state,
                panier: state.panier.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item)
             }







        case 'Decrement':
            
            return {
                ...state,
                panier: state.panier.map(item => 
                  item.id === action.payload.id 
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item 
                ).filter(item => item.quantity > 0) // 
              };

            /*
            const item = state.panier.find(i => i.id == action.payload.id)
           
             console.log(state.panier);
             
            if (item.quantity == 1) {
               
                return { ...state, panier: state.panier.filter(i => i.id != action.payload.id) }
            }
            else {
                return {
                    ...state,
                    panier: state.panier.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item)
                 }

            }*/
        default:
            return state
    }
}
export { CardReducer }
export default CardContext