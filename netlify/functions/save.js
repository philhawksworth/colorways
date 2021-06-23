require('dotenv').config();
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;

exports.handler = async event => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // unpack the form submission data
  const querystring = require("querystring");
  const {
    title,
    color_1,
    color_2,
    color_3,
    color_4,
    color_5
  } = querystring.parse(event.body);
  const colors = [color_1,color_2,color_3,color_4,color_5];
  
  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

  // save our data to the DB
  const { data, error } = await supabase
  .from('palettes')
  .insert([
    {
      title: title,
      colors: colors
    }
  ]);
  
  // the unique id for this item returned from the db service
  const id = data[0].id;
  
  console.log(`NEW URL: /colorway/${id}`);

  return {
    statusCode: 302,
    headers: {
      Location: `/colorway/${id}`,
    },
  }

}