import Navigation from './Navigation'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/Navigation',
  component: Navigation,
}

const Template = args => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { title: 'Homepage', path: '/' },
    { title: 'Sightseeing', path: '/sightseeing' },
    { title: 'Food & Drinks', path: '/restaurants' },
  ],
}
