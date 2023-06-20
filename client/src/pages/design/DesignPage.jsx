import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignDataBar from '../../components/design/DesignDataBar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import CanvasDesignTool from '../../components/canvas/CanvasDesignTool';

function DesignPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/');
  }, []);
  
  const clearDataPoints = (event) => {
    event.preventDefault();
    console.log('CLEAR', event.target.id);
  };

  return (
    <div className='grid main__bg font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full grid-cols-rev overflow-hidden'>
        {/* canvas */}
        <section className='grid grid-rows-reg gap-4 p-4 overflow-hidden'>
          <div className='grid grid-flow-col justify-between'>
            <article>
              <h1 className='text-xl font-semibold'>Design Your Polygon</h1>
            </article>
            <div>
              <button className='px-4 py-2 outline-black outline outline-2 active:scale-95 no__highlights bg-yellow-400 hover:bg-yellow-100 rounded-xl'>
                Reset
              </button>
            </div>
          </div>
          {/* CANVAS */}
          <div className='bg-white h-full grid outline-black outline outline-2 overflow-hidden'>
            <CanvasDesignTool />
          </div>
        </section>
        {/* data bar */}
        <section className='grid'>
          <DesignDataBar clearDataPoints={clearDataPoints} />
        </section>
      </main>
    </div>
  );
}

export default DesignPage;
