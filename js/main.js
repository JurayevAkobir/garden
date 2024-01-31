// ! Categories start
const categories = [
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
        reyting: "2",
        skidka: "60%",
        img: "./images/category_4.png"
    }
];

const categoriesBoxes = document.querySelector(".categories_boxes")

categories.forEach((item, indx) => {
    categoriesBoxes.innerHTML += `
    <div class="categorie-box">
		<img src="${item.img}" alt="category_1">
		<h4>${item.name}</h4>
    </div>
    `
});
// * Categories end


// ! Sale start
const saleProducts = [
    {
        name: "Decorative forged bridge",
        oldPrice: "$1000",
        newPrice: "$500",
        discount: "-50%",
        img: "./images/sale_1.png"
    },
    {
        name: "Flower basket",
        oldPrice: "$150",
        newPrice: "$100",
        discount: "-34%",
        img: "./images/sale_2.png"
    },
    {
        name: "Decorative forged bridge",
        oldPrice: "$200",
        newPrice: "$150",
        discount: "-25%",
        img: "./images/sale_3.png"
    },
    {
        name: "Decorative forged bridge",
        oldPrice: "$240",
        newPrice: "$199",
        discount: "-17%",
        img: "./images/sale_4.png"
    }
];

const saleBoxes = document.querySelector(".sale_boxes")

saleProducts.forEach((saleBox, indx) => {
    saleBoxes.innerHTML += `
    <div class="sale_box">
		<img src="${saleBox.img}" alt="sale_1">
		<div class="sale_texts">
			<h4>${saleBox.name}</h4>
			<h2>${saleBox.newPrice}</h2>
			<del>${saleBox.oldPrice}</del>
		</div>
		<button class="btn btn_position">${saleBox.discount}</button>
	</div>
    `
});


