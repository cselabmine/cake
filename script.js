
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to your cart successfully! ❤️");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some delicious cakes.");
        return;
    }

    let message = "YOUR POOJA CAKES CART\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += (index + 1) + ". " + item.name + " - ₹" + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal Amount: ₹" + total;
    alert(message);
}

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cake = document.getElementById("cake-choice").value;
    let message = document.getElementById("message").value;

    let whatsappMessage =
        "Hello Pooja Cakes!%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Cake: " + encodeURIComponent(cake) + "%0A" +
        "Requirements: " + encodeURIComponent(message);

    // Replace with your shop's WhatsApp number
    let whatsappNumber = "91XXXXXXXXXX";

    if (whatsappNumber === "91XXXXXXXXXX") {
        alert("Please add your shop WhatsApp number in script.js to receive orders.");
        return;
    }

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage,
        "_blank"
    );
});
