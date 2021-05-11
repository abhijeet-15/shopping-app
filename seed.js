const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "i-Phone 12",
        img: "https://images.unsplash.com/photo-1589570844624-8606f81f7eb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:900,
        desc:"Apple's latest iphone comes with A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance."
    },
    {
        name: "Macbook Air",
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:1000,
        desc:"Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go."
    },
    {
        name: "Macbook Pro",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:1200,
        desc:"Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive Retina display, super-fast processors, advanced graphics, the largest battery capacity ever in a MacBook Pro, Magic Keyboard and massive storage, it’s the ultimate pro notebook for the ultimate user."
    },
    {
        name: "i-Pad",
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:600,
        desc:"The new iPad combines tremendous capability with unmatched ease of use and versatility. With the powerful A12 Bionic chip, support for Apple Pencil and the Smart Keyboard, and the amazing new things you can do with iPadOS 14, now there’s even more to love about iPad."
    },
    {
        name: "Apple Watch",
        img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:300,
        desc:"A breath offresh innovation. Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services."
    },
    {
        name: "Apple TV",
        img: "https://images.unsplash.com/photo-1593528845628-646b40819063?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB0dnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:300,
        desc:"Apple TV is a digital media player and microconsole developed and sold by Apple Inc. It is a small network appliance and entertainment device that can receive digital data for visual and audio content such as music, video, video games, or the screen display of certain other devices, and play it on a connected television set or other video display."
    },
    {
        name: "Apple Music",
        img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:500,
        desc:"Music Lives Here!!! Discover all the ways you can showcase content on Apple Music. Access MusicKit, RSS feeds, widgets, brand guidelines, badge art and more."
    },
    {
        name: "Air Pods",
        img: "https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:450,
        desc:"With more talk time, voice-activated Siri access — and a wireless charging case — AirPods deliver an unparalleled wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic."
    }
];



const seedDB = async ()=>{
   await Product.insertMany(products);
   console.log("DB seeded");
}

module.exports = seedDB;