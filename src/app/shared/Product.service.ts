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
        "date": "2018-04-25",
        "description": "Description",
        "id": 342126594235,
        "imageRefs": [
          "product-images/1524665830705_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F01.jpg?alt=media&token=7cb51fd4-b884-4088-b272-172341c852f6"
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
        "date": "2018-04-02",
        "description": "Despite the name, these earrings won't give you magical powers  – or will they? Find out for yourself!",
        "id": 1174268122548,
        "imageRefs": [
          "product-images/1522678065417_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F15.jpg?alt=media&token=2851da2a-6151-463f-80ad-aaa8560ff151"
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
        "date": "2018-04-01",
        "description": "No backing, just packing",
        "id": 1460918804231,
        "imageRefs": [
          "product-images/1522681916692_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F13.jpg?alt=media&token=0175cf20-d305-4b2e-92ff-ce916dfa3ae2"
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
        "date": "2018-03-20",
        "description": "You always wanted to be a pilot, did you not? Now you can!",
        "id": 174074709536,
        "imageRefs": [
          "product-images/1522670556882_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F03.jpg?alt=media&token=1de91d09-636c-4590-a6b1-d76c442667a9"
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
        "date": "2018-03-19",
        "description": "Not only for Beatles-Fans.",
        "id": 262082575518,
        "imageRefs": [
          "product-images/1522408063589_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F27.jpg?alt=media&token=2d71ba78-6f41-4250-a0f5-e3f26e581842"
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
        "date": "2018-03-18",
        "description": "This is a famous blue bag.",
        "id": 287006516588,
        "imageRefs": [
          "product-images/1522670499756_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F02.jpg?alt=media&token=b963ab93-6047-43dc-8f66-77b3f15655a1"
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
        "date": "2018-03-17",
        "description": "Retro is everywhere! Why go to the thrift-shop, shop here and be hip as f...",
        "id": 534697532817,
        "imageRefs": [
          "product-images/1522670622377_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F06.jpg?alt=media&token=9c51956c-48de-414f-bc1d-d6a5ef1b43f8"
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
        "date": "2018-03-16",
        "description": "Be fast.",
        "id": 55673120334,
        "imageRefs": [
          "product-images/1522681583918_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F11.jpg?alt=media&token=a65408eb-b7f8-4d04-8167-9452ebcede3d"
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
        "date": "2018-03-15",
        "description": "Very very useful pants. You could use these, right?",
        "id": 704066485275,
        "imageRefs": [
          "product-images/1522670692030_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F07.jpg?alt=media&token=c9c62a7d-3c0d-4dfa-86a7-6ff875728839"
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
        "date": "2018-02-22",
        "description": "Don't have a flower-garden? No problem, try the blouse!",
        "id": 726052469270,
        "imageRefs": [
          "product-images/1522696166685_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F08.jpg?alt=media&token=65a83206-f822-42fb-9eb3-9aced1a376e6"
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
        "date": "2018-02-21",
        "description": "Those are some nice shoes you'll get there....",
        "id": 816056417742,
        "imageRefs": [
          "product-images/1522670457485_[object File]"
        ],
        "imageURLs": [
          "https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F09.jpg?alt=media&token=803a70b2-5710-433d-827d-d47a31ef4a99"
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
        "date": "2018-02-20",
        "description": "No one looks good in a fedora, but who cares anyway.",
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
