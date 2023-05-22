const products = [
    {
      name: "Sprite",
      price: 1950,
      description: "Soda",
      image:
        "https://m.media-amazon.com/images/I/51TeFnx6GRL._SX569_.jpg",
    },
    {
      name: "Cola",
      price: 1950,
      description: "Soda",
      image:
        "https://images.freshop.com/1564405684702543770/e0ab97472ff7801126f30f75cab0c976_large.png",
    },
    {
      name: "Pepsi",
      price: 1950,
      description: "Soda",
      image:
        "https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757",
    },
    {
      name: "Fanta",
      price: 1950,
      description: "Soda",
      image:
        "https://oppamart.com.my/storage/media/vYrTw1aWizUsG6isYE3UqyUQ2wfbm8xbQH8OLOgZ.jpeg",
    },
    {
      name: "Mountian Dew",
      price: 1950,
      description: "Soda",
      image:
        "https://cdn.shopify.com/s/files/1/0634/5592/0349/products/mtn-dew-original-can-800x800-1_grande.png?v=1648327996",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      console.log(`${product.name} - ${product.price}`);
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }const userData = [
    {
      firstname: "Bayalagmaa",
      lastname: "Bayarmaa",
      email: "bayalagmaa@nhs.edu.mn",
      pass: "Nest12345678",
      birth: "",
      secretQ: "Fav color",
      secretAns: "purple",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
  
    if (passOne === passTwo) {
      if (passOne.length >= 8) {
        if (passOne != passTwo.toLowerCase()) {
          if (passOne.match(/\d+/g).map(Number)) {
            console.log("pass success");
            SaveUser(passOne);
          } else {
            alert("must include digit");
          }
        } else {
          alert("must include atleast one uppercase");
        }
      } else {
        alert("too short");
      }
    } else {
      alert("pass doesnt match");
    }
  }
  
  function SaveUser(password) {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let birth = document.getElementById("birth").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    let newUser = {
      firstname: fname,
      lastname: lname,
      email: email,
      pass: password,
      birth: birth,
      secretQ: question,
      secretAns: answer,
    };
    userData.push(newUser);
    openTab(event, "login");
  }
  
  function Login() {
    let lemail = document.getElementById("lemail").value;
    let lpass = document.getElementById("lpass").value;
    for (let i = 0; i < userData.length; i++) {
      console.log("user", i, userData[i]);
      if (userData[i].email == lemail && userData[i].pass == lpass) {
        console.log("login success");
        window.location.replace("./Calculator.html");
      }
    }
  }
  
  
  function Forgot() {
    let femail = document.getElementById("femail").value;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email == femail) {
        console.log("found user");
        document.getElementById("secretQuestion").innerHTML = userData[i].secretQ;
      } else {
        alert("user not found");
      }
    }
  }
  function Check() {
    let sanswer = document.getElementById("sAnswer").value;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].secretAns == sanswer) {
        console.log("answer match");
        document.getElementById("fpass").innerHTML = userData[i].pass;
      } else {
        alert("wrong answer");
      }
    }
  }
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }