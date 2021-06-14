import RestaurantPage from './RestaurantPage'

export default {
  title: 'Pages/RestaurantPage',
  component: RestaurantPage,
}

const Template = args => <RestaurantPage {...args} />

export const listedRestaurants = Template.bind({})
listedRestaurants.args = {}
