import Script from "next/script"
const DisplayAd = () => {
    const isProduction = process.env.NODE_ENV === 'production';
  return (
    <>
        {   isProduction && <> <Script id="display-ad-1" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1857873264627766"
     crossOrigin="anonymous"></Script>
<ins className="adsbygoogle block"
     data-ad-client="ca-pub-1857873264627766"
     data-ad-slot="4875648738"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<Script id="display-ad-2" >
     (adsbygoogle = window.adsbygoogle || []).push({});
</Script>
</>}
    </>
  )
}

export default DisplayAd