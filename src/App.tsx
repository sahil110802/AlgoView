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
import { arrGenerator } from './features/sortingSlice'
import { useEffect } from 'react'
import Body from './components/Body/Body'



const App = () => {
  const dispatch = useDispatch();
  const { size, arr, speed } = useSelector((state) => {
    return state.sortingView;
  });
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
      <div className='w-1/4 p-4'>
       <Sliders/>

    </div>
    <div className='p-4'>
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Algo" />
  </SelectTrigger>
  <SelectContent>
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