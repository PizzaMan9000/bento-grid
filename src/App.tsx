import { BorderBeam } from "./components/magicui/border-beam"

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-950">
      <div className="grid w-full h-screen grid-cols-10 grid-rows-6 gap-4 p-6">
        <div className="col-span-3 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>

        <div className="col-span-3 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        
        <div className="col-span-4 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-3 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-1 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
        <div className="col-span-3 row-span-2 rounded-3xl relative bg-gray-800 flex justify-center items-center">
          <BorderBeam />
        </div>
      </div>
    </div>
  )
}

export default App