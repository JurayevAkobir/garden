window.addEventListener("DOMContentLoaded", () => {
    // ! Loader 
    const loader = document.querySelector(".loader_box");
    setTimeout(() => {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500)
        loader.style.opacity = "0";

    }, 2000)
    // ! Tabs

    const tabContent = document.querySelectorAll(".categories_boxes"),
        parentItem = document.querySelector(".tabheader_items"),
        tabHeaderItem = document.querySelectorAll(".tabheader_item");

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show_two");
        })

        tabHeaderItem.forEach(item => {
            item.classList.remove("tabheader_item__active");
        })
    }

    function showTabContent(i = 0) {
        tabContent.forEach(item => {
            tabContent[i].classList.remove("hide");
            tabContent[i].classList.add("show_two");
            tabContent[i].classList.add("fade");

            tabHeaderItem[i].classList.add("tabheader_item__active")
        })
    }
    hideTabContent();
    showTabContent();

    parentItem.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains("tabheader_item")) {
            tabHeaderItem.forEach((item, index) => {
                if (event.target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    })

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
