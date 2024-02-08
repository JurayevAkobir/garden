// ! Categories start
const categoriesFour = [
    {
        name: "Fertilizer",
        img: "./images/category_1.jpg"
    },
    {
        name: "Protective products and septic tanks",
        img: "./images/category_2.png"
    },
    {
        name: "Planting material",
        img: "./images/category_3.png"
    },
    {
        name: "Tools and equipment",
        img: "./images/category_4.png"
    },
    {
        name: "Pots and planters",
        img: "./images/category_5.png"
    }
];
const categoriesBoxesFour = document.querySelector(".categories_boxes_2")
categoriesFour.forEach((item, indx) => {
    categoriesBoxesFour.innerHTML += `
<div class="categorie-box">
    <img src="${item.img}" alt="category_1">
    <h4>${item.name}</h4>
</div>
`
});
// * Categories end
