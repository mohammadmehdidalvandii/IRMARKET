import './TopBar.css'
import { FiSearch } from "react-icons/fi";
import {FaUser, FaBars , FaTimes} from 'react-icons/fa'
import {MdOutlineShoppingCart} from "react-icons/md"
import { NavLink, useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';

function TopBar() {
    const [menuItem , setMenuItem] = useState(false)
    const [activeMenu , setActiveMenu] =useState('/')

    const location = useLocation()
    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
    },[location])

    const handlerMenu = ()=> {
       setMenuItem(!menuItem)
    }
  return (
    <>
        <section className="topBar">
            <div className="containers">
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <img src="/assets/images/logo.png" alt="logo image" className="topBar_logo" />
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="topBar_search">
                            <input type="text" className="topBar_search-input" placeholder='جستجو محصول'/>
                            <FiSearch className='topBar_search-icon'/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="topBar_LoginRegister-basket">
                            <div className="loginRegister dropdown">
                                <span className="loginRegister_text">
                                    <FaUser className='loginRegister_text-icon'/>
                                    ورود | ثبت نام
                                </span>
                                    <div className="loginRegister_links dropdown-content ">
                                        <NavLink to='/Login' className='loginRegister-link'>ورود</NavLink>
                                        <NavLink to='/Register' className='loginRegister-link'>ثبت نام</NavLink>
                                    </div>
                            </div>
                            <div className="topBar_basket-num">
                                <span className="topBar_basket-number">0</span>
                            <NavLink to='/Basket' className='topBar_linkBasket'>
                                <MdOutlineShoppingCart className='topBar_linkBasket-icon'/>
                                <span className='topBar_linkBasket-text'>سبد خرید</span>
                            </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="topBarRes">
            <div className="containers">
                <div className="topBarRes_wrap">
                    <div className='topBarRes_menuLogo'>
                    <div className="topBarRes_menu">
                        {menuItem ? (
                            <span className="topBarRes_menu-icon" onClick={handlerMenu}>
                            <FaTimes/>
                        </span>
                        ) : (
                                <span className="topBarRes_menu-icon" onClick={handlerMenu}>
                                <FaBars/>
                            </span>
                        )}
                        
                        <div className="topBarRes_MenuItem" style={{display: menuItem ? "block" : "none"}}>
                            <div className="menuItem_linkLogo">
                                <NavLink to='/' className='menuItem-link'>
                                    <MdOutlineShoppingCart className='menuItem-link-icon'/>
                                        سبد خرید 
                                </NavLink>
                                <NavLink to='/Login' className='menuItem-link'>ورود</NavLink>
                                <NavLink to='/Register' className='menuItem-link'>ثبت نام </NavLink>
                            </div>
                            <ul className="menuItem_items">
                                <li className="menuItem_item">
                                    <NavLink to='/' className={`menuItem_itemLink ${activeMenu === '/' ? ".menuItem-linkActive" : ""}`}>خانه</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>پوشاک</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>کالای دیجیتال</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>لوازم خانوادگی</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>لوازم برقی</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>سوپر  مارکت</NavLink>
                                </li>
                                <li className="menuItem_item">
                                    <NavLink to='/' className='menuItem_itemLink'>زیبایی</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <img src="/assets/images/logo.png" alt="logo image" className="topBarRes_logo" />    
                    </div>  
                    <div className="topBarRes_search">
                    <input type="text" className="topBarRes_search-input" placeholder='جستجو محصول'/>
                            <FiSearch className='topBarRes_search-icon'/>
                    </div>                           
                </div>
            </div>
        </section>
    </>
  )
}

export default TopBar