import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setSpeed,setSize } from '@/features/sortingSlice';

export default function SliderSizes() {
  const { isDisabled, size, speed } = useSelector((state) => {
    return state.sortingView;
  });
  const dispatch=useDispatch();
  return (
    <Box sx={{ width: 100 }}>
      <h1>Speed</h1>
      <Slider
        defaultValue={70}
        min={100} max={1500}
        aria-label="Small"
        valueLabelDisplay="auto"
        disabled={isDisabled}
        value={1500-speed}
        onChange={(e) => {
            dispatch(setSpeed(1501 - e.target.value));
          }}
      />
      <h1>Size</h1>
      <Slider
          size="large"
          defaultValue={30}
          max={50}
          min={5}
          aria-label="large"
          valueLabelDisplay="auto"
          disabled={isDisabled}
          value={size}
          onChange={(e) => {
            dispatch(setSize(e.target.value));
            document.querySelector(".container").style.width =
              100 / e.target.value + 5 * e.target.value + 500 + "px";
          }}
        />
    </Box>
  );
}
