import arrGenerate from "@/components/arrGenerate/arrGenerate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortingState {
  arr: { value: number; id: number }[];
  speed: number;
  size: number;
  isDisabled: boolean;
  algo: number;
}

const initialState: SortingState = {
  arr: [],
  speed: 500,
  size: 15,
  isDisabled: false,
  algo: 0,
};

export const sortingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        speed: action.payload,
      };
    },
    setSize: (state, action: PayloadAction<number>) => {
      const tempArr = arrGenerate(action.payload);
      return state.size !== action.payload
        ? {
            ...state,
            arr: tempArr,
            size: action.payload,
          }
        : { ...state };
    },
    arrGenerator: (state) => {
      const tempArr = arrGenerate(state.size);
      return {
        ...state,
        arr: tempArr,
      };
    },
    setArr: (state, action: PayloadAction<number[]>) => {
      const tempArr: SortingState['arr'] = action.payload.map((value, i) => ({
        value,
        id: i + 1,
      }));

      for (let i = 0; i < action.payload.length; i++) {
        const element = document.querySelector(`#id${i + 1}`);
        if (element) {
          element.style.transform = `translate(${
            (600 / action.payload.length + 5) * i
          }px, ${0}px)`;
          element.classList.remove("green");
          element.classList.remove("yellow");
          element.classList.remove("red");
          element.classList.remove("blue");
        }
      }

      return {
        ...state,
        size: action.payload.length,
        arr: tempArr,
      };
    },
    setIsDisabled: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isDisabled: action.payload,
      };
    },
    setAlgo: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        algo: action.payload,
      };
    },
  },
});

export const {
  setSpeed,
  setSize,
  setArr,
  setIsDisabled,
  setAlgo,
  arrGenerator,
} = sortingSlice.actions;

export default sortingSlice.reducer;
