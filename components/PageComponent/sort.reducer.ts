import { ProductModel } from "@/interfaces/product.interface";
import { SortEnum } from "../Sort/Sort.props";

export type SortActions = {type:SortEnum.Rating} | {type: SortEnum.Price} | {type: 'reset', initialState: ProductModel[]} | {type: SortEnum.None}

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => (a.reviewAvg || a.initialRating) > (b.reviewAvg || b.initialRating) ? -1 : 1)
                // products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            }
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            }
        case SortEnum.None:
            
            return {
                sort: SortEnum.None,
                products: state.products
            }
        case 'reset':
            return {
                sort: SortEnum.None,
                products: action.initialState
            }
        default:
            throw new Error('Неверный тип сортировки')
    }
}

