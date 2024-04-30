import { RiDashboard2Line } from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import { RiLayout2Line } from "react-icons/ri";
import logo from "../../../../public/logo-sm.png"
import { Link } from '@inertiajs/react';
import { useState } from 'react';

function SidebarIcon({ toggleValue  }) {
  const currentUrl = window.location.pathname;
  const lastPortion = currentUrl.split('/').pop();
  console.log(lastPortion);
 
  return (
    <div className='bg-[#F3F3F9] w-[70px] drop-shadow min-h-screen border-r'>
      <div class="flex flex-col items-center pt-6 sticky top-0 left-0">
        <Link href={route('admin')} className='mb-6'>
          <img src={logo} alt="" height={22} width={22}/>
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <Link className={
            lastPortion==='admin'? 'h-10 w-10 bg-[#D9DBE8] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='admin'
            href={route('admin')}>
            {
                lastPortion === 'admin' ? (
                  <RiDashboard2Line style={{ color: '#405189' }} size={20} />
                ) : (
                  <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

        </div>

      </div>
      
    </div>
  )
}

export default SidebarIcon