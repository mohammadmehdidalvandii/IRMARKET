import { useState } from "react";
import "./PDetails.css";
import PAbout from "../PAbout/PAbout";
import PCheck from "../pCheck/pCheck";
import PInfo from "../PInfo/PInfo";
import PComment from "../PComment/PComment";

function PDetails() {
    // useState menuBtn
    const [menuBtn , setMenuBtn] = useState('about')

    // onClick menuBtn 
    const handlerMenuButton =(menuBtnID)=>{
        setMenuBtn(menuBtnID)
    }
  return (
    <section className="productDetails">
      <div className="containers">
        <div className="contentBox">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <img
                src="/assets/images/p1.jpg"
                alt="product details"
                className="productDetails_img"
              />
            </div>
            <div className="col-xl-9 col-lg-8c col-md-6 col-sm-12">
              <div className="productDetails_content">
                <div className="productDetails_content_top">
                  <h5 className="productDetails_name">
                  گوشی موبایل اپل مدل iPhone 13 Pro تک سیم کارت ظرفیت یک ترابایت و رم 6 گیگابایت
                  </h5>
                  <span className="productDetails_miniInfo">
                  Apple iPhone 13 Pro Single SIM 1TB And 6GB RAM Mobile Phone
                  </span>
                </div>
                <div className="productDetails_content_down">
                  <ul className="productDetails_items">
                    <li className="productDetails_item">
                      <h6 className="productDetails_item_title">
                        ویژگی های محصول:
                      </h6>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        پردازنده: AM 32x new design
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        سیستم عامل: IOS
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        فناوری ساخت: A2C
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        دوربین عقب: 64
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        دوربین جلو: 32
                      </span>
                    </li>
                  </ul>
                  <div className="productDetails_buy">
                    <ul className="productDetails_buy_items">
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">
                          گارانتی:
                        </span>
                        <span className="productDetails_buy_text">
                          6 ماهه تمام
                        </span>
                      </li>
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">
                          موجود در انبار:
                        </span>
                        <span className="productDetails_buy_text">7 عدد</span>
                      </li>
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">قیمت:</span>
                        <span className="productDetails_buy_text">
                          21,000,000 تومان
                        </span>
                      </li>
                    </ul>
                    <button className="productDetails_addBasket">
                      اضافه کردن به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
                <div className="productDetails_buttons">
                    <button className={`productDetails_btnMenu ${menuBtn === 'about' ? "productDetails_btnMenu_Active": ""}`} onClick={()=>handlerMenuButton('about')}>درباره محصول</button>
                    <button className={`productDetails_btnMenu ${menuBtn === 'check' ? "productDetails_btnMenu_Active": ""}`} onClick={()=>handlerMenuButton('check')}>برسی تخصصی</button>
                    <button className={`productDetails_btnMenu ${menuBtn === 'info' ? "productDetails_btnMenu_Active": ""}`} onClick={()=>handlerMenuButton('info')}>مشخصات</button>
                    <button className={`productDetails_btnMenu ${menuBtn === 'comment' ? "productDetails_btnMenu_Active": ""}`} onClick={()=>handlerMenuButton('comment')}>دیدگاه</button>
                </div>
            </div>
          </div>
          <div className="row mt-5">
            {menuBtn === 'about' &&(<PAbout/>)}
            {menuBtn === 'check' &&(<PCheck/>)}
            {menuBtn === 'info' &&(<PInfo/>)}
            {menuBtn === 'comment' &&(<PComment/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PDetails;
