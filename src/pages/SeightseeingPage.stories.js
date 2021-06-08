import SeightseeingPage from './SeightseeingPage'

export default {
  title: 'SeightseeingPage',
  component: SeightseeingPage,
}

const Template = args => <SeightseeingPage {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfCategory: 'header',
}
