import React from 'react';

function DesignDataBar({ clearDataPoints }) {
  return (
    <div className='bg-white border-l-2 border-solid border-black p-2'>
      <article>
        <h2 className='text-xl text-center'>Polygon Data</h2>
        <p className='mt-2'>
          Create 3 or more plot point <br />
          on the canvas to create <br />
          your 2D shape
        </p>
      </article>
      <section className='mt-6'>
        <div>
          <div className='text-center'>
            <h4>Plot Points</h4>
          </div>
          <form className='grid w-fit'>
            <div className='grid grid-cols-rev gap-4'>
              <div className='grid'>
                <label htmlFor='pointOne'>Point One</label>
                <input
                  className='w-[140px] outline-black outline outline-2'
                  type='text'
                  name='pointOne'
                  id='pointOne'
                />
              </div>
              <div className='grid items-end justify-end'>
                <button
                  id='pointOne'
                  onClick={clearDataPoints}
                  className='p-1 outline-black outline outline-2 active:scale-95 no__highlights bg-yellow-400 hover:bg-yellow-100 rounded-xl'
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default DesignDataBar;
