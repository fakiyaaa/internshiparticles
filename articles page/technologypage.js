

const technologyContainer = document.createElement('div');
technologyContainer.classList.add('card-container');

const technologyCards = [
  {
    title: "Fakiya Imangaliyeva",
    description: "Data Engineering Intern",
    image: "../images/5393447809958668315.jpg"
  }, 
  {
    title: "Arina Alibayeva",
    description: "Data Science Intern",
    image: "../images/arinaphoto.png"
  }, 
  {
    title: "Nazym Zhiyengaliyeva",
    description: "Machine Learning Intern",
    image: "../images/nazymphoto.png"
  },

  {
    title: "hey hey",
    description: "Data Science Intern",
    image: "../images/nazymphoto.png"
  },

  {
    title: "hey hey2",
    description: "Software Engineering Intern",
    image: "../images/nazymphoto.png"
  },

  {
    title: "hey hey",
    description: "Data Science Intern",
    image: "../images/arinaphoto.png"
  }
];

technologyCards.forEach((result) => {
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
technologyContainer.innerHTML += content;
})

if (document.getElementById('technology-container')) {
  document.getElementById('technology-container').appendChild(technologyContainer);
}