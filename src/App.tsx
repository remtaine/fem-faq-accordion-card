import React from 'react';
import AccordionItem from './components/AccordionItem';
import Footer from './components/Footer';
import DesktopIllustration from './images/desktop/illustration-woman-online-desktop.svg';
import DesktopBox from './images/desktop/illustration-box-desktop.svg';
import DesktopBG from './images/desktop/bg-pattern-desktop.svg';

function App() {
  return (
    <div className="App font-kumbh-sans">
      <div className="w-screen h-screen fixed -z-50" style={{background: 'linear-gradient(180deg, rgba(175,103,233,1) 30%, rgba(101,101,231,1) 100%)' }}></div>

      <main className="min-h-[calc(100vh-2rem)] flex justify-center items-center">
        <article className="flex bg-fem-neutral-300 max-w-[1000px] p-8 rounded-3xl shadow-2xl">
          <div className="shrink-0 flex flex-col justify-center items-center relative">
            <img src={DesktopBG} alt="" className="absolute" />
            <img src={DesktopIllustration} alt="" className="-translate-x-[20%]" />
            <img src={DesktopBox} alt="" className="absolute left-0 -translate-x-[70%]" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">FAQ</h1>
            <AccordionItem title="How many team members can I invite?">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</AccordionItem>
            
            <AccordionItem title="What is the maximum file upload size?">No more than 2GB. All files in your account must fit your allotted storage space.</AccordionItem>
            <AccordionItem title="How do I reset my password?">Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.</AccordionItem>
            <AccordionItem title="Can I cancel my subscription?">Yes! Send us a message and we’ll process your request no questions asked.</AccordionItem>
            
            <AccordionItem title="Do you provide additional support?">Chat and email support is available 24/7. Phone lines are open during normal business hours.</AccordionItem>
          </div>
        </article>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
