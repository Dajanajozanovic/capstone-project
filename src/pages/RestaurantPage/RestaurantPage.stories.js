import RestaurantPage from './RestaurantPage'

export default {
  title: 'RestaurantPage',
  component: RestaurantPage,
}

const Template = args => <RestaurantPage {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfCategory: 'header',
}
