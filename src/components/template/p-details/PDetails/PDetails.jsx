import "./PDetails.css";
import { useState, useContext } from "react";
import PAbout from "../PAbout/PAbout";
import PCheck from "../pCheck/pCheck";
import PInfo from "../PInfo/PInfo";
import PComment from "../PComment/PComment";
import productContext from "../../../../context/productContext";
import { useParams } from "react-router-dom";


function PDetails() {
  const productData = useContext(productContext)

    // useState menuBtn
    const [menuBtn , setMenuBtn] = useState('about')

    // onClick menuBtn 
    const handlerMenuButton =(menuBtnID)=>{
        setMenuBtn(menuBtnID)
    }


    // Get details product by id
    const {id} = useParams()
    const foundProduct = productData.products.find((product)=> product.id == parseInt(id))

  return (
    <section className="productDetails">
      <div className="containers">
        <div className="contentBox">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <img
                src={foundProduct.image}
                alt="product details"
                className="productDetails_img"
              />
            </div>
            <div className="col-xl-9 col-lg-8c col-md-6 col-sm-12">
              <div className="productDetails_content">
                <div className="productDetails_content_top">
                  <h5 className="productDetails_name">
                    {foundProduct.name}
                  </h5>
                  <span className="productDetails_miniInfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                      Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                      Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                      Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                      Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                      Lorem ipsum dolor sit.
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
                        <span className="productDetails_buy_text">{foundProduct.inCould} عدد</span>
                      </li>
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">قیمت:</span>
                        <span className="productDetails_buy_text">
                         {foundProduct.price.toLocaleString()} تومان
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
