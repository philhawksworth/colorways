module.exports = (data) => { 
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ColorWays - make your own palette</title>
      <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
      

      <h1>ColorWays</h1>
      <p>Make and share colorful inspiration</p>
      <h2>${data.title}</h2>

    <form action="/api/save" name="colorway" method="POST">
      <label for="color_1" class="pickerLabel">
        <input type="color" class="colourpicker" id="color_1" name="color_1" value="${data.colors[0]}" />
      </label>
      <label for="color_2" class="pickerLabel">
        <input type="color" class="colourpicker" id="color_2" name="color_2" value="${data.colors[1]}" />
      </label>
      <label for="color_3" class="pickerLabel">
        <input type="color" class="colourpicker" id="color_3" name="color_3" value="${data.colors[2]}" />
      </label>
      <label for="color_4" class="pickerLabel">
        <input type="color" class="colourpicker" id="color_4" name="color_4" value="${data.colors[3]}" />
      </label>
      <label for="color_5" class="pickerLabel">
        <input type="color" class="colourpicker" id="color_5" name="color_5" value="${data.colors[4]}" />
      </label>
      <label for="title">Title</label>
      <input type="text" id="title" name="title">Title </input>
      <input type="submit" value="Submit"/>
    </form> 

    </body>
</html>`;
}