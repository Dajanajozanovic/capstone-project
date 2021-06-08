import SightseeingPage from './SightseeingPage'

export default {
  title: 'SightseeingPage',
  component: SightseeingPage,
}

const Template = args => <SightseeingPage {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfCategory: 'header',
}
