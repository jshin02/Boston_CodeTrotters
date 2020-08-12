let apiUrl
const apiUrls = {
  production: 'https://safe-retreat-01918.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
