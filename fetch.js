let data = [];

fetch("https://dummyjson.com/products")
  .then(response => {
    data = response.json();
    return data;
    })
  .then(data => {
    console.log(data);
  })
console.log(data);