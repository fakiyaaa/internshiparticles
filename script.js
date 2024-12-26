const container = document.createElement('div');
container.classList.add('card-container');

const sampleCards = [
  {
    title: "Fakiya Imangaliyeva",
    description: "Software Engineering Intern",
    image: "images/5393447809958668315.jpg"
  }, 
  {
    title: "Arina Alibayeva",
    description: "Data Engineering Intern",
    image: "images/arinaphoto.png"
  }, 
  {
    title: "Nazym Zhiyengaliyeva",
    description: "Machine Learning Intern",
    image: "images/nazymphoto.png"
  }
];

sampleCards.forEach((result) => {
  const content = `
    <div class="card-technology">
      <div class="card-header">
        <img src="${result.image}" class="cardImage" alt="${result.title}">
      </div>
      <div class="card-body">
        <h5>${result.title}</h5>
        <p>${result.description}</p>
      </div>
    </div>
  `;

  container.innerHTML += content;
});

// Append container to the DOM
document.getElementById('main-container').appendChild(container);
