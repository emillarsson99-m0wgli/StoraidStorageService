import TitleCard from '../Components/TitleCard'
import GetInTouch from '../Components/GetInTouch'
import FindUs from '../Components/FindUs'
import FAQ from '../Components/FAQ'

function ContactPage() {
  return (
    <div>
      <TitleCard Title="Contact Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <GetInTouch />
      <FindUs />
      <FAQ />
    </div>
  )
}

export default ContactPage