module.exports = (data) => { 
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ColorWays - make your own palette</title>
    <link rel="stylesheet" href="/css/styles.css">
    <style>
    header {
      border-color:${data.colors[0]};
    }
  </style>
  </head>
  <body>
     <header>
        <h1>ColorWays</h1>
        <p>Make and share colorful inspiration</p>
     </header>
     <main>
  
        <form action="/api/save" name="colorway" method="POST">
        
           <input type="text" id="palette_title" name="title" placeholder="${data.title}" />
           <div class="palette">
           <label for="color_1" class="pickerLabel">
              <input type="color" class="colorPicker" id="color_1" name="color_1" value="${data.colors[0]}" />
           </label>
           <label for="color_2" class="pickerLabel">
              <input type="color" class="colorPicker" id="color_2" name="color_2" value="${data.colors[1]}" />
           </label>
           <label for="color_3" class="pickerLabel">
              <input type="color" class="colorPicker" id="color_3" name="color_3" value="${data.colors[2]}" />
              
           </label>
           <label for="color_4" class="pickerLabel">
              <input type="color" class="colorPicker" id="color_4" name="color_4" value="${data.colors[3]}" />
           </label>
           <label for="color_5" class="pickerLabel">
              <input type="color" class="colorPicker" id="color_5" name="color_5" value="${data.colors[4]}" />
           </label>
           </div>
           <input type="submit" value="Save this colorway"/>
        </form>
  
        <ol class="instructions">
           <li>Make a colorway</li>
           <li>Give it a name</li>
           <li>Save it</li>
           <li>Get a URL to share</li>
        <ol>
  
     </main>
  
  
     <footer>
      <p>
          This site is a demonstration of Netlify <a href="https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/">On Demand Builder functions</a>. Get unlimited pages in your site without bloating your build.
      </p>
      <p>Learn more about howe ODB functions deliver <a href="https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/">Distributed Persistent Rendering in ths post</a>, or check out the <a href="">code in the repo</a></p>
    </footer>

  
  </body>
  </html>`;
}