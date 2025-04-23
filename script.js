
fetch("https://run.mocky.io/v3/308ae078-3a0d-4326-a7f4-dda6e7b26d45")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("quick-links-container")

    data.forEach((item) => {
      const card = document.createElement("div")
      card.className = "quick-link-card"
      card.innerHTML = `
      <div class="quick-link-top">${item.label}</div>
      <div class="quick-link-middle">${item.title}</div>
      <div class="quick-link-bottom">${item.description}</div>
    `
      card.onclick = () => window.open(item.url, "_blank")
      container.appendChild(card)
    })
  })
  .catch((err) => console.error("Quick Links verisi alınamadı:", err))

fetch("https://run.mocky.io/v3/4df65b14-b0ec-41fa-ae3a-f9cb6b616e81")
  .then((res) => res.json())
  .then((data) => {
    const slider = document.getElementById("slider-content")
    data.forEach((item, index) => {
      const slide = document.createElement("div")
      slide.className = `carousel-item ${index === 0 ? "active" : ""}`
      slide.innerHTML = `
        <img src="${item.image}" class="d-block w-100" alt="${item.title}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h5>${item.title}</h5>
        </div>
      `
      slider.appendChild(slide)
    })
  })
  .catch((err) => console.error("Slider verisi alınamadı:", err))


let electronicsIndex = 0
let electronicsData = []

fetch("https://run.mocky.io/v3/ff401c6f-9986-4b5b-ac5d-b229844f10e6")
  .then((res) => res.json())
  .then((data) => {
    electronicsData = data
    showElectronicsDeal()
    setInterval(showElectronicsDeal, 3000) 
  })
  .catch((err) => console.error("Elektronik verisi alınamadı:", err))

function showElectronicsDeal() {
  const container = document.getElementById("electronics-container")
  const item = electronicsData[electronicsIndex]

  container.innerHTML = `
    <div class="electronic-card text-center">
      <img src="${item.image}" alt="${item.name}" class="img-fluid mb-2" />
      <h5>${item.name}</h5>
      <p class="fw-bold text-success">${item.price}</p>
    </div>
  `

  electronicsIndex = (electronicsIndex + 1) % electronicsData.length
}


fetch("https://run.mocky.io/v3/4abcb84e-e2ed-406a-a830-c9e87d9cc25c")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("suggestions-container")
    data.forEach((product) => {
      const col = document.createElement("div")
      col.className = "col-md-4"
      const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating)
      col.innerHTML = `
        <div class="card p-3">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text fw-bold text-success">${product.price}</p>
            <div class="star-rating">${stars}</div>
          </div>
        </div>
      `
      container.appendChild(col)
    })
  })
  .catch((err) => console.error("Sana Özel ürün verisi alınamadı:", err))


document.addEventListener("DOMContentLoaded", () => {
  
  const dropdowns = document.querySelectorAll(".nav-item.dropdown")

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 992) {

        this.querySelector(".mega-menu").style.display = "block"
      }
    })

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 992) {
       
        this.querySelector(".mega-menu").style.display = "none"
      }
    })
  })

  
  const dropdownToggleLinks = document.querySelectorAll(".dropdown-toggle")

  dropdownToggleLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
    
        e.preventDefault()
        const dropdownMenu = this.nextElementSibling

        
        document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.classList.remove("show")
          }
        })

       
        dropdownMenu.classList.toggle("show")
      }
    })
  })
})
