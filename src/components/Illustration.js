import React from 'react'
import DesktopIllustration from '../images/desktop/illustration-woman-online-desktop.svg';
import DesktopBox from '../images/desktop/illustration-box-desktop.svg';
import DesktopBG from '../images/desktop/bg-pattern-desktop.svg';

function Illustration() {
  return (
    <div className="absolute -translate-y-[95px] translate-x-20 md:-translate-x-0 md:-translate-y-0 md:relative flex w-[200px] md:w-full">
        <div className="relative md:overflow-hidden h-full flex items-center">
            <img src={DesktopBG} alt="" className="absolute h-auto -translate-x-[45%] -translate-y-[5%] md:scale-150" />
            <img src={DesktopIllustration} alt="" className="-translate-x-[20%] " />
            {/* <img src={DesktopBox} alt="" className="absolute left-0 -translate-x-[70%]" /> */}
        </div>
            {/* <img src={DesktopBG} alt="" className="absolute" /> */}
            {/* <img src={DesktopIllustration} alt="" className="-translate-x-[20%]" /> */}
        <div className="h-full flex items-center ">
            <img src={DesktopBox} alt="" className="absolute bottom-0 w-1/3 md:w-fulll md:bottom-auto left-0 -translate-x-[60%] md:-translate-x-[48.5%] -translate-y-[35%] md:translate-y-[26%]" />
        </div>
    </div>
  )
}

export default Illustration