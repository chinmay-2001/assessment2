import {createActionGroup, props} from '@ngrx/store'
import { product } from '../../model/product.model'

export const ProductAction=createActionGroup({
    source:'products',
    events:{
        'Add product':props<{productId:string}>(),
        'Remove product':props<{productId:string}>(),
    },
})

export const ProductApiAction=createActionGroup({
    source:'Product API',
    events:{
        'Retreived product List':props<{products:ReadonlyArray<product>}>(),
    }
})