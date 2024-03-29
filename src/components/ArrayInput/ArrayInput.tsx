import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
// import "./ArrayInput.css";
import { useDispatch, useSelector } from "react-redux";
import { setArr } from "../../features/sortingSlice";
import {
  arrGenerator,
} from "../../features/sortingSlice";
const ArrayInput = () => {
  const dispatch = useDispatch();
  const { arr, isDisabled } = useSelector((state) => {
    return state.sortingView;
  });
  const [inputArr, setinputArr] = useState("");
  useEffect(() => {
    let tempIntputArr = "";
    arr.forEach((element) => {
      tempIntputArr += `${element.value},`;
    });
    setinputArr(tempIntputArr);
  }, [arr]);
  const inputChangeHandler = (e) => {
    setinputArr(e.target.value);
  };
  const inputChangeBtnHandler = () => {
    let tempArr = inputArr.slice(0, inputArr.length).split(",");
    tempArr = tempArr.filter((element) => {
      console.log(
        element,
        Number.isInteger(parseInt(element)),
        parseInt(element)
      );
      return Number.isInteger(parseInt(element));
    });
    tempArr.map((element, index) => {
      return (tempArr[index] = parseInt(element));
    });
    console.log(tempArr);
    dispatch(setArr(tempArr));
  };
  return (
    <div className="array-input-container flex flex-col justify-center space-y-4">
      <label className="array-input-label" htmlFor="array-input">
        Custom Array
      </label>
      <textarea
        rows="3"
        value={inputArr}
        placeholder="Custom Array"
        id="array-input"
        className="array-input"
        onChange={inputChangeHandler}
      />
      <div>
      <Button 
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white" }}
        onClick={inputChangeBtnHandler}
        className="input-array-btn w-1/2"
        variant="contained"
        color="primary"
      >
        Generate
      </Button>
      <Button 
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white" }}
        onClick={()=>dispatch(arrGenerator())}
        className="input-array-btn w-1/2"
        variant="contained"
        color="primary"
      >
        Random Array
      </Button>
      </div>
    </div>
  );
};

export default ArrayInput;