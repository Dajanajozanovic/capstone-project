import CardItem from './components/Card/Card'
import location from './data.json'

export default function App() {
  return (
    <div>
      {location.map(location => {
        const { id, attributes } = location
        return (
          <CardItem
            key={id}
            image={attributes.image}
            title={attributes.title}
            text={attributes.text}
          />
        )
      })}
    </div>
  )
}
