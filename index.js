var Vimeo = require('vimeo').Vimeo;


const CLIENT_ID = process.env.VIMEO_API_CLIENT_ID;
const CLIENT_SECRET = process.env.VIMEO_API_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.VIMEO_API_ACCESS_TOKEN;

var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

// client.request(`/me/projects/${4336302}/videos`)

client.request(/*options*/{
  // This is the path for the videos contained within the staff picks
  // channels
  path: `/me/projects/${4336302}/videos`,
  // This adds the parameters to request page two, and 10 items per
  // page
  query: {
    page: 1,
    per_page: 100,
    fields: 'uri,name,description,duration,created_time,modified_time'
  }
}, /*callback*/function (error, body, status_code, headers) {
  if (error) {
    console.log('error');
    console.log(error);
  } else {
    console.log('body');
    console.log(body);
  }
 
  console.log('status code');
  console.log(status_code);
  console.log('headers');
  console.log(headers);
});