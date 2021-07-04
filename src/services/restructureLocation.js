export default function restructureLocation(location) {
  const newLocation = {
    title: location.venue.name,
    id: location.venue.id,
    address: location.venue.location.formattedAddress.slice(0, 2),
    categorie: location.venue.categories[0].name,
    recommendation: location.reasons.items[0].summary,
  }

  return newLocation
}
