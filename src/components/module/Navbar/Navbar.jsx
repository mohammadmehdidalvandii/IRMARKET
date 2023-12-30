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
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>مردانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>زنانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>بجگانه</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">کلای دیجیتال</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>لب تاپ</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>موبایل</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>تبلت</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>وسایل جانبی</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">لوازم خانگی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>یخچال و فریزر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>ماشین لباسشویی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>اجاق گاز</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>سینک</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">زیبایی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>لوازم آرایشی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>عطر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>لوازم بهداشتی</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">لوازم برقی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>سشوار </NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>اتو</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>ریش تراش</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>ترازو</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>ساعت دیواری</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">سوپرمارکت</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>لبنیات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>ترشیجات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>حبوبات</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>گوشت و مرغ</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>میوه</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">کودک نوزاد</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>پوشک</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>لباس</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>کالای خواب</NavLink>
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