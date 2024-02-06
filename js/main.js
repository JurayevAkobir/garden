window.addEventListener("DOMContentLoaded", () => {
    "use strict"

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

    // ! Categories-2 start
    const categoriesTwo = [
        {
            name: "Fertilizer 2",
            img: "./images/category_4.png"
        },
        {
            name: "Protective products and septic tanks",
            img: "./images/category_1.jpg"
        },
        {
            name: "Planting material",
            img: "./images/category_3.png"
        },
        {
            name: "Tools and equipment",
            img: "./images/category_2.png"
        }
    ];
    const categoriesBoxesTwo = document.querySelector(".categories_boxes")
    categoriesTwo.forEach((item, indx) => {
        categoriesBoxesTwo.innerHTML += `
    <div class="categorie-box">
		<img src="${item.img}" alt="category_1">
		<h4>${item.name}</h4>
    </div>
    `
    });
    // * Categories-2 end

    // ! Categories-3 start
    const categoriesThree = [
        {
            name: "Fertilizer 3",
            img: "./images/category_2.png"
        },
        {
            name: "Protective products and septic tanks",
            img: "./images/category_4.png"
        },
        {
            name: "Planting material",
            img: "./images/category_1.jpg"
        },
        {
            name: "Tools and equipment",
            img: "./images/category_3.png"

        }
    ];
    const categoriesBoxesThree = document.querySelector(".categories_boxes")
    categoriesThree.forEach((item, indx) => {
        categoriesBoxesThree.innerHTML += `
    <div class="categorie-box">
		<img src="${item.img}" alt="category_1">
		<h4>${item.name}</h4>
    </div>
    `
    });
    // * Categories-3 end


    // ! Tabs start
    const TabContent = document.querySelectorAll(".categories_boxes")

    function hideTabContent() {
        TabContent.forEach(item => {
            item.classList.add("hide")
        });
    }
    hideTabContent()

    // ! Sale start
    const saleProducts = [
        {
            name: "Decorative forged ...",
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
            name: "Aquarium lock",
            oldPrice: "$200",
            newPrice: "$150",
            discount: "-25%",
            img: "./images/sale_3.png"
        },
        {
            name: "Secateurs",
            oldPrice: "$240",
            newPrice: "$199",
            discount: "-50%",
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
			<h2 class="h_two">${saleBox.newPrice}</h2>
			<del>${saleBox.oldPrice}</del>
		</div>
		<button class="btn btn_position">${saleBox.discount}</button>
	</div>
    `
    });

})



