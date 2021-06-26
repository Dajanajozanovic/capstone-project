import LocationsPage from './LocationsPage'

export default {
  title: 'Pages/LocationsPage',
  component: LocationsPage,
}

const Template = args => <LocationsPage {...args} />

export const listedPlaces = Template.bind({})
listedPlaces.args = {}
