import FavoritePage from './FavoritePage'

export default {
  title: 'Pages/FavoritePage',
  component: FavoritePage,
}

const Template = args => <FavoritePage {...args} />

export const Default = Template.bind({})
Default.args = {}
