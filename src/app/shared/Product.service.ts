import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    var data = <Product[]>[
      {
        "categories": {
          "category": true,
          "example": true
        },
        "currentRating": 4.5,
        "date": "2020-12-24",
        "description": "Clothing store in Banff, Canada",
        "id": 342126594235,
        "imageRefs": [
          "product-images/1524665830705_[object File]"
        ],
        "imageURLs": [
          "https://euimg.eworldtrade.com/uploads/user_products/3/9/product-0373907001539622787-o.jpg"
        ],
        "name": "Super new Sneakers",
        "price": 6,
        "priceNormal": 30,
        "ratings": {
          "3nYpbrVJk2NaJuedh87oR7ohCPI3": 5,
          "bsHjPduGdGQcdwMVwohckCPmGEV2": 4
        },
        "reduction": 80,
        "sale": true
      },
      {
        "categories": {
          "Jewelry": true
        },
        "currentRating": 3,
        "date": "2020-11-02",
        "description": "91 Front St E, Toronto, ON M5E 1C4, Canada",
        "id": 1174268122548,
        "imageRefs": [
          "product-images/1522678065417_[object File]"
        ],
        "imageURLs": [
          "https://assets0.mirraw.com/images/3956561/GSE600_small.jpg?1486645547"
        ],
        "name": "Magical Earrings",
        "price": 150,
        "priceNormal": 170,
        "ratings": {
          "4pBet4nCwcX9AooCpoKt4rEq9Ir1": 5,
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 1,
          "EwWxtMh0r1Xt8LgTlrvVB8YR03P2": 4,
          "ob71SSturTShU1owxGsz1PnxX8a2": 2
        },
        "reduction": 12,
        "sale": true
      },
      {
        "categories": {
          "Backpacks": true
        },
        "currentRating": 4,
        "date": "2020-11-01",
        "description": "1004 Queen St E, Toronto, ON M4M 1K1, Canada",
        "id": 1460918804231,
        "imageRefs": [
          "product-images/1522681916692_[object File]"
        ],
        "imageURLs": [
          "https://cdn.shopify.com/s/files/1/0038/9929/3811/products/0325b934-7e81-4ef4-bdd1-3b7f32c154ff@2x.jpg?v=1571709238"
        ],
        "name": "Pack It On Your Back",
        "price": 150,
        "priceNormal": 200,
        "ratings": {
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 4,
          "c4cNnVPQtFTmzToyh0eRQ97lL8V2": 4
        },
        "reduction": 25,
        "sale": true
      },
      {
        "categories": {
          "Glasses": true
        },
        "currentRating": 3,
        "date": "2020-12-20",
        "description": "220 Yonge St, Toronto, ON M5B 2H1, Canada",
        "id": 174074709536,
        "imageRefs": [
          "product-images/1522670556882_[object File]"
        ],
        "imageURLs": [
          "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/700/1327/100/1/357781330/357781330_1_720x928.jpg"
        ],
        "name": "Fancy Shades",
        "price": 420,
        "priceNormal": 420,
        "ratings": {
          "4pBet4nCwcX9AooCpoKt4rEq9Ir1": 5,
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 1
        },
        "reduction": 0,
        "sale": false
      },
      {
        "categories": {
          "Jewelry": true
        },
        "currentRating": 5,
        "date": "2020-12-19",
        "description": "7601 Weston Rd, Woodbridge, ON L4L 9J9, Canada",
        "id": 262082575518,
        "imageRefs": [
          "product-images/1522408063589_[object File]"
        ],
        "imageURLs": [
          "https://www.perfectreplica.is/wp-content/uploads/2020/04/V16545_13-600x600.jpg"
        ],
        "name": "Yellow Watch",
        "price": 330,
        "priceNormal": 400,
        "ratings": {
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 5
        },
        "reduction": 18,
        "sale": true
      },
      {
        "categories": {
          "Bags": true
        },
        "currentRating": 0,
        "date": "2020-12-18",
        "description": "6455, 0270A Macleod Trail S Unit, Calgary, AB T2H 0K9, Canada",
        "id": 287006516588,
        "imageRefs": [
          "product-images/1522670499756_[object File]"
        ],
        "imageURLs": [
          "https://photos.smugmug.com/Fashion/Cute-Laptop-Bags/i-LmfxsC5/0/c80a0f6f/356x356/Designer-Laptop-Bags-356x356.jpg"
        ],
        "name": "Famous Blue Bag",
        "price": 750,
        "priceNormal": 750,
        "reduction": 0,
        "sale": false
      },
      {
        "categories": {
          "Clothes": true
        },
        "currentRating": 4,
        "date": "2020-12-17",
        "description": "Shopping Centre, 3401 Dufferin St Unit #501, Toronto, ON M6A 2T9, Canada",
        "id": 534697532817,
        "imageRefs": [
          "product-images/1522670622377_[object File]"
        ],
        "imageURLs": [
          "https://image1.superdry.com/static/images/optimised/zoom/upload3977604944097584978.jpg"
        ],
        "name": "Retro Trainer",
        "price": 175,
        "priceNormal": 200,
        "ratings": {
          "C4qgFqlW1dPl1tnOmlTB3rlESti1": 4
        },
        "reduction": 13,
        "sale": true
      },
      {
        "categories": {
          "Shoes": true
        },
        "currentRating": 1,
        "date": "2020-12-16",
        "description": "356 Queen St W, Toronto, ON M5V 2A2, Canada",
        "id": 55673120334,
        "imageRefs": [
          "product-images/1522681583918_[object File]"
        ],
        "imageURLs": [
          "https://5.imimg.com/data5/SO/BE/LD/ANDROID-31132887/product-jpeg-500x500.jpg"
        ],
        "name": "Seven Mile Sneakers",
        "price": 100,
        "priceNormal": 200,
        "ratings": {
          "sETmdbrH0oWainU5NZB1uCteXB62": 1
        },
        "reduction": 50,
        "sale": true
      },
      {
        "categories": {
          "Clothes": true
        },
        "currentRating": 1,
        "date": "2020-12-15",
        "description": "245 Yonge St, Toronto, ON M5B 1P4, Canada",
        "id": 704066485275,
        "imageRefs": [
          "product-images/1522670692030_[object File]"
        ],
        "imageURLs": [
          "https://i.pinimg.com/originals/62/29/f6/6229f6afc0902c8c0f73bb351e409e9c.jpg"
        ],
        "name": "Useful Pants",
        "price": 75,
        "priceNormal": 150,
        "ratings": {
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 1
        },
        "reduction": 50,
        "sale": true
      },
      {
        "categories": {
          "Clothes": true
        },
        "currentRating": 3,
        "date": "2020-02-22",
        "description": "15 Provost Dr, Toronto, ON M2K 2X9, Canada",
        "id": 726052469270,
        "imageRefs": [
          "product-images/1522696166685_[object File]"
        ],
        "imageURLs": [
          "https://images-na.ssl-images-amazon.com/images/I/61YL%2Bq4jVdL._AC_UX385_.jpg"
        ],
        "name": "Flowery Blouse",
        "price": 75,
        "priceNormal": 75,
        "ratings": {
          "C4qgFqlW1dPl1tnOmlTB3rlESti1": 3
        },
        "reduction": 0,
        "sale": false
      },
      {
        "categories": {
          "Shoes": true
        },
        "currentRating": 1,
        "date": "2020-02-21",
        "description": "8555 Campeau Dr Unit 290, Ottawa, ON K2T 0K5, Canada",
        "id": 816056417742,
        "imageRefs": [
          "product-images/1522670457485_[object File]"
        ],
        "imageURLs": [
          "https://media.gettyimages.com/photos/high-angle-view-of-blue-stilettos-over-pink-background-picture-id1025627712?s=2048x2048"
        ],
        "name": "«Nice» Shoes",
        "price": 120,
        "priceNormal": 120,
        "ratings": {
          "C4qgFqlW1dPl1tnOmlTB3rlESti1": 1,
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 1
        },
        "reduction": 0,
        "sale": false
      },
      {
        "categories": {
          "Clothing": true
        },
        "currentRating": 3,
        "date": "2020-02-20",
        "description": "15 Provost Dr, Toronto, ON M2K 2X9, Canada",
        "id": 830862339928,
        "imageRefs": [
          "product-images/1522670798623_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F05.jpg?alt=media&token=d5338993-236e-460f-975c-c5096bd91f41"
        ],
        "name": "Not-So-Classic Fedora",
        "price": 130,
        "priceNormal": 130,
        "ratings": {
          "4pBet4nCwcX9AooCpoKt4rEq9Ir1": 1,
          "EF8ngX1RvuZLb0Gc4GvoVAMzap72": 5
        },
        "reduction": 0,
        "sale": false
      }
    ];
    return data;

  }

}
