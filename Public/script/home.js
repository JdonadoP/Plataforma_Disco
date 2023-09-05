const botones = document.querySelectorAll(".btnfv");
const nuevoColor = "red";

const colorOriginal = window.getComputedStyle(botones[0]).color;

botones.forEach(boton =>{
    boton.addEventListener("click", function() {
      if (window.getComputedStyle(boton).color === colorOriginal){
        boton.style.color = nuevoColor;
      } else {
        boton.style.color = colorOriginal;
      }
    });
  });

  const getAlbums =  async () => {
    try{
    const response = await axios.get('/band')
    response.data.map((album)=> {
      renderAlbums(album)})
    }
    catch(error){
      res.status(500).send("Error something went wrong")
    }
  }

  const renderAlbums = (album) => {
    const div = document.getElementsByClassName('grid grid-cols-3 gap-4 mt-12 py-30')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('mb-20')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.src= album.img ? album.img : 'https://imgur.com/0uSALUr.png'
    
    div.appendChild(newDiv)
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-white','text-center', 'text-xl', 'font-bold')
    p.textContent = album.yearOfRelease
    newDiv.appendChild(p)
  }