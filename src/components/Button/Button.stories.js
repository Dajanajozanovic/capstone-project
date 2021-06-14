import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Home',
}
