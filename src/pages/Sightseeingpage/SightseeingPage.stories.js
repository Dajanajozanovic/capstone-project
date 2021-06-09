import SightseeingPage from './SightseeingPage'
import place1 from './../../images/sightseeing/Hafen.jpg'
import place2 from './../../images/sightseeing/Alster.jpg'

export default {
  title: 'SightseeingPage',
  component: SightseeingPage,
}

const Template = args => <SightseeingPage {...args} />

export const listedPlaces = Template.bind({})
listedPlaces.args = {
  sightseeing: [
    { image: place1, title: 'place1', text: 'about1' },
    { image: place2, title: 'place2', text: 'about2' },
  ],
}
