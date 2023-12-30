import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'

function Navbar() {
    const [activeMenu ,setActiveMenu]= useState('/')
    const location = useLocation()

    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
    },[location])
  return (
    <section className="NavBar">
        <div className="containers">
            <div className="navbar_wrapper">
                <ul className="navbar_items">
                    <li className="navbar_item">
                        <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>خانه</NavLink>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">پوشاک</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>مردانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>زنانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>بجگانه</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">کلای دیجیتال</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>لب تاپ</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>موبایل</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>تبلت</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>وسایل جانبی</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">لوازم خانگی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>یخچال و فریزر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>ماشین لباسشویی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>اجاق گاز</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>سینک</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">زیبایی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>لوازم آرایشی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>عطر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>لوازم بهداشتی</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">لوازم برقی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>سشوار </NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>اتو</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>ریش تراش</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>ترازو</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>ساعت دیواری</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">سوپرمارکت</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>لبنیات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>ترشیجات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>حبوبات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>گوشت و مرغ</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>میوه</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">کودک نوزاد</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>پوشک</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>لباس</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className='navbar_item_link'>کالای خواب</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar