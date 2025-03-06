// PRODUCT DATA

// FOR POULTRY (SIZE  - 1 is xs | 2 is small | 3 is meduim |  4 is large | 5 is xl )
// FOR SEAFOODS (SIZE  - 1 (3 pieces for 1 kilo) is meduim | 2  (2 pieces per kilo )is large | 3 (1 piece is 3/4 + 1 to complete is kilo ) is xl | 4 (bundle of fish)  )

export const product_data: any[] = [
  //POULTRY
  {
    id: "1",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://www.nicepng.com/png/full/413-4139246_white-egg-png.png",
    price: 120,
    desc: "1 tray Egg White",
    size: 1,
    purchase_option: 1, // 1 tray
    stock: 205,
  },
  {
    id: "2",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MepF2xywqdXTonaOtLxYqTqIg5IFqg06G1amuKWtG4jRylsZ4boIeE_6xwtdIhscSHA&usqp=CAU",
    price: 60,
    desc: "1/2 tray Egg White",
    size: 1,
    purchase_option: 0.5, // 1/2 tray
    stock: 190,
  },
  {
    id: "3",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://www.nicepng.com/png/full/413-4139246_white-egg-png.png",
    price: 150,
    desc: "1 tray Egg White",
    size: 2,
    purchase_option: 1, // 1 tray
    stock: 210,
  },
  {
    id: "4",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MepF2xywqdXTonaOtLxYqTqIg5IFqg06G1amuKWtG4jRylsZ4boIeE_6xwtdIhscSHA&usqp=CAU",
    price: 75,
    desc: "1/2 tray Egg White",
    size: 2,
    purchase_option: 0.5, // 1/2 tray
    stock: 100,
  },
  {
    id: "5",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://www.nicepng.com/png/full/413-4139246_white-egg-png.png",
    price: 175,
    desc: "1 tray Egg White",
    size: 3,
    purchase_option: 1, // 1 tray
    stock: 50,
  },
  {
    id: "6",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MepF2xywqdXTonaOtLxYqTqIg5IFqg06G1amuKWtG4jRylsZ4boIeE_6xwtdIhscSHA&usqp=CAU",
    price: 85,
    desc: "1/2 tray Egg White",
    size: 3,
    purchase_option: 0.5, // 1/2 tray
    stock: 80,
  },
  {
    id: "7",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://www.nicepng.com/png/full/413-4139246_white-egg-png.png",
    price: 200,
    desc: "1 tray Egg White",
    size: 4,
    purchase_option: 1, // 1 tray
    stock: 25,
  },
  {
    id: "8",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MepF2xywqdXTonaOtLxYqTqIg5IFqg06G1amuKWtG4jRylsZ4boIeE_6xwtdIhscSHA&usqp=CAU",
    price: 100,
    desc: "1/2 tray Egg White",
    size: 4,
    purchase_option: 0.5, // 1/2 tray
    stock: 50,
  },
  {
    id: "9",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://www.nicepng.com/png/full/413-4139246_white-egg-png.png",
    price: 225,
    desc: "1 tray Egg White",
    size: 5,
    purchase_option: 1, // 1 tray
    stock: 215,
  },
  {
    id: "10",
    productType: "Poultry",
    product_name: "Eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MepF2xywqdXTonaOtLxYqTqIg5IFqg06G1amuKWtG4jRylsZ4boIeE_6xwtdIhscSHA&usqp=CAU",
    price: 225,
    desc: "1/2 tray Egg White",
    size: 5,
    purchase_option: 0.5, // 1/2 tray
    stock: 5,
  },

  // FISH
  {
    id: "11",
    productType: "Seafoods",
    product_name: "Bangus",
    img: "https://www.fishtaseafood.com/cdn/shop/products/Banguswholecleaned2-3pcs4.png?v=1692667100&width=1000",
    price: 250,
    desc: "3 pcs 1 kilo Bangus ",
    size: 1,
    stock: 21,
  },
  {
    id: "12",
    productType: "Seafoods",
    product_name: "Bangus",
    img: "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/8/0/80113100_mikisa_bangus_small.jpg",
    price: 280,
    desc: "2 pcs 1 kilo Bangus ",
    size: 2,
    stock: 25,
  },
  {
    id: "13",
    productType: "Seafoods",
    product_name: "Bangus",
    img: "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/8/0/80113100_mikisa_bangus_small.jpg",
    price: 300,
    desc: "2 pcs 1 kilo Bangus ",
    size: 3,
    stock: 400,
  },
  {
    id: "14",
    productType: "Seafoods",
    product_name: "Bangus",
    img: "https://pbs.twimg.com/media/DTEk7kbVQAArOTU.jpg:large",
    price: 10000,
    desc: "1 Bundle Bangus (Large) ",
    size: 4,
    stock: 252,
  },
];
