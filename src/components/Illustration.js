import React from 'react'
import DesktopIllustration from '../images/desktop/illustration-woman-online-desktop.svg';
import DesktopBox from '../images/desktop/illustration-box-desktop.svg';
import DesktopBG from '../images/desktop/bg-pattern-desktop.svg';

function Illustration() {
  return (
    <div className="absolute -translate-y-[95px] translate-x-20 lg:-translate-x-0 lg:-translate-y-0 lg:relative flex w-[200px] lg:w-full">
        <div className="relative lg:overflow-hidden h-full flex items-center">
            <img src={DesktopBG} alt="" className="absolute h-auto -translate-x-[45%] -translate-y-[5%] lg:scale-150" />
            <img src={DesktopIllustration} alt="" className="-translate-x-[20%] " />
            {/* <img src={DesktopBox} alt="" className="absolute left-0 -translate-x-[70%]" /> */}
        </div>
            {/* <img src={DesktopBG} alt="" className="absolute" /> */}
            {/* <img src={DesktopIllustration} alt="" className="-translate-x-[20%]" /> */}
        <div className="h-full flex items-center ">
            <img src={DesktopBox} alt="" className="absolute bottom-0 w-1/3 lg:w-fulll lg:bottom-auto left-0 -translate-x-[60%] lg:-translate-x-[48.5%] -translate-y-[35%] lg:translate-y-[26%]" />
        </div>
    </div>
  )
}

export default Illustration