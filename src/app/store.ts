import sortingSlice from '@/features/sortingSlice'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer:{
        sortingView:sortingSlice,
    }
})