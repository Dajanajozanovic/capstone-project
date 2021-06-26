const fetch = require('node-fetch')

//eslint-disable-next-line
export default async function (req, res) {
  const baseUrl = `https://api.yelp.com/v3/businesses/search`

  const header = {
    headers: {
      Authorization: `Bearer` + process.env.REACT_APP_API_KEY,
    },
  }

  const apiCall = await fetch(baseUrl, header)
  if (apiCall.ok) {
    return res.send(await apiCall.json())
  } else {
    return res.status(apiCall.status).end()
  }
}

// ${req.query.term}
