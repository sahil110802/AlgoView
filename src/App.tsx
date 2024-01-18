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
    <div className='w-1/5 p-4'>
      <h1>Speed</h1>
    <Slider className='p-4' defaultValue={[5]} max={100} step={1} />
      <h1>Size</h1>
    
    <Slider className='p-4' defaultValue={[5]} max={100} step={1} />

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