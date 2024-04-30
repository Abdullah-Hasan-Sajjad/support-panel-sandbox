import { useState } from 'react'
import Header from '@/Layouts/Header';
import SidebarIcon from "@/Layouts/Admin/SidebarIcon";
import SidebarSubMenu from "@/Layouts/Admin/SidebarSubMenu";

export default function AdminLayout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
    const handleToggleValue = (toggle) => {
        setToggleValue(toggle)
    }
    
    const [selectedIcon, setSelectedIcon] = useState('clientDashboard');

    const handleSelectedIcon = (value) => {
      setSelectedIcon(value);
      console.log(selectedIcon);
    };

    return (
        <>
        <div className="flex">
          
            {/* Sidebar */}
            
            <div className='sticky top-0 flex flex-row'>
                <SidebarIcon toggleValue={toggleValue}/>
                <SidebarSubMenu toggleValue={toggleValue}/> 
            </div>
    
            <div className="flex flex-col w-screen">
            <Header handleToggleValue={handleToggleValue} />
            {children}
            </div>
        </div>

        </>
    )
}