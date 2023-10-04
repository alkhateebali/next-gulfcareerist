import { useRouter } from "next/navigation"


const JobCard = () => {
    const router =useRouter()
  return (
    <>
    {/* use client */}
    <button  onClick={()=>router.push('')} ></button>
    </>
  )
}

export default JobCard