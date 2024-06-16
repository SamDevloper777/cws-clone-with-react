import Link from "next/link"
import Button from "./button"

const Logo = () =>
    {
        return(
            <div className="flex border border-black ">
                <div className="bg-black text-white px-2 py-1 md:px-4 md:py-2 flex items-center">
                  <span className="font-bold text-sm md:text-lg text-nowrap">Code with</span>
                </div>
                <div className="bg-white text-black px-2 py-1 md:px-4 md:py-2">
                  <span className="font-bold text-sm md:text-lg">SadiQ</span>
               </div>               
           </div>
        )
    }


const Search =() =>{
    return(
        <div className="flex items-center text-center text-xl border rounded md">
           <form action="">
            <input className="px-3 py-2 w-full" type="search" value="search" />
           </form>
        </div>
    )
}
const Links = () =>{
    return(
        <div className="flex gap-3 items-center ">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Button label="login"/>
            <Link href="#">Register</Link>

        </div>
    )
}


const Header = () => {
  return (
    <div className="flex flex-1 bg-white px-[6%] py-2 justify-between">
        <Logo/>
        <Search/>
        <Links/>
    </div>
  )
}

export default Header