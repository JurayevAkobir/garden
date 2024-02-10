window.addEventListener("DOMContentLoaded", () => {
    "use strict"

    // // ! Tabs start
    // const TabContent = document.querySelectorAll(".categories_boxes"),
    //     tabHeaderItem = document.querySelectorAll(".tabheader_item"),
    //     parentItems = document.querySelectorAll(".tabheader_items");


    // function hideTabContent() {
    //     TabContent.forEach(item => {
    //         item.classList.add("hide")
    //         item.classList.remove("show_two")
    //     });

    //     tabHeaderItem.forEach(item => {
    //         item.classList.remove("tabheader_item__active")
    //     })
    // }

    // function showTabContent(i = 0) {
    //     TabContent[i].classList.add("show_two")
    //     TabContent[i].classList.remove("hide")

    //     tabHeaderItem[i].classList.add("tabheader_item__active")
    // }
    // hideTabContent();
    // showTabContent();

    // parentItems.addEventListener("click", (event) => {
    //     if (event.target && event.target.classList.contains('tabheader_item')) {
    //         console.log(event.target);
    //         tabHeaderItem.forEach(item => {
    //             console.log(item);
    //         });
    //     }
    // })

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



