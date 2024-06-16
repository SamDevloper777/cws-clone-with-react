import Link from "next/link"


const Button = ({label}) => {
  return (
    <Link href="#" className="border bg-black border-slate-600 text-slate-200  px-3 py-2 rounded-lg">{label}</Link>
  )
}

export default Button