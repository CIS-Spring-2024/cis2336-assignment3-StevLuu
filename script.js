
// Login modal stuff
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
var orderModal = document.getElementById("orderModal");

var loginBtn = document.querySelector(".login-btn");
var registerBtn = document.querySelector(".register-btn");


var closeButtons = document.querySelectorAll(".close");

loginBtn.onclick = function () {
  loginModal.style.display = "block";
}

registerBtn.onclick = function () {
  registerModal.style.display = "block";
}

closeButtons.forEach(function (btn) {
  btn.onclick = function () {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
}
//order modal
var orderModal = document.getElementById("orderModal");
var orderBtn = document.querySelector(".order-btn");

orderBtn.onclick = function() {
  orderModal.style.display = "block";
}

if (orderBtn && orderModal) {
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('input', function () {
      updateItemTotal(this);
      updateSubtotal();
    });
  });
}

function updateItemTotal(input) {
  let price = parseFloat(input.closest('.menu-item').getAttribute('data-price'));
  let quantity = parseInt(input.value || 0);
  let total = price * quantity;
  input.closest('.menu-item').querySelector('.total-price').textContent = total.toFixed(2);
}

//FIX ME
function updateSubtotal() {
  let subtotal = 0;
  document.querySelectorAll('.total-price').forEach(total => {
    subtotal += parseFloat(total.textContent);
  });
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
}

// submit ordr button alert
document.getElementById('OrderForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  let subtotal = 0;
  document.querySelectorAll('.total-price').forEach(total => {
    subtotal += parseFloat(total.textContent);
  });

  const taxRate = 0.0825;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  orderModal.style.display = "none";
  alert(`Order placed!\nSubtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
});


//Menu list adder
document.addEventListener('DOMContentLoaded', function () {
  const addItemForm = document.getElementById('addItemFormModal');
  const itemInput = document.getElementById('itemInputModal');
  const itemList = document.getElementById('itemListModal');

  addItemForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const newItemText = itemInput.value.trim(); // Get trimmed input value

    if (newItemText !== '') {
      const newItem = document.createElement('li');
      newItem.textContent = newItemText;
      itemList.appendChild(newItem);
      itemInput.value = ''; // Clear input field
    }
  });
});



// carousel code
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  showItem(currentIndex); // Show the first item

  document.getElementById('cycleButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });
});
