const products = [
    {
        name: "Cetaphil Gentle Skin Hydrating Face Wash",
        description: "Cetaphil Gentle Skin Hydrating Face Wash 118ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin",
        price: 353,
        imgurl: "https://m.media-amazon.com/images/I/61Ke4uzk1PL._SL1500_.jpg",
        offer: "23"
    },
    {
        name: "MEENAZ Brass copper Gold kanchain",
        description: "MEENAZ Brass copper Gold kanchain 3 layer long bridal wedding ear kan chain Champaswaralu earchains Ear Chains for Hair Jhumka Jhumki kanoti moti pearl Traditional Earrings for women girls Golden-M020 ",
        price: "168",
        imgurl: "https://m.media-amazon.com/images/I/71YUwBnGlaL._SY625_.jpg",
        offer: "94",
    },
    {
        name: "Boldfit Badminton Shoes",
        description: "Boldfit Badminton Shoes for Man Lightweight Non Marking Shoes for Badminton Breathable Anti Skid Shoe for Man Shuttle Non Marking Indoor Shoe for Pickleball, Tennis, Padel",
        price: "679",
        imgurl: "https://m.media-amazon.com/images/I/61AbHzB9gUL._SY625_.jpg",
        offer: "81",
    },
    {
        name: "ATOM ALISTON K1 Series Digital Kitchen Weighing Scale",
        description: "ATOM ALISTON K1 Series Digital Kitchen Weighing Scale 10 kg, Electronic Weight Machine with LCD Display for Baking, Cooking, Food & Diet, SF-400/A121. 6Months Warranty (Colour May Vary)",
        price: "215",
        imgurl: "https://m.media-amazon.com/images/I/71775fRr+gL._SL1500_.jpg",
        offer: "60",
    },
    {
        name: "Safari Genius Alley 55cm Cabin Trolley",
        description: "Safari Genius Alley 55cm Cabin Trolley Bag Hard Case Polypropylene, 4 Spinner Wheels, 360 Degree Wheeling Carry on Luggage, Travel Bag, Suitcase, Trolley Bags, Flintstone ",
        price: "1499",
        imgurl: "https://m.media-amazon.com/images/I/61IyXoXbd4L._SL1500_.jpg",
        offer: "75",
        year: 2025
    }
]

// document.writeln(products);
// document.writeln("<br>");

// for (let i = 0; i < products.length; i++) {
//     // document.writeln(products[i].name + "<br>")
//     for (const key in products[i]) {
//         if (products[i].hasOwnProperty(key)) {
//             // console.log(key, products[i][key])
//             document.writeln(key)
//             document.writeln(" = " + products[i][key])
//             document.writeln("<br>")
//         }
//     }
//     document.writeln("<br>")
// }

// for (const product of products) {
//     // document.writeln(product.name + "<br>")
//     for (const key in product) {
//         if (product.hasOwnProperty(key)) {
//             // console.log(key, product[key])
//             document.writeln(key) 
//             document.writeln(" = " + product[key])
//             document.writeln("<br>")
//         }
//     }
//     document.writeln("<br>")
// }


// for (const product of products) {
//     document.writeln("name = " + product.name +"<br>")
//     document.writeln("description = " + product.description +"<br>")
//     document.writeln("price = " + product.price +"<br>")
//     document.writeln("year = " + product.year +"<br>")
//     document.writeln("<br>")
// }

// const cols = [
//   document.getElementById("col-1"),
//   document.getElementById("col-2"),
//   document.getElementById("col-3"),
//   document.getElementById("col-4"),
//   document.getElementById("col-5"),
// ];

// function productCard(product) {
//   return `
//     <div>
//       <img src="${product.imgurl}" class="img-fluid " />
//       <h6>${product.name}</h6>
//       <p>${product.description}</p>
//       <p>${product.price} <span>(${product.offer}% OFF)</span></p>
//     </div>
//   `;
// }

// for (let i = 0; i < products.length; i++) {
//   // document.getElementsByClassName("product-card")[i].innerHTML = productCard(products[i]);
//   document.getElementsByClassName("product-card")[i].innerHTML = `
//       <img src="${products[i].imgurl}" class="img-fluid " />
//       <h6>${products[i].name}</h6>
//       <p>${products[i].description}</p>
//       <p>${products[i].price} <span>(${products[i].offer}% OFF)</span></p>
//   `;
// }

products.map((product, i)=>{
  document.getElementsByClassName("product-card")[i].innerHTML = `
    <div>
      <img src="${product.imgurl}" class="img-fluid " />
      <h6>${product.name}</h6>
      <p>${product.description}</p>
      <p>${product.price} <span>(${product.offer}% OFF)</span></p>
    </div>
  `;

  return document.getElementsByClassName("product-card")[i]
})