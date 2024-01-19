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

import { Slider } from './components/ui/slider'



const App = () => {
  return (
    <div>
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
       <h1>Speed</h1>
    <Slider className='p-4' defaultValue={[500]} min={50} max={1200} step={1} />
      <h1>Size</h1>
    
    <Slider className='p-4' defaultValue={[10]} min={4} max={40} step={1} />

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

    <div className=''>
      <textarea>
        
      </textarea>
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