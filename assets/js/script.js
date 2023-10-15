const swiper_wrapper = document.getElementById('swiper-wrapper');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


const dataLatest = [
  {
    Name: 'Gaming Pxst',
    Photo: 'https://th.bing.com/th/id/OIP.PxstXs0wWc_Xd9sKv3gXrgHaHa?pid=ImgDet&rs=1'
  },
  {
    Name: 'RXGAMES',
    Photo: 'https://cdn.shopify.com/s/files/1/0552/0674/0068/products/FPS-01-prosperity-impact-front_400x400.jpg?v=1666770788'
  },
  {
    Name: 'Hp 2019',
    Photo: 'https://i5.walmartimages.com/asr/c4a48a1c-1547-4268-aef9-1452705df6a8.012ca742717d4d29b8187a7f3062f9d8.jpeg'
  },
  {
    Name: 'ZLI',
    Photo: 'https://th.bing.com/th/id/R.b56e32a5d3a8435164f90fa43438a9fc?rik=fA0a9VDpCONbOA&pid=ImgRaw&r=0'
  },
  {
    Name: 'Gaming 2022',
    Photo: 'https://th.bing.com/th/id/R.ce045a9edfda49ae364c2c56b94b5d84?rik=BhCmCfAMLnFXYw&pid=ImgRaw&r=0'
  },
  {
    Name: 'Manette',
    Photo: 'https://th.bing.com/th/id/OIP.OsNZOtb2faZkCJFblZAcTwHaFT?w=230&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7'
  }
,
  {
    Name: 'Gaming 2019',
    Photo: 'https://th.bing.com/th/id/OIP.wia9ZMlkoplI-ExfAH-R3QHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=2'
  },
  {
    Name: 'Gaming 2023',
    Photo: 'https://th.bing.com/th/id/OIP.oFxe54wGUE5lGk5dxoQc7QHaHs?w=161&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7'
  },
  {
    Name: 'Gaming 2022',
    Photo: 'https://th.bing.com/th/id/R.ce045a9edfda49ae364c2c56b94b5d84?rik=BhCmCfAMLnFXYw&pid=ImgRaw&r=0'
  },
  {
    Name: 'Manette',
    Photo: 'https://th.bing.com/th/id/OIP.OsNZOtb2faZkCJFblZAcTwHaFT?w=230&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7'
  }
  ,
  {
    Name: 'PS5 Controller Station',
    Photo: 'https://m.media-amazon.com/images/I/71C9d02usCL.jpg'
  },
  {
    Name: 'Iphone 14pro',
    Photo: 'https://img.etimg.com/thumb/msid-91396959,width-650,height-488,imgsize-33648,,resizemode-75/iphone-14.jpg'
  }
];

dataLatest.forEach(Element => {
  const d1 = document.createElement('div');
  d1.classList.add('swiper-slide');
  d1.innerHTML = `
    <div class="subSlide">
      <img src="${Element.Photo}" alt="${Element.Name}">
      <div><h2>${Element.Name}</h2></div>
    </div>
  `;
  swiper_wrapper.appendChild(d1);
});
