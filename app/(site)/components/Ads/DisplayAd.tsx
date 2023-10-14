'use client'
import { Adsense } from "@ctrl/react-adsense";
import Script from "next/script";
const DisplayAd = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <>
      {isProduction && (
        <>
          <Script
            id="display-ad"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1857873264627766"
            strategy="afterInteractive"
          ></Script>
          <div className="text-center adsbygoogle my-3">
            <Adsense
              client="ca-pub-1857873264627766"
              slot="4875648738"
              style={{ display: "block" }}
              responsive="true"
              layout="display"
              format="auto"
            />
          </div>
        </>
      )}
    </>
  );
};

export default DisplayAd;
