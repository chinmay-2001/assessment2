import { createReducer,on } from "@ngrx/store";
import { ProductAction } from "../action/product.action";

export const initialState: ReadonlyArray<string> =[];

export const collectionReducer=createReducer(
    initialState,
    on(ProductAction.removeProduct,(state,{productId})=>
        state.filter((id)=>id != productId)),
    on(ProductAction.addProduct,(state,{productId})=>{
        if(state.indexOf(productId)> -1)return state;
        return [...state,productId]
    }
    )
)