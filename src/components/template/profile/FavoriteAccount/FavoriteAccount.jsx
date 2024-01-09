import './FavoriteAccount.css';

function FavoriteAccount() {
  return (
    <section className="favoriteAccount">
        <div className="favoriteAccount_wrapper">
            <h6 className="account_title">علاقه مندی</h6>
            <div className="row">
                <div className="col-12">
                    <div className="favoriteProduct">
                        <img src="/assets/images/p1.jpg" alt="" className="favoriteProduct_img" />
                        <h6 className="favoriteProduct_name">گوشی موبایل</h6>
                        <span className="favoriteProduct_price">6,500,000 تومان</span>
                        <div className="favoriteProduct_buttons">
                            <button className="favoriteProduct_btn favoriteProduct_btnDelete">حذف</button>
                            <button className="favoriteProduct_btn favoriteProduct_btnSeen">مشاهده</button>
                        </div>
                    </div>
                    <div className="favoriteProduct">
                        <img src="/assets/images/p1.jpg" alt="" className="favoriteProduct_img" />
                        <h6 className="favoriteProduct_name">گوشی موبایل</h6>
                        <span className="favoriteProduct_price">6,500,000 تومان</span>
                        <div className="favoriteProduct_buttons">
                            <button className="favoriteProduct_btn favoriteProduct_btnDelete">حذف</button>
                            <button className="favoriteProduct_btn favoriteProduct_btnSeen">مشاهده</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FavoriteAccount