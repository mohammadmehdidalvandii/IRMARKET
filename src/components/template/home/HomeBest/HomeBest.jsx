import Link from '../../../module/Link/Link'
import Title from '../../../module/Title/Title'
import './HomeBest.css'

function HomeBest() {
  return (
    <section className="homeBest">
        <div className="containers">
            <div className="contentBox">
            <div className="row">
                <div className="col-lg-6">
                    <Title title='بهترین کالا ها'/>
                </div>
                <div className="col-lg-6">
                    <Link/>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HomeBest