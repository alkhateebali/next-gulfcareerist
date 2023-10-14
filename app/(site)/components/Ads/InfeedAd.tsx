
const InfeedAd = () => {
    const isProduction = process.env.NODE_ENV === "production";
  return (
    <>
    {
    isProduction &&
     <div className="w-full bg-base-100 border-b-1 border-default dark:border-default hover:cursor-pointer my-4">
    </div> 
    }
    </>
  )
}

export default InfeedAd