import SightseeingPage from './SightseeingPage'

export default {
  title: 'Pages/SightseeingPage',
  component: SightseeingPage,
}

const Template = args => <SightseeingPage {...args} />

export const listedPlaces = Template.bind({})
listedPlaces.args = {}
