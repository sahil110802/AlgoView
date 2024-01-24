import { Button } from './components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Sliders from './components/Sliders/Sliders'
import ArrayInput from './components/ArrayInput/ArrayInput'
import { useDispatch, useSelector } from 'react-redux'
import { arrGenerator, setArr, setIsDisabled } from './features/sortingSlice'
import { useEffect } from 'react'
import Body from './components/Body/Body'
import InsertionSort from './components/Algos/Insertion'



const App = () => {
  const dispatch = useDispatch();
  const { arr, speed, isDisabled, algo } = useSelector((state) => {
    return state.sortingView;
  });


  const handleClick = async () => {
    setIsDisabled(true);
    algo === 0 && (await InsertionSort([...arr], speed, setDisabled));
    // algo === 1 && (await BubbleSort([...arr], speed, setDisabled));
    // algo === 2 && (await Selection_sort([...arr], speed, setDisabled));
    // algo === 3 && (await Merge_sort([...arr], speed, setDisabled));
    // algo === 4 && (await Quick_sort([...arr], speed, setDisabled, pivot));
    const arrCopy = [...arr];
    const tempArr = [];
    arrCopy.forEach((element) => {
      tempArr.push(element.value);
    });
    tempArr.sort();
    console.log(tempArr);
    dispatch(setArr(tempArr));
  };
  
  useEffect(() => {
    dispatch(arrGenerator());
  }, []);
  return (
    <div className='font-serif font-extrabold'>
      <Body/>
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className='justify-center'>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
  <div className='flex flex-row justify-around'>
    <div className='flex flex-row m-3 w-1/2'>
      <div className='w-1/5 p-4'>
       <Sliders/>

    </div>
    <div className='p-4'>
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Algo" />
  </SelectTrigger>
  <SelectContent
  style={{
              color: isDisabled ? "white" : "black",
              border: isDisabled && "1px solid white",
            }}
            onClick={handleClick}
            disabled={isDisabled}
  >
    <SelectItem value="insertion">Insertion</SelectItem>
    <SelectItem value="bubble">Bubble</SelectItem>
    <SelectItem value="merge">Merge</SelectItem>
    <SelectItem value="selection">Selection</SelectItem>
    <SelectItem value="quick">Quick</SelectItem>

  </SelectContent>
</Select>
    </div>
    </div>

    <div className='w-1/3'>
      <ArrayInput/>
    </div>
</div>

    <DrawerFooter>
      <DrawerClose>
      <Button>Submit</Button>
      </DrawerClose>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  )
}

export default App