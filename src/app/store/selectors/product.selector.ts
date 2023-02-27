import { createSelector, createFeatureSelector } from "@ngrx/store";
import { product } from "src/app/model/product.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<product>>('products');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection')

export const selectProductCollection = createSelector(selectProducts, selectCollectionState,
    (product, collection) => {
        return collection.map((id) => product.find((book) => book.id === id)!);
    })