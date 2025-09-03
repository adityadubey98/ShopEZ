import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  { name: "Amul Milk", price: 60, offerPrice: 55, image: ["amul_milk_image.png"], category: "Dairy", description: ["Amul fresh milk, 1L pack."], inStock: true },
  { name: "Apple", price: 50, offerPrice: 45, image: ["apple_image.png"], category: "Fruits", description: ["Fresh apples from the farm."], inStock: true },
  { name: "Bakery", price: 120, offerPrice: 110, image: ["bakery_image.png"], category: "Bakery", description: ["Assorted bakery products."], inStock: true },
  { name: "Banana", price: 30, offerPrice: 28, image: ["banana_image_1.png"], category: "Fruits", description: ["Sweet bananas."], inStock: true },
  { name: "Barley", price: 80, offerPrice: 75, image: ["barley_image.png"], category: "Grains", description: ["Nutritious barley grains."], inStock: true },
  { name: "Basmati Rice", price: 120, offerPrice: 110, image: ["basmati_rice_image.png"], category: "Grains", description: ["Premium basmati rice, 1kg."], inStock: true },
  { name: "Brown Bread", price: 40, offerPrice: 38, image: ["brown_bread_image.png"], category: "Bakery", description: ["Healthy brown bread loaf."], inStock: true },
  { name: "Brown Rice", price: 110, offerPrice: 100, image: ["brown_rice_image.png"], category: "Grains", description: ["Whole grain brown rice."], inStock: true },
  { name: "Butter Croissant", price: 60, offerPrice: 55, image: ["butter_croissant_image.png"], category: "Bakery", description: ["Flaky butter croissant."], inStock: true },
  { name: "Carrot", price: 25, offerPrice: 22, image: ["carrot_image.png"], category: "Vegetables", description: ["Crunchy and fresh carrots."], inStock: true },
  { name: "Cheese", price: 90, offerPrice: 85, image: ["cheese_image.png"], category: "Dairy", description: ["Delicious cheese block."], inStock: true },
  { name: "Chocolate Cake", price: 150, offerPrice: 140, image: ["chocolate_cake_image.png"], category: "Bakery", description: ["Rich chocolate cake."], inStock: true },
  { name: "Coca Cola", price: 40, offerPrice: 38, image: ["coca_cola_image.png"], category: "Beverages", description: ["Coca Cola, 750ml bottle."], inStock: true },
  { name: "Dairy Product", price: 80, offerPrice: 75, image: ["dairy_product_image.png"], category: "Dairy", description: ["Assorted dairy products."], inStock: true },
  { name: "Eggs", price: 70, offerPrice: 65, image: ["eggs_image.png"], category: "Dairy", description: ["Farm fresh eggs, pack of 12."], inStock: true },
  { name: "Fanta", price: 40, offerPrice: 38, image: ["fanta_image_1.png"], category: "Beverages", description: ["Fanta, 750ml bottle."], inStock: true },
  { name: "Fresh Fruits", price: 200, offerPrice: 180, image: ["fresh_fruits_image.png"], category: "Fruits", description: ["Assorted fresh fruits."], inStock: true },
  { name: "Grain", price: 70, offerPrice: 65, image: ["grain_image.png"], category: "Grains", description: ["Mixed grains."], inStock: true },
  { name: "Grapes", price: 90, offerPrice: 85, image: ["grapes_image_1.png"], category: "Fruits", description: ["Fresh green grapes."], inStock: true },
  { name: "Knorr Soup", price: 40, offerPrice: 38, image: ["knorr_soup_image.png"], category: "Snacks", description: ["Knorr instant soup."], inStock: true },
  { name: "Maggi", price: 15, offerPrice: 14, image: ["maggi_image.png"], category: "Snacks", description: ["Maggi instant noodles."], inStock: true },
  { name: "Maggi Oats", price: 20, offerPrice: 18, image: ["maggi_oats_image.png"], category: "Snacks", description: ["Maggi oats noodles."], inStock: true },
  { name: "Mango", price: 100, offerPrice: 90, image: ["mango_image_1.png"], category: "Fruits", description: ["Sweet and ripe mangoes."], inStock: true },
  { name: "Onion", price: 30, offerPrice: 28, image: ["onion_image_1.png"], category: "Vegetables", description: ["Fresh onions."], inStock: true },
  { name: "Orange", price: 60, offerPrice: 55, image: ["orange_image.png"], category: "Fruits", description: ["Juicy oranges."], inStock: true },
  { name: "Paneer", price: 200, offerPrice: 180, image: ["paneer_image.png"], category: "Dairy", description: ["Soft and fresh paneer."], inStock: true },
  { name: "Paneer (Block)", price: 210, offerPrice: 190, image: ["paneer_image_2.png"], category: "Dairy", description: ["Paneer block, 500g."], inStock: true },
  { name: "Pepsi", price: 40, offerPrice: 38, image: ["pepsi_image.png"], category: "Beverages", description: ["Pepsi, 750ml bottle."], inStock: true },
  { name: "Pepsi (2)", price: 40, offerPrice: 38, image: ["pepsi_image_2.png"], category: "Beverages", description: ["Pepsi, 1L bottle."], inStock: true },
  { name: "Potato", price: 20, offerPrice: 18, image: ["potato_image_1.png"], category: "Vegetables", description: ["Premium quality potatoes."], inStock: true },
  { name: "Potato (2)", price: 20, offerPrice: 18, image: ["potato_image_2.png"], category: "Vegetables", description: ["Fresh potatoes."], inStock: true },
  { name: "Potato (3)", price: 20, offerPrice: 18, image: ["potato_image_3.png"], category: "Vegetables", description: ["Organic potatoes."], inStock: true },
  { name: "Potato (4)", price: 20, offerPrice: 18, image: ["potato_image_4.png"], category: "Vegetables", description: ["Washed potatoes."], inStock: true },
  { name: "Quinoa", price: 150, offerPrice: 140, image: ["quinoa_image.png"], category: "Grains", description: ["Healthy quinoa, 500g."], inStock: true },
  { name: "Seven Up", price: 40, offerPrice: 38, image: ["seven_up_image_1.png"], category: "Beverages", description: ["Seven Up, 750ml bottle."], inStock: true },
  { name: "Spinach", price: 25, offerPrice: 22, image: ["spinach_image_1.png"], category: "Vegetables", description: ["Fresh spinach leaves."], inStock: true },
  { name: "Sprite", price: 40, offerPrice: 38, image: ["sprite_image_1.png"], category: "Beverages", description: ["Sprite, 750ml bottle."], inStock: true },
  { name: "Tomato", price: 35, offerPrice: 32, image: ["tomato_image.png"], category: "Vegetables", description: ["Juicy red tomatoes."], inStock: true },
  { name: "Tomato (2)", price: 35, offerPrice: 32, image: ["tomato_image_2.png"], category: "Vegetables", description: ["Fresh tomatoes."], inStock: true },
  { name: "Top Ramen", price: 20, offerPrice: 18, image: ["top_ramen_image.png"], category: "Snacks", description: ["Top Ramen noodles."], inStock: true },
  { name: "Vanilla Muffins", price: 80, offerPrice: 75, image: ["vanilla_muffins_image.png"], category: "Bakery", description: ["Soft vanilla muffins, pack of 4."], inStock: true },
  { name: "Wheat Flour", price: 45, offerPrice: 42, image: ["wheat_flour_image.png"], category: "Grains", description: ["Whole wheat flour, 1kg."], inStock: true },
  { name: "Whole Wheat Bread", price: 45, offerPrice: 42, image: ["whole_wheat_bread_image.png"], category: "Bakery", description: ["Whole wheat bread loaf."], inStock: true },
  { name: "Yippee", price: 15, offerPrice: 14, image: ["yippee_image.png"], category: "Snacks", description: ["Yippee instant noodles."], inStock: true },
  { name: "Yogurt", price: 40, offerPrice: 38, image: ["yogurt_image_1.png"], category: "Dairy", description: ["Fresh yogurt cup."], inStock: true }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();