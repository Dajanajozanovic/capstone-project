
  import Cards from './Cards'
  export default {
      title: 'Cards',
      component: Cards
  }
    
  const Template = args => <Cards {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        