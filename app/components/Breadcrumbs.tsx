import Link from "next/link"
interface Props{
    currentRoute:string
}
const Breadcrumbs = ({currentRoute}:Props) => {
  return (
    <div className="text-sm breadcrumbs py-4">
    <ul>
      <li><Link href={'/'}>Home</Link></li> 
      <li><b>{currentRoute}</b></li> 
    </ul>
  </div>
  )
}

export default Breadcrumbs