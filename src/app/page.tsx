import { NavBar } from "@/components/navbar";
import founderPic from "/public/founder.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <NavBar />
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <div className="flex flex-row">
          <div className="animate-fade text-center">
            <p className="mx-4 text-6xl font-bold">
              Bharat Dynamics Limited
            </p>
            <p className="mx-4 py-2">
            Bharat Dynamics Limited (BDL), was incorporated on 16th July,1970 in Hyderabad, Telangana as a Public Sector Undertaking under the Ministry of Defence, Government of India to be the manufacturing base for guided missile systems and allied equipment for the Indian Armed Forces.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center ">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
          <div className="pl-10 max-w-[65rem]">
            <p className="p-2">Bharat Dynamics Limited (BDL) has been a key player in India&rsquo;s defense sector, collaborating with DRDO and foreign OEMs to supply various missiles and defense equipment to the Indian Armed Forces. BDL&rsquo;s involvement in the Integrated Guided Missile Development Programme (IGMDP) positioned it as the Prime Production Agency, enabling the assimilation of advanced manufacturing and management technologies. Today, BDL stands among the few global companies with state-of-the-art facilities for manufacturing guided missiles, underwater weapons, airborne products, and allied defense equipment. The company also offers lifecycle support, refurbishment, and life extension services for vintage missiles. With manufacturing units in Telangana and Andhra Pradesh, and expansion plans in Maharashtra and Uttar Pradesh, BDL is set to meet the growing demands of the Armed Forces. The company has embraced the &rsquo;Atmanirbhar Bharat&rsquo; initiative by setting up new facilities and launching indigenously designed equipment, contributing to significant foreign exchange savings and transforming India into a defense manufacturing hub.</p>
            <p className="p-2">BDL&rsquo;s commitment to innovation is evident through its continuous upgrade of manufacturing technologies, adoption of Industry 4.0 practices, and fostering collaboration with academia and startups under initiatives like iDEX. The company has launched several advanced products, including the Semi-Active Laser Seeker Homing ATGM, Light Weight Vehicle Mounted ATGW System, and the third-generation Anti-Tank Guided Missile, Amogha-III. BDL is also developing AI-based technologies for next-generation weapon systems and exploring tie-ups with foreign OEMs for new missile and underwater weapon programs. With MoUs signed with multiple organizations, including IIIT Hyderabad, BDL aims to advance AI-based technologies and support the &rsquo;Make in India&rsquo; initiative. BDL&rsquo;s dedication to technological excellence and diversification into new areas like rockets, bombs, and UAV-launched weapons underscores its role as &rsquo;The Force Behind Peace&rsquo; and positions it for future growth in the defense sector.</p>
          </div>
          <Image className="absolute right-28" src={founderPic} height={300} width={200} alt="img"/>
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] border-slate-600 h-56 items-center">
        <p className="px-4 py-2 text-slate-300">
          Corporate Office Address: Plot No.38-39, TSFC Building (Near ICICI Towers),<br />
            Financial District, Nanakramguda,<br />
            Hyderabad, Telangana - 500032, India.<br />
            Telephone: 91-40-23456173<br />
            Email: bdbdl@bdl-india.in  
        </p>
        <div className="flex flex-col pr-24 py-2">
          <p className="text-slate-300">Follow BDL</p>
          <div className="flex py-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" fill="#fff" rx="60"></rect><path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
            <a href={"https://x.com/bharat_dynamics"} className="px-2">twitter(X)</a>
          </div>
          <div className="flex py-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={"32"} height={"32"} viewBox="0 0 1024 1024" id="facebook"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
            <a href={"https://www.facebook.com/p/Bharat-Dynamics-Limited-100069244986411/"} className="px-2">facebook</a>
          </div>
          <div className="flex py-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
            <a className="px-2">youtube</a>
          </div>
          <div className="flex py-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
               <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg>
            <a className="px-2">instagram</a>
          </div>
        </div>
      </div>
    </main>
  );
}
