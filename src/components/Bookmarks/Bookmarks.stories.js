import Bookmarks from './Bookmarks'
export default {
  title: 'Components/Bookmarks',
  component: Bookmarks,
}

const Template = args => <Bookmarks {...args} />

export const Default = Template.bind({})
Default.args = {}
