"use client"

import Mapa from '../../(components)/MapGmail.jsx';


const Ubicacion = () => {
  return (
    <div className="  md:flex justify-center items-center h-screen  w-full bg-gradient-to-r from-[#00E5B9] from-5% to-[#005B82] to-80%  gap-x-10 montserrat">

      <div
      >
        <h2 className='montserrat text-[35px] leading-tight md:text-[40px] font-normal md:leading-[1.3] mb-4'>¿COMO LLEGAR?</h2>
        <p className='montserrat text-start text-wrap w-[400px] text-[30px] leading-tight md:text-[25px]  text-white md:leading-[1.3] mb-4'><span className="texto-borde"> Haz clic</span> en "cómo llegar" para ver la ruta según tu medio de transporte.</p>
      </div>

      <div
        className='text-start bg-transparent'>
        <Mapa />
      </div>



    </div>


  );
};

export default Ubicacion
