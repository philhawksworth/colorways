module.exports = (data) => { 
  return `
  <div class="news-item">
    <h2>${data.title}</h2>
    <div class="idea-description">${data.description}</div>
  <div>
  `;
}