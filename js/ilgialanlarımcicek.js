const shoppingData = {
  "searchParameters": {
    "q": "çiçek",
    "gl": "tr",
    "hl": "tr",
    "type": "shopping",
    "location": "Turkey",
    "engine": "google"
  },
  "shopping": [
    {
      "title": "Çiçek Gönder",
      "source": "Flora Çiçek Türkiye mağazasında",
      "link": "https://www.floracicek.com/cicek-Buket-01__11504.aspx",
      "price": "₺76,70",
      "delivery": "",
      "imageUrl": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToBWdyVXsiOoAsNIgy_-f1LqZZrUc0OhQ4odVW0QNzONXowWnk32V1l7RjsKFR3Fv2MxD-ZHfB-YWU4Zueus_TZqzDHBnalgotWLG-bRQqR54Ne5IxUGY&usqp=CAE",
      "position": 1
    },
    // Diğer ürünler burada...
  ]
};

const productContainer = document.getElementById('product-container');

shoppingData.shopping.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const title = document.createElement('h2');
    title.textContent = product.title;
    productDiv.appendChild(title);

    const source = document.createElement('p');
    source.textContent = product.source;
    productDiv.appendChild(source);

    const price = document.createElement('p');
    price.textContent = 'Fiyat: ' + product.price;
    productDiv.appendChild(price);

    const delivery = document.createElement('p');
    delivery.textContent = 'Teslimat: ' + (product.delivery || 'Ücretsiz');
    productDiv.appendChild(delivery);

    const link = document.createElement('a');
    link.href = product.link;
    link.textContent = 'Ürüne Git';
    productDiv.appendChild(link);

    const image = document.createElement('img');
    image.src = product.imageUrl;
    productDiv.appendChild(image);

    productContainer.appendChild(productDiv);
});
