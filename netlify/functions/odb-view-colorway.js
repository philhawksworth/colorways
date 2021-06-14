require('dotenv').config();

const { builder } = require("@netlify/functions");
const pageTemplate = require('../../templates/page.js');
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


const handler = async event => {

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // Fetch the idea at the specified path
  const path = event.path.split("colorway/")[1];
  const { data } = await supabase
    .from('palettes')
    .select('*')
    .eq('id', path);

  // pseudo 404 if there is no content for this URL
  if (!data) {
    return {
      statusCode: 302,
      headers: {
        Location: `/not-found`,
      },
    }
  }

  // render the data into the template
  console.log(`ODB render of ${path}`);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(data[0])
  }
}

exports.handler = builder(handler);