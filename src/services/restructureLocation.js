export default function restructureLocation(location) {
  console.log(location)
  const newLocation = {
    name: location.venue.name,
    id: location.venue.id,
    address: location.venue.location.formattedAddress.slice(0, 2),
    categorie: location.venue.categories[0].name,
    recommandation: location.reasons.items[0].summary,
  }

  return newLocation
}
