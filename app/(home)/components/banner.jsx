import Image from "next/image"
import Button from "./button"


const Banner = () => {
  return (
    <div className="h-[550px] w-full items-center flex px-[6%] py-10 bg-white">
        <div className="flex-1 flex-col gap-4 flex">
            <h1 className=" text-3xl font-semibold">Upskilling Made<span className="text-orange-600">{` <PRACTICAL>`}</span></h1>
            <p>Where coding brilliance meets expert guidance. From novice to expert, our platform offers personalized coaching and comprehensive courses to elevate your coding skills. Join a vibrant community and unlock your coding potential today.</p>
            <div className="self-start">
                <Button label="join Now"/>
            </div>
            
        </div>
        <div className="flex justify-end flex-1">
            <Image width={550} height={550} src='/image.png' />
        </div>
    </div>
  )
}

export default Banner