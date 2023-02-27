import { createReducer, on } from "@ngrx/store";
import { ProductApiAction } from "../action/product.action";
import { product } from "src/app/model/product.model";

export const initialState: ReadonlyArray<product> = [{
    id: "1",
    productName: "Realme",
    price: 339423

},{
    id:"2",
    productName:"Xiomi",
    price:9999
},
{
    id:"3",
    productName:"Samsung",
    price:12999
},
{
    id:"4",
    productName:"Nokia",
    price:10000
}];

export const productReducer = createReducer(
    initialState,
    on(ProductApiAction.retreivedProductList, (_state, { products }) => products)
)