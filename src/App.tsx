import React, {FC} from 'react';
// import React, { useState, FC} from 'react';
import Accordion from './components/Accordion';

import Footer from './components/Footer';

import Illustration from './components/Illustration';

function App() {
  // const [currentlyToggledAccordion, setCurrentlyToggledAccordion] = useState(null);
  let untoggleOthers = (accordion: FC) => {
    // if (currentlyToggledAccordion !== null) {
    //   setCurrentlyToggledAccordion(null);
    // }
    // setCurrentlyToggledAccordion(accordion);
  }
  return (
    <div className="App font-kumbh-sans selection:bg-fem-primary-100 selection:text-fem-neutral-300">
      <div className="w-screen h-screen fixed -z-50" style={{background: 'linear-gradient(180deg, rgba(175,103,233,1) 30%, rgba(101,101,231,1) 100%)' }}></div>

      <main className="min-h-[calc(100vh-2rem)] flex justify-center items-center">
        <article className="flex flex-col md:flex-row gap-4 bg-neutral-50 min-h-[500px] rounded-3xl shadow-2xl my-4 mx-6">
          <Illustration/>
          <Accordion parentFunction={untoggleOthers}/>
          
        </article>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
