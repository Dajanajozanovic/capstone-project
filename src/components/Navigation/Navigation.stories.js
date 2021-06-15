import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/Navigation',
  component: Navigation,
}

const Template = args => (
  <BrowserRouter>
    <Navigation {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { title: 'Homepage', path: '/' },
    { title: 'Sightseeing', path: '/sightseeing' },
    { title: 'Food & Drinks', path: '/restaurants' },
  ],
}
