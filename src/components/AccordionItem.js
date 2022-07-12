import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ButtonImg from '../images/icon-arrow-down.svg'
function AccordionItem(props) {
  const [isOpened, setIsOpened] = useState(false);

  let toggleAccordion = () => {
    setIsOpened(!isOpened);
    props.parentFunction(this);
  };
  
  return (
    <section className="w-[270px] lg:w-[350px] border-b-[1px] border-fem-neutral-200 border-opacity-20">
      <button onClick={toggleAccordion} className={"text-[0.7rem] lg:text-sm py-2 accordion w-full flex gap-1 lg:gap-4 justify-between duration-300 ease-in-out hover:text-fem-primary-200 " + (isOpened ? "font-bold text-fem-primary-100" : "")}>
        {props.title} 
        <div className='flex items-center'><img src={ButtonImg} alt="" className={"duration-300 ease-in-out shrink-0 " + (isOpened ? "rotate-180" : "")} /></div>
      </button>

      <div className={"text-[0.6rem] lg:text-[0.7rem] text-fem-neutral-200 font-light panel w-5/6 lg:w-full mb-4 overflow-hidden " + 
      (isOpened ? "" : "hidden")}>
        {props.children}
      </div>
    </section>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  parentFunction: PropTypes.func,
}

export default AccordionItem