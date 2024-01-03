import './LoginForm.css';

function LoginForm() {
  return (
    <section className="login">
        <div className="containers">
            <div className="contentBox">
                    <div className="login_wrapper">
                        <form action="#" className="Form">
                                <img src="/assets/images/logo.png" alt="" className="Form_logo" />
                                <h5 className="form_title">ورود</h5>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'>شماره تلفن | ایمیل</label>
                                    <input type="text" className='formBox_input' />
                                </div>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'>رمزعبور</label>
                                    <input type="text" className='formBox_input' />
                                </div>
                                <button className="form_submit">ورود</button>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default LoginForm