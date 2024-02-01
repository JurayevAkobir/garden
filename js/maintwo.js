// ! Sale2 start
const saleProductsTwo = [
    {
        name: "Secateurs",
        oldPrice: "$240",
        newPrice: "$199",
        discount: "-17%",
        btn: "Add to cart",
        img: "./images/sale_4.png"
    },
    {
        name: "Flower basket",
        oldPrice: "$35",
        newPrice: "$26",
        discount: "-26%",
        btn: "Add to cart",
        img: "./images/tool_1.png"
    },
    {
        name: "Gloves (black)",
        oldPrice: "$14",
        newPrice: "$9",
        discount: "-36%",
        btn: "Add to cart",
        img: "./images/qolqop.png"
    },
    {
        name: "Sickle-shaped hacksaw",
        newPrice: "$55",
        oldPrice: "$14",
        discount: "-17%",
        btn: "Add to cart",
        img: "./images/tool_2.png"
    }
];


const saleBoxesTwo = document.querySelector(".sale_boxes-js")

    saleProductsTwo.forEach((saleBoxTwo, indx) => {
        saleBoxesTwo.innerHTML += `
        <div class="sale_box">
             <img src="${saleBoxTwo.img}" alt="sale_4">
            <div class="sale_texts">
                <h4>${saleBoxTwo.name}</h4>
                <h2>${saleBoxTwo.newPrice}</h2>
                <del>${saleBoxTwo.oldPrice}</del>
            </div>
            <button class="btn btn_position">${saleBoxTwo.discount}</button>
            <button class="btn btn_hover">${saleBoxTwo.btn}</button>
        </div>
        `
    });


    const saleProductsTwoBox = [
        {
            name: "Bayonet shovel",
            newPrice: "$180",
            btn: "Add to cart",
            img: "./images/tool_3.png"
        },
        {
            name: "Garden pitchfork",
            newPrice: "$179",
            btn: "Add to cart",
            img: "./images/tool_4.png"
        },
        {
            name: "Barbell",
            newPrice: "$12",
            btn: "Add to cart",
            img: "./images/tool_5.png"
        },
        {
            name: "Souvenir thermometer",
            newPrice: "$98",
            btn: "Add to cart",
            img: "./images/tool_6.png"
        }
    ];
    
    
    const saleBoxesTwoBox = document.querySelector(".sale_boxes_js")
    
        saleProductsTwoBox.forEach((saleBoxtwo, indx) => {
            saleBoxesTwoBox.innerHTML += `
            <div class="sale_box">
                 <img src="${saleBoxtwo.img}" alt="sale_4">
                <div class="sale_texts">
                    <h4>${saleBoxtwo.name}</h4>
                    <h2>${saleBoxtwo.newPrice}</h2>
                </div>
                <button class="btn btn_hover">${saleBoxtwo.btn}</button>
            </div>
            `
        });
    