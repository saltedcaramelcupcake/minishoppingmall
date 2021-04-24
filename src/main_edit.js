//Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json") //json 파일이 불러와진 것을 확인 가능
    .then((response) => response.json())
    .then((json) => json.items);
}

//Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

//Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
}

//main
loadItems()
  .then((items) => {
    displayItems(items);
    //setEventListeners(items);
  })
  .catch(console.log);
