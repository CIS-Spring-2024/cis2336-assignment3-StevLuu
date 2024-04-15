
// Login modal stuff
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

var loginBtn = document.querySelector(".login-btn");
var registerBtn = document.querySelector(".register-btn");

var closeButtons = document.querySelectorAll(".close");

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

closeButtons.forEach(function(btn) {
  btn.onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
}


//Menu list adder
document.addEventListener('DOMContentLoaded', function() {
  const addItemForm = document.getElementById('addItemFormModal');
  const itemInput = document.getElementById('itemInputModal');
  const itemList = document.getElementById('itemListModal');

  addItemForm.addEventListener('submit', function(event) {
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
