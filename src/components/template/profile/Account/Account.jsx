import "./Account.css";
import { IoExitOutline , IoLocationOutline } from "react-icons/io5";
import { IoMdPerson , IoIosBasket , IoMdHeartEmpty } from "react-icons/io";
import {FaRegCommentDots} from 'react-icons/fa6'
import {PiWarningCircleLight} from 'react-icons/pi'
import { useState } from "react";

function Account() {
    const [menuAccount , setMenuAccount]= useState('profile')

    const handlerMenuAccount = (accountID)=>{
        setMenuAccount(accountID)
        window.scroll(0 , 100)
    }
  return (
    <section className="account">
      <div className="containers">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="contentBox">
              <div className="account_profile">
                <img
                  src="/assets/images/user.jpg"
                  alt="user-images"
                  className="account_profile_img"
                />
                <h6 className="account_profile_name">امیررضا کریمی</h6>
                <span className="account_profile_date">عضویت 2 سال</span>
                <span className="account_profile_phoneNumber">
                  شماره تلفن: 09304444444
                </span>
                <button className="account_profile_exitIcon">
                  <IoExitOutline className="account_profile_icon" />
                  <span className="account_profile_exitText">خروج از حساب </span>
                </button>
              </div>
            </div>
            <div className="contentBox mt-5">
                <div className="account_menu">
                    <ul className="account_menu_items">
                        <li className={`account_menu_item ${menuAccount === 'profile' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('profile')}>
                            <IoMdPerson className="account_menu_icon" />
                            <span className="account_menu_text">پروفایل</span>
                        </li>
                        <li className={`account_menu_item ${menuAccount === 'order' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('order')}>
                            <IoIosBasket className="account_menu_icon" />
                            <span className="account_menu_text">سفارش ها</span>
                        </li>
                        <li className={`account_menu_item ${menuAccount === 'favorite' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('favorite')}>
                            <IoMdHeartEmpty className="account_menu_icon" />
                            <span className="account_menu_text">علاقه مندی ها</span>
                        </li>
                        <li className={`account_menu_item ${menuAccount === 'comment' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('comment')}>
                            <FaRegCommentDots className="account_menu_icon" />
                            <span className="account_menu_text">نظرات</span>
                        </li>
                        <li className={`account_menu_item ${menuAccount === 'address' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('address')}>
                            <IoLocationOutline className="account_menu_icon" />
                            <span className="account_menu_text">آدرس ها</span>
                        </li>
                        <li className={`account_menu_item ${menuAccount === 'info' ?"account_menu_itemActive":""}`}
                         onClick={()=>handlerMenuAccount('info')}>
                            <PiWarningCircleLight className="account_menu_icon" />
                            <span className="account_menu_text">اطلاعات حساب</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="contentBox">
                {menuAccount === 'profile' &&(<h1>account profile</h1>)}
                {menuAccount === 'order' &&(<h1>account order</h1>)}
                {menuAccount === 'favorite' &&(<h1>account favorite</h1>)}
                {menuAccount === 'comment' &&(<h1>account comment</h1>)}
                {menuAccount === 'address' &&(<h1>account address</h1>)}
                {menuAccount === 'info' &&(<h1>account info</h1>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
