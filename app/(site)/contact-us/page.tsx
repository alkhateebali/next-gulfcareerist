import aboutImage from "@/public/img/about.png";
import Image from "next/image";
import Head from "next/head";
<Head>
  <link rel="canonical" href="https://gulfcareerist.com/contact-us" />
</Head>;
const page = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image src={aboutImage} alt="about gulf careerist" />
            {/* <img src="https://i.imgur.com/WbQnbas.png"> */}
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="border-b-2 border-primary  uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              OUR WEBSITE :{" "}
              <span className="text-primary">WWW.GULFCAREERIST.COM</span>
            </h2>
            <p>
              gulfcareerist.com is a website that is not affiliated with an
              official party or a private institution. It is concerned with
              providing job vacancies in the Arab Gulf countries : United Arab
              Emirates, Saudi Arabia,Oman, Kuwait, Bahrain and Qatar, in
              addition to publishing all news related to employment and
              education in these countries.
            </p>

            <p className="py-5 font-semibold">Email : info@gulfcareerist.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
