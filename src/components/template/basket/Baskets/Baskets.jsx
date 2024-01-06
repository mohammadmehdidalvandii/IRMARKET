import { NavLink } from 'react-router-dom';
import './Baskets.css';
import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci'

function Baskets() {
  return (
    <section className="baskets">
        <div className="containers">
            <div className="contentBox">
                <div className="basket_card">
                    <ul className="basket_card_items">
                        <li className="basket_card_item">
                        <img src="/assets/images/p1.jpg" alt="" className="basket_card_img" />    
                        </li> 
                        <li className="basket_card_item">
                          <span className="basket_card_name">گوشی موبایل</span>  
                        </li> 
                        <li className="basket_card_item">
                          <div className="basket_card_count">
                            <button className="basket_card_countPlus  basket_card_countBtn">
                              <CiCirclePlus/>
                            </button>
                            <span className="basket_card_countNum">1</span>  
                            <button className="basket_card_countMinus  basket_card_countBtn">
                            <CiCircleMinus/>  
                            </button>  
                          </div>  
                        </li> 
                        <li className="basket_card_item">
                          <span className="basket_card_price">6,000,000  تومان</span>
                          </li> 
                        <li className="basket_card_item">
                          <button className="basket_card_delete">حذف</button>  
                        </li> 
                   </ul>
                </div>
                <div className="basket_card_bill">
                    <ul className="basket_card_billItems">
                      <li className="basket_card_billItem">
                        <span className="basket_card_billTitle">قیمت کل :</span>
                        <span className="basket_card_billNum">12,000,000 تومان</span>
                      </li>
                      <li className="basket_card_billItem">
                        <span className="basket_card_billTitle">مجموع خرید :</span>
                        <span className="basket_card_billNum">12,000,000 تومان</span>
                      </li>
                    </ul>

                      <NavLink to='/' className="basket_card_billBtn">تایید و پرداخت</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Baskets