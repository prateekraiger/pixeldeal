import add_icon from "./add_icon.svg";
import apple_earphone_image from "./apple_earphone_image.png";
import arrow_icon from "./arrow_icon.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import asus_laptop_image from "./asus_laptop_image.png";
import bose_headphone_image from "./bose_headphone_image.png";
import box_icon from "./box_icon.svg";
import boy_with_laptop_image from "./boy_with_laptop_image.png";
import cannon_camera_image from "./cannon_camera_image.png";
import cart_icon from "./cart_icon.svg";
import checkmark from "./checkmark.png";
import decrease_arrow from "./decrease_arrow.svg";
import facebook_icon from "./facebook_icon.svg";
import girl_with_earphone_image from "./girl_with_earphone_image.png";
import girl_with_headphone_image from "./girl_with_headphone_image.png";
import header_headphone_image from "./header_headphone_image.png";
import header_macbook_image from "./header_macbook_image.png";
import header_playstation_image from "./header_playstation_image.png";
import heart_icon from "./heart_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import instagram_icon from "./instagram_icon.svg";
import jbl_soundbox_image from "./jbl_soundbox_image.png";
import nextgadgetlogo from "./nextgadgetlogo.png";
import macbook_image from "./macbook_image.png";
import md_controller_image from "./md_controller_image.png";
import menu_icon from "./menu_icon.svg";
import my_location_image from "./my_location_image.svg";
import order_icon from "./order_icon.svg";
import playstation_image from "./playstation_image.png";
import product_details_page_apple_earphone_image1 from "./product_details_page_apple_earphone_image1.png";
import product_details_page_apple_earphone_image2 from "./product_details_page_apple_earphone_image2.png";
import product_details_page_apple_earphone_image3 from "./product_details_page_apple_earphone_image3.png";
import product_details_page_apple_earphone_image4 from "./product_details_page_apple_earphone_image4.png";
import product_details_page_apple_earphone_image5 from "./product_details_page_apple_earphone_image5.png";
import product_list_icon from "./product_list_icon.svg";
import projector_image from "./projector_image.png";
import redirect_icon from "./redirect_icon.svg";
import samsung_s23phone_image from "./samsung_s23phone_image.png";
import search_icon from "./search_icon.svg";
import sm_controller_image from "./sm_controller_image.png";
import sony_airbuds_image from "./sony_airbuds_image.png";
import star_dull_icon from "./star_dull_icon.svg";
import star_icon from "./star_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import upload_area from "./upload_area.png";
import user_icon from "./user_icon.svg";
import venu_watch_image from "./venu_watch_image.png";

export const assets = {
  logo: nextgadgetlogo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  header_headphone_image,
  header_playstation_image,
  header_macbook_image,
  macbook_image,
  bose_headphone_image,
  apple_earphone_image,
  samsung_s23phone_image,
  venu_watch_image,
  upload_area,
  cannon_camera_image,
  sony_airbuds_image,
  asus_laptop_image,
  projector_image,
  playstation_image,
  girl_with_headphone_image,
  girl_with_earphone_image,
  md_controller_image,
  sm_controller_image,
  jbl_soundbox_image,
  boy_with_laptop_image,
  product_details_page_apple_earphone_image1,
  product_details_page_apple_earphone_image2,
  product_details_page_apple_earphone_image3,
  product_details_page_apple_earphone_image4,
  product_details_page_apple_earphone_image5,
  checkmark
};

export const productAssets = [
  {
    id: 1,
    name: "Apple Earphones",
    price: "₹24,999",
    imgSrc: apple_earphone_image,
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    price: "₹29,499",
    imgSrc: bose_headphone_image,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: "₹89,999",
    imgSrc: samsung_s23phone_image,
  },
  {
    id: 4,
    name: "Garmin Venu 2",
    price: "₹44,990",
    imgSrc: venu_watch_image,
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: "₹54,990",
    imgSrc: playstation_image,
  },
  {
    id: 6,
    name: "Canon EOS R5",
    price: "₹3,39,999",
    imgSrc: cannon_camera_image,
  },
  {
    id: 7,
    name: "MacBook Pro 16",
    price: "₹2,89,900",
    imgSrc: macbook_image,
  },
  {
    id: 8,
    name: "Sony WF-1000XM5",
    price: "₹24,990",
    imgSrc: sony_airbuds_image,
  },
  {
    id: 9,
    name: "Samsung Projector 4k",
    price: "₹1,49,990",
    imgSrc: projector_image,
  },
  {
    id: 10,
    name: "ASUS ROG Zephyrus G16",
    price: "₹1,99,990",
    imgSrc: asus_laptop_image,
  },
];

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
      <rect width="18" height="18" fill="white" />
      </defs>
    </svg>

  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);

export const productsDummyData = [
  {
    "_id": "67a1f4e43f34a77b6dde9144",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Apple AirPods Pro 2nd gen",
    "description": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
    "price": 4399.99,
    "offerPrice": 3999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k4dafzhwhgcn5tnoylrw.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/j212frakb8hdrhvhajhg.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/imwuugqxsajuwqpkegb5.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k1oqaslw5tb3ebw01vvj.webp"
    ],
    "category": "Earphone",
    "date": 1738667236865,
    "__v": 0
  },
  {
    "_id": "67a1f52e3f34a77b6dde914a",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Bose QuietComfort 45",
    "description": "The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.",
    "price": 4239.99,
    "offerPrice": 3299.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp"
    ],
    "category": "Headphone",
    "date": 1738667310300,
    "__v": 0
  },
  {
    "_id": "67a1f5663f34a77b6dde914c",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Samsung Galaxy S23",
    "description": "The Samsung Galaxy S23 offers an all-encompassing mobile experience with its advanced AMOLED display, offering vibrant visuals and smooth interactions. Equipped with top-of-the-line fitness tracking features and cutting-edge technology, this phone delivers outstanding performance. With powerful hardware, a sleek design, and long battery life, the S23 is perfect for those who demand the best in mobile innovation.",
    "price": 89999.99,
    "offerPrice": 89999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/xjd4eprpwqs7odbera1w.webp"
    ],
    "category": "Smartphone",
    "date": 1738667366224,
    "__v": 0
  },
  {
    "_id": "67a1f5993f34a77b6dde914e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Garmin Venu 2",
    "description": "The Garmin Venu 2 smartwatch blends advanced fitness tracking with sophisticated design, offering a wealth of features such as heart rate monitoring, GPS, and sleep tracking. Built with a 24-hour battery life, this watch is ideal for fitness enthusiasts and anyone looking to enhance their daily lifestyle. With a stunning AMOLED display and customizable watch faces, the Venu 2 combines technology with style seamlessly.",
    "price": 3990,
    "offerPrice": 3490,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/hdfi4u3fmprazpnrnaga.webp"
    ],
    "category": "Earphone",
    "date": 1738667417511,
    "__v": 0
  },
  {
    "_id": "67a1f5ef3f34a77b6dde9150",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "PlayStation 5",
    "description": "The PlayStation 5 takes gaming to the next level with ultra-HD graphics, a powerful 825GB SSD, and ray tracing technology for realistic visuals. Whether you're into high-action games or immersive storytelling, the PS5 delivers fast loading times, seamless gameplay, and stunning visuals. It's a must-have for any serious gamer looking for the ultimate gaming experience.",
    "price": 12599.99,
    "offerPrice": 11599.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/dd3l13vfoartrgbvkkh5.webp"
    ],
    "category": "Accessories",
    "date": 1738667503075,
    "__v": 0
  },
  {
    "_id": "67a1f70c3f34a77b6dde9156",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Canon EOS R5",
    "description": "The Canon EOS R5 is a game-changing mirrorless camera with a 45MP full-frame sensor, offering ultra-high resolution and the ability to shoot 8K video. Whether you're capturing professional-quality stills or cinematic video footage, this camera delivers exceptional clarity, speed, and color accuracy. With advanced autofocus and in-body stabilization, the R5 is ideal for photographers and videographers alike.",
    "price": 4199.99,
    "offerPrice": 3899.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/r5h370zuujvrw461c6wy.webp"
    ],
    "category": "Camera",
    "date": 1738667788883,
    "__v": 0
  },
  {
    "_id": "67a1f7c93f34a77b6dde915a",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "MacBook Pro 16",
    "description": "The MacBook Pro 16, powered by Apple's M2 Pro chip, offers outstanding performance with 16GB RAM and a 512GB SSD. Whether you're editing high-resolution video, developing software, or multitasking with ease, this laptop can handle the toughest tasks. It features a stunning Retina display with True Tone technology, making it a top choice for professionals in creative industries or anyone who demands premium performance in a portable form.",
    "price": 62899.99,
    "offerPrice": 59999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp"
    ],
    "category": "Laptop",
    "date": 1738667977644,
    "__v": 0
  },
  {
    "_id": "67a1f8363f34a77b6dde915c",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Sony WF-1000XM5",
    "description": "Sony WF-1000XM5 true wireless earbuds deliver immersive sound with Hi-Res Audio and advanced noise cancellation technology. Designed for comfort and quality, they provide a stable, snug fit for a secure listening experience. Whether you're working out or traveling, these earbuds will keep you connected with the world around you while enjoying rich, clear sound.",
    "price": 3499.99,
    "offerPrice": 2999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/e3zjaupyumdkladmytke.webp"
    ],
    "category": "Earphone",
    "date": 1738668086331,
    "__v": 0
  },
  {
    "_id": "67a1f85e3f34a77b6dde915e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Samsung Projector 4k",
    "description": "The Samsung 4K Projector offers an immersive cinematic experience with ultra-high-definition visuals and realistic color accuracy. Equipped with a built-in speaker, it delivers rich sound quality to complement its stunning 4K resolution. Perfect for movie nights, gaming, or presentations, this projector is the ultimate choice for creating an at-home theater experience or professional setting.",
    "price": 7699.99,
    "offerPrice": 6999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/qqdcly8a8vkyciy9g0bw.webp"
    ],
    "category": "Accessories",
    "date": 1738668126660,
    "__v": 0
  },
  {
    "_id": "67a1fa4b3f34a77b6dde9166",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "ASUS ROG Zephyrus G16",
    "description": "The ASUS ROG Zephyrus G16 gaming laptop is powered by the Intel Core i9 processor and features an RTX 4070 GPU, delivering top-tier gaming and performance. With 16GB of RAM and a 1TB SSD, this laptop is designed for gamers who demand extreme power, speed, and storage. Equipped with a stunning 16-inch display, it's built to handle the most demanding titles and applications with ease.",
    "price": 40199.99,
    "offerPrice": 39999.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/wig1urqgnkeyp4t2rtso.webp"
    ],
    "category": "Laptop",
    "date": 1738668619198,
    "__v": 0
  },
  {
    "_id": "prod_1f7e8c10a01a4b2b9c1a1a01",
    "userId": "user_3a2f7b1c8e6d4f0a9b2c1d3e",
    "name": "Portronics Hydra 10",
    "description": "It is Mechanical Wireless Gaming Keyboard with Bluetooth 5.0 + 2.4 GHz, RGB Lights 16.8 Million Colors, Type C Charging, Compatible with PCs, Smartphones and Tablets(Red)",
    "price": 3000,
    "offerPrice": 2799,
    "image": [
      "https://m.media-amazon.com/images/I/61+5DVCujOL._SX679_.jpg"
    ],
    "category": "keyboard",
    "date": 1745732020000,
    "__v": 0
  },
  {
    "_id": "prod_2a9d7f3b4c6e5d1f8e7c2b01",
    "userId": "user_4b5d6e7f8a9c1b2d3e4f5a6b",
    "name": "EvoFox Phantom Air Mouse",
    "description": "EvoFox Phantom Air Ultra Lightweight Gaming Mouse | Upto 1000Hz Polling Rate, 7000 FPS, 12800 DPI | Honeycomb RGB Lighting | Fully Programmable with Windows Software & On-Board Memory | White",
    "price": 1000,
    "offerPrice": 899,
    "image": [
      "https://m.media-amazon.com/images/I/31l7ZpeAMDL._SX300_SY300_QL70_FMwebp_.jpg"
    ],
    "category": "mouse",
    "date": 1745732030000,
    "__v": 0
  },
  {
    "_id": "prod_3c8e7d2a1b4f6e9c7d8a2e01",
    "userId": "user_5c6d7e8f9a0b1c2d3e4f5b6a",
    "name": "Beats Studio Buds",
    "description": "Beats Studio Buds - Wireless Bluetooth Noise Cancelling Earbuds - Up to 8H Battery Life, Up to 24H w Charging Case, IPX4 Rating, Sweat Resistant, Apple & Android Compatible, Built-in Mic - White",
    "price": 16999,
    "offerPrice": 14999,
    "image": [
      "https://m.media-amazon.com/images/I/41NxYgnqssL._SX679_.jpg"
    ],
    "category": "earbuds",
    "date": 1745732040000,
    "__v": 0
  },
  {
    "_id": "prod_4d7c6b5a3e2f1d8c9b0a1e01",
    "userId": "user_6d7e8f9a0b1c2d3e4f5b6c7d",
    "name": "HP Omen 16",
    "description": "HP Omen, AMD Ryzen 7 7840Hs/16.1\"(40.9cm) AI Gaming Laptop 7Ms Response Time(8gb RTX 4060/16GB DDR5/SSD,1TB) FHD,IPS,165Hz,300Nits(win11,Black,2.32kg),Xd0020Ax",
    "price": 108990,
    "offerPrice": 99999,
    "image": [
      "https://m.media-amazon.com/images/I/71S1eXJmIAL._SX679_.jpg"
    ],
    "category": "laptop",
    "date": 1745732050000,
    "__v": 0
  },
  {
    "_id": "prod_5e6d4c3b2a1f8e7c9d0b1a01",
    "userId": "user_7e8f9a0b1c2d3e4f5b6c7d8e",
    "name": "MSI MAG 275QF Monitor",
    "description": "MSI MAG 275QF 27-inch 2K Gaming Monitor, 2560 x 1440 (UHD), 0.5ms Response Time, 180Hz, HDR Ready, HDMI, DP Port, Tilt Adjustable",
    "price": 28140,
    "offerPrice": 24999,
    "image": [
      "https://m.media-amazon.com/images/I/71owVqpF3-L._SX522_.jpg"
    ],
    "category": "monitors",
    "date": 1745732060000,
    "__v": 0
  }
]

export const userDummyData = {
  "_id": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "NextGadget",
  "email": "admin@example.com",
  "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  "cartItems": {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  "__v": 0
}

export const orderDummyData = [
  {
    "_id": "67a20934b3db72db5cc77b2b",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Apple AirPods Pro",
          "description": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          "price": 5499.99,
          "offerPrice": 3999.99,
          "image": [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png"
          ],
          "category": "Earphone",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20934b3db72db5cc77b2c"
      }
    ],
    "amount": 406.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "NextGadget",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "bhopal",
      "state": "MP",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672426822,
    "__v": 0
  },
  {
    "_id": "67a20949b3db72db5cc77b2e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f52e3f34a77b6dde914a",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Bose QuietComfort 45",
          "description": "The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.",
          "price": 4299.99,
          "offerPrice": 3299.99,
          "image": [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667311/m16coelz8ivkk9f0nwrz.png"
          ],
          "category": "Headphone",
          "date": 1738667310300,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20949b3db72db5cc77b2f"
      }
    ],
    "amount": 335.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "NextGadget",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "bhopal",
      "state": "MP",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672448031,
    "__v": 0
  },
  {
    "_id": "67a209bab3db72db5cc77b34",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Apple AirPods Pro",
          "description": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          "price": 4999.99,
          "offerPrice": 3999.99,
          "image": [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png"
          ],
          "category": "Earphone",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a209bab3db72db5cc77b35"
      }
    ],
    "amount": 406.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "NextGadget",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "bhopal",
      "state": "MP",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672560698,
    "__v": 0
  },
  {
    "_id": "67a209cbb3db72db5cc77b36",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f5e23f34a77b6dde914b",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "NextGadget Mechanical Keyboard",
          "description": "The NextGadget Mechanical Keyboard offers a tactile typing experience with customizable RGB backlighting. Perfect for gamers and typists alike, it features durable switches and a sleek design.",
          "price": 899.99,
          "offerPrice": 699.99,
          "image": [
            "https://www.portronics.com/cdn/shop/files/Hydra-10_1200x1200_Red_1_1440x.jpg?v=1733832004"
          ],
          "category": "Keyboard",
          "date": 1738673000000,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a209cbb3db72db5cc77b37"
      }
    ],
    "amount": 699.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "NextGadget",
      "phoneNumber": "+91 9497886789",
      "pincode": 654321,
      "area": "Main Road, 123 Street, G Block",
      "city": "bhopal",
      "state": "MP",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738673000000,
    "__v": 0
  }
]

export const addressDummyData = [
  {
    "_id": "67a1e4233f34a77b6dde9055",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "fullName": "NextGadget",
    "phoneNumber": "0123456789",
    "pincode": 654321,
    "area": "Main Road , 123 Street, G Block",
    "city": "bhopal",
    "state": "MP",
    "__v": 0
  }
]