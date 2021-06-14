import Card from './Card'
import imageFile from './../../images/sightseeing/Elbphilharmonie.jpg'

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  image: imageFile,
  title: 'Elbphilharmonie',
  text: 'This is the info-text about the location above',
}
