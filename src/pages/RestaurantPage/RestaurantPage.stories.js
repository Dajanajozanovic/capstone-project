import RestaurantPage from './RestaurantPage'
import restaurant1 from './../../images/restaurants/ashoka.jpg'
import restaurant2 from './../../images/restaurants/sante.jpg'

export default {
  title: 'RestaurantPage',
  component: RestaurantPage,
}

const Template = args => <RestaurantPage {...args} />

export const listedRestaurants = Template.bind({})
listedRestaurants.args = {
  restaurants: [
    { image: restaurant1, title: 'Restaurant1', text: 'aboutRestaurant1' },
    { image: restaurant2, title: 'Restaurant2', text: 'aboutRestaurant2' },
  ],
}
