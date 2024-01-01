const productsWrapper = document.querySelector("#producstWrapper");

fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => RenderProducts(data));

const RenderProducts = (data) => {
    productsWrapper.innerHTML = data.map((e) => (
        `
        <div id="card" class="card w-[250px] p-[20px] shadow-xl">
            <img src="${e.img}" class="w-[150px] mx-auto mb-[20px]" alt="" />
            <div class="flex items-end gap-5 mb-5">
                <h1 class="text-2xl">${e.price}</h1>
                <strike class="text-base">${e.strike}</strike>
            </div>
            <p class="font-roboto-bold">${e.desc}</p>
        </div>
        `
    )).join("")
}


const newProducstWrapper = document.getElementById("newProducstWrapper");

fetch("http://localhost:3000/new_products")
    .then(res => res.json())
    .then(data => newProducstWrapperRender(data));

const newProducstWrapperRender = (data) => {
    newProducstWrapper.innerHTML = data.map((e) => (
        `
        <div id="card" class="card w-[250px] p-[20px] shadow-xl">
            <img src="${e.img}" class="w-[150px] mx-auto mb-[20px]" alt="" />
            <div class="flex items-star flex-col gap-2 mb-5">
                <h1 class="text-2xl font-roboto-bold">${e.price}</h1>
                <strike class="text-base">${e.strike}</strike>
            </div>
            <p class="font-roboto-bold">${e.desc}</p>
        </div>
        `
    )).join("")
}

const accBtn = document.querySelector("#acc-btn");
const accordion = document.querySelector(".accordion");
const forOpacity = document.querySelector(".forOpacity")
accBtn.addEventListener("click", () => {
    accordion.classList.toggle('accordioncha');
    forOpacity.classList.toggle("forOpacity100")
})

const watchedWrapper = document.querySelector(".watchedWrapper");

fetch(" http://localhost:3000/new_products")
    .then(res => res.json())
    .then(data => watchedWrapperRender(data))

function watchedWrapperRender(data) {
    watchedWrapper.innerHTML = data.slice(0,4).map((e) => (
        `
        <div class="card w-[300px] bg-white h-[220px] px-[12px] py-[33px] shadow-lg flex items-start">
            <img class="w-[108px] h-[108px]" src="${e.img}"/>
            <div class="flex flex-col gap-5">
                <p class="text-xl font-roboto-medium">${e.desc}</p>
                <p>${e.price}</p>
            </div>
        </div>
        `
    )).join("")
}