import Script from 'next/script';
const GoogleScript = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
   
    <>
    {   isProduction && <>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-3K90CLXKFS"/>
      <Script id='google-analytics'  strategy='afterInteractive'>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-3K90CLXKFS');`}
     </Script>
    
    <Script strategy="afterInteractive" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1857873264627766"
       crossOrigin="anonymous"></Script>
    </>}
       </>
      
  )
}

export default GoogleScript