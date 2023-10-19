var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  


























  // @media (max-width: 768px) {

  //   body {
  //     font-family:  'Roboto', sans-serif;
  //     background:url(/Media/imgaes/fondbody.jpg) fixed repeat;
  //     background-size: cover;
  //     margin: 0;
  //     padding: 0;
  //     }
      
  //     * {
  //       outline: none;
  //       text-decoration: none;
  //       box-sizing: border-box;
  //     }
      
  //     /* #body {
  //       position: absolute;
  //       left:20px;
  //       top: 0;
  //       width:100vw;
  //       height: auto;
  //       margin: 0;
  //       padding: 0;
  //     } */
         
  //     header {
  //     position: sticky;
  //     top: 0;
  //     width: 100vw;
  //     height: 60px;
  //     z-index: 20;
  //     padding-top: 20px;
  //     background-color: #ffffffbe;
  //     border-bottom: #f31414 solid 1px;
  //     }
      
  //     #prevInfo {
  //     /* padding-left: 40px;
  //     padding-right: 40px; */
  //     height: 20px;
  //     background-color: #081f37;
  //     }
        
      
  //      #zoneAccueil h1 {
  //       font-size: larger;
  //       margin-top: 40%;
  //      }
      
      //  #btnbars , #btntimes {
      //   position: fixed;
      //   padding: 1px;
      //   z-index: 1000;
      //   height: 10px;
      //   width: 10px;
      //   left:10px;
      //   top: 10px;
      //   background: none;
      //   border:none;
      //   border-radius: 50%;
      //  }
      
  //      #btnbars i {
  //       font-size: larger;
  //      }
      
  //      #btntimes i {
  //       font-size: larger;
  //      }
      
  //      #btntimes {
  //       display: none;
  //      }
      
  //      #btnbars {
  //       display: block;
  //      }
      
  //      .form0 {
  //        max-width: 100%;
  //      }
  //      .inp-name, .inp-email, .inp-text {
  //        width: 100%;
  //      }
      
  //      #service , #boutiques , #reservation , #contacter , #Accueil {
  //       display: none;
  //      }
      
  //      #boutique {
  //       width: auto;
  //       padding: 35px;
  //       margin: 30px 0 0 10px;
  //      }
       
      //  #jaunne {
      //   position: fixed;
      //   top:0;
      //   left: 0;
      //   z-index: 100;
      //   height: 98vh;
      //   width: 98vw;
      //   background-color: yellow
      //  }
      
      //  #jaunne ul{
      // position: absolute;
      // top: 20%;
      // left: 30%;
      //  }
      
      //  #jaunne ul li {
      //   margin-bottom: 20px;
      //  }
      
      //  #jaunne ul li a{
      //   font-size: larger;
      //   color: #0f8a61;
      //  }
       
      //  #rouge {
      //   position: fixed;
      //   top:0;
      //   left: 0;
      //   z-index: 10;
      //   height: 96vh;
      //   width: 96vw;
      //   background-color: red;
      //  }
       
  //      #menumobie li a {
  //       font-family: 'Roboto', sans-serif;
  //       font-size: larger;
  //       font-weight: bolder;
  //      }
      
      
  //      #TravailleurSection {
  //       padding: 20px;
  //       background-color: rgb(35, 168, 178);
  //       width: auto;
  //       /* margin: 30px 10px 30px 10px; */
        
  //     }
      
  //      /* Services */
      
  //     #services {
  //      position: relative;
  //      padding-top: 50px;
  //      height: auto;
  //      background-color: #fff;
  //      box-shadow: -1px -2px 45px 9px rgba(0,0,0,0.5) inset;
  //      -webkit-box-shadow: -1px -2px 45px 9px rgba(0,0,0,0.5) inset;
  //      -moz-box-shadow: -1px -2px 45px 9px rgba(0,0,0,0.5) inset;
  //      /* padding-left: 5%; */
  //      width: auto;
  //      padding: 35px;
  //      /* margin: 30px 10px 30px 10px; */
  //     }
      
  //     #services h1 {
  //      text-align: center;
  //      padding-top: 20px;
  //      font-family: 'Roboto', sans-serif;
  //      font-size: medium;
  //     }
      
  //     #sectionCards {
  //      display: flex;
  //      flex-wrap: wrap;
      
  //     }
      
  //     .sectionCard {
  //      position: relative;
  //      width: 47%;
  //      height: auto;
  //      padding-bottom: 50px;
  //     }
      
  //     .sectionCard p {
  //      text-align: center;
  //      font-size: x-small;
  //      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  //     }
      
  //     .sectionCard h2 {
  //      text-align: center;
  //      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  //     }
      
  //     .sectionCard img {
  //      width: 80%;
  //      height: 50%;
  //      border-radius: 30%;
  //      border: #081f37 solid  1px;
  //      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.58);
  //     -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.58);
  //     -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.58);
  //     }
      
  //     /* Footer */
      
  //     .quantité  h2{
  //     font-size: larger;
  //     }
      
  //     #footer {
  //      display: flex;
  //      flex-direction: column;
  //      height: 160vw;
  //      width: auto;
  //      padding: 35px;
  //      /* margin: 30px 10px 30px 10px; */
  //     }
      
  //     #localisation {
  //       background: url(/Media/imgaes/gps.png) no-repeat;
  //       background-size: cover;
  //       width: 100%;
  //       height: 100%;
  //       }
        
      
  //     #contact {
  //      padding-top: 20px;
  //     width: auto;
  //     height: 50%;
  //     }
      
      
  //     .form0 {
  //      max-width: 80%;
  //      margin: 0 auto;
  //     }
      
  //     .inp-name, .inp-email {
  //      width: 100%;
  //      padding: 10px;
  //      margin-bottom: 10px;
  //      border: 1px solid  #081f37;
  //      border-radius: 5px;
  //      font-size: 16px;
  //      transition: border-color 0.3s;
  //     }
      
  //     .inp-text {
  //      width: 100%;
  //      height: 80px;
  //      padding: 10px;
  //      margin-bottom: 10px;
  //      border: 1px solid  #081f37;
  //      border-radius: 5px;
  //      font-size: 16px;
  //      transition: border-color 0.3s;
  //     }
      
  //     .submit0 {
  //      background-color: #081f37;
  //      color: #fff;
  //      border: none;
  //      border-radius: 5px;
  //      padding: 10px 20px;
  //      font-size: 18px;
  //      cursor: pointer;
  //      transition: background-color 0.3s;
  //     }
      
  //     #menumobie {
  //      display: none;
  //     }
      
  //     /* equipe */
      
  //     #equipe {
  //       display: flex;
  //       flex-direction: column;
  //       background-color: #081f37;
  //       padding-top: 30px;
  //       color: #fff;
  //       height: 100%;
  //       width: auto;
  //       padding-bottom: 100px;
  //       /* padding: 35px; */
  //       /* margin: 30px 10px 30px 10px; */
       
  //      }
       
  //      #apropos {
  //       width: 100%;
  //       margin-left: 20px;
  //      }
      
  //      #apropos p {
  //       padding-right: 30px;
  //      }
       
  //      #popular {
  //       margin-left: 30px;
  //       width: 100%;
  //      }
       
  //      .popmodes {
  //       width: 100%;
  //       display: flex;
  //       flex-direction: row;
  //      }
       
  //      #popular .popmode {
  //       width: 25vw;
  //       height: auto ;
  //       margin: 10px;
  //      }
       
  //      .popmode img {
  //        width: 100%;
  //        height: 90%;
  //        }
      
  //     /* Reservation de place */
      
  //     #programmer {
  //       display: flex;
  //       flex-direction: column;
  //      }
      
  //     .reservation_containeur {
  //       background-color: #f4f4f4;
  //       padding: 35px;
  //       text-align: center;
  //       border-radius: 10px;
  //       box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //       width: auto;
  //       margin: 30px 10px 30px 10px;
  //     }
      
  //     .reservation-container h2 {
  //       font-size: 24px;
  //       color: #333;
  //     }
      
  //     .reservation_containeur p {
  //       font-size: 16px;
  //       color: #666;
  //     }
      
  //     form {
  //       display: flex;
  //       flex-direction: column;
  //     }
      
  //     label {
  //       margin-top: 10px;
  //     }
  //     #clientNom {
  //       width: 90%;
  //       padding: 10px;
  //       margin: 5px 3.7%;
  //       border: 1px solid #081f37;
  //       border-radius: 5px;
  //       font-size: 16px;
  //     }
  //     input[type="date"],
  //     input[type="time"] {
  //       width: 100%;
  //       padding: 5px;
  //       margin: 5px 0;
  //       border: 1px solid #081f37;
  //       border-radius: 5px;
  //       font-size: 16px;
  //     }
      
  //     button {
  //       background-color: #081f37;
  //       color: #fff;
  //       border: none;
  //       border-radius: 5px;
  //       padding: 10px 20px;
  //       margin-top: 10px;
  //       cursor: pointer;
  //       font-size: 18px;
  //       transition: background-color 0.3s;
  //     }
      
  //     button:hover {
  //       background-color: #081f37;
  //     }
      
  //     .dispoHeursDiv {
  //       display: flex;
  //       flex-wrap: wrap;
  //     }
      
  //     .dispoHeurs_containeur {
  //       background-color: #f4f4f4;
  //       text-align: center;
  //       border-radius: 10px;
  //       box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //       width: auto;
  //       margin: 30px 10px 30px 10px;
  //     }
      
  //     .opening-hours-container h2 {
  //       font-size: 24px;
  //       color: #333;
  //     }
      
  //     .dispoHeurs {
  //       background-color: #fff;
  //       border: 1px solid #ccc;
  //       border-radius: 5px;
  //       padding: 10px;
  //       margin: 10px;
  //       box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  //     }
      
  //     .dispoHeurs h3 {
  //       font-size: 18px;
  //       color: #081f37;
  //     }
      
  //     .dispoHeurs p {
  //       font-size: 16px;
  //       color: #666;
  //     }
      
  //     #zoneAccueil {
  //       width: auto;
  //       padding-left: 40px;
  //       padding-right: 40px;
  //     }
      
  //     #levelTraval {
  //       width: auto;
  //     }
  //     #boutique {
  //       width: auto;
  //     }
  // }
  
  
  // @media(max-width:379px) {
  
  //    #prevInfo li a {
  //     color: #fff;
  //     font-size: small;
  //    }
  //    #prevInfo l i {
  //     margin: 0 10px 10px 0 ;
  //    }  
   
  //    header ul{
  //      display: flex;
  //      flex-direction: row;
  //    }
   
  //    header li{
  //      margin-right: 10px;
  //     }
      
  //     header li a {
  //       color: #081f37;
  //       font-family: 'Roboto', sans-serif;
  //     }
      
  //     header li i {
  //       font-size:larger;
  //     }
  
   
    //  .sectionCard {
    //    position: relative;
    //    width: 47%;
    //    height: auto;
    //    padding-bottom: 80px;
    //   }
   
    //  .sectionCard p {
    //    text-align: center;
    //    font-size: x-small;
    //    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    //   }
  //  }
   
  // @media(max-width: 969px) {
  //  #prevInfo {
  //   /* padding: 5px; */
  //   height: 150px;
  //   background-color: #081f37;
  //  }
   
  //  #prevInfo li {
  //   margin: 10px ;
  //  }
   
  //  i {
  //    margin: 0 10px 10px 0;
  //  }
   
  //  #prevInfo li a {
  //   color: #fff;
  //   font-size: larger;
  //  }
   
  //  #Horaire {
  //   float: left;
  //   font-family: 'Dancing Script', cursive;
  //  }
   
  //  #gmail ,#numero {
  //   float: left;
  //   font-family: 'Roboto', sans-serif;
  //  }
   
  // }
  
  
  