import { Spinner } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <>
    <div className="bg-black h-full w-full opacity-80 z-50 absolute flex justify-center items-center ">
        <div className="bg-secondary text-gray-300 flex m-auto flex-col w-[13rem] h-[5rem] rounded-md text-center items-center gap-5" >
            Procesando pago...
            <Spinner className="h-15 w-12"color="amber" />
        </div>
    </div>
    </>
  )
}