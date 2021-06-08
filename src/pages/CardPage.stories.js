import CardPage from './CardPage'

export default {
  title: 'CardPage',
  component: CardPage,
}

const Template = args => <CardPage {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfCategory: 'header',
}
