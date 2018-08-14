(function(){
      angular
            .module("quiz")
            .factory("DataService" , DataFactory);

            function DataFactory() {
              var dataObj = {
                earPhones: earPhones,
                quizQuestions: quizQuestions,
                correctAnswers: correctAnswers
              };
              return dataObj;
            }
       var correctAnswers = [1,0,2,1,3,2];  
       var quizQuestions = [
          {
            type: "text",
            text: "How Much The Sony Weight??",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          },
          {
            type: "text",
            text: "Whats Your Name",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          },
          {
            type: "text",
            text: "How old are You??",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          },
          {
            type: "text",
            text: "how Much The Sony Weight??",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          },
          {
            type: "text",
            text: "how Much The Sony Weight??",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          },
          {
            type: "text",
            text: "how Much The Sony Weight??",
            possibilities: [
              {
                answer: "45gms"
              },
              {
                answer: "56gms"
              },
              {
                answer: "46gms"
              },
              {
                answer: "67gms"
              }
            ],
            selected: null,
            correct: null
          }


       ];

       var earPhones = [
         {
           type: "Mini Bluetooth Earphones",
           cost: "299/-" ,
           image_URL : "http://ph-live-03.slatic.net/p/2/s530-mini-ultra-small-wireless-bluetooth-earphonev41forandroidios-black-8260-1318338-3112f172652178141318ae0e95b71b37-product.jpg" ,
           ProductDimensions : "	6 x 6 x 1.8 cm" ,
           Weight : "45gms" ,
           Description : "50mA rechargeable lithium battery...2 hours talk time (music playback 1 hours / standby time 120 hours / working current <15mA)...can be connected to two one with two Bluetooth devices simultaneously...Allow you to conveniently answer calls while drivingSupport... multi point connectionLong battery life, fast charging"

         },
         {
           type: "Philips",
           cost: "499/-",
           image_URL : "https://n1.sdlcdn.com/imgs/a/i/p/Philips-In-Ear-Headphones-SHE1360-1074667-1-2a516.jpg" ,
           ProductDimensions : "	6 x 6 x 1.8 cm" ,
           Weight : "63gms" ,
           Description : "Experience the crystal clear and superlative audio listening experience from your own electronic device with this Philips in-ear headphone. The outstanding device features an excellent and comfortable fit. While speaking about its powerful and ultimate neodymium magnet, it enhances the sensitivity and bass performance. The suitable in-ear option blocks out the external noise and brings you excellent music with bass."

         },
         {
           type: "JBL",
           cost: "1599/-",
           image_URL : "https://n4.sdlcdn.com/imgs/a/q/e/JBLT100_2-cc8c1.jpg" ,
           ProductDimensions : "	6 x 6 x 1.8 cm" ,
           Weight : "60gms" ,
           Description : "Lightning connector sport earphone with Noise Cancellation and Adaptive Noise Control...JBL is an American audio electronics company founded in 1946 by James Bullough Lansing. Their primary products are loudspeakers and associated electronics. There are two independent divisions within the company — JBL Consumer and JBL Professional."

         },
         {
           type: "Philips",
           cost: "699/-",
           image_URL : "https://n1.sdlcdn.com/imgs/a/i/q/Philiphs-SHE3590WT-10-Earphones-1517725-1-a0a8b.jpg" ,
           ProductDimensions : "	6 x 6 x 1.8 cm" ,
           Weight : "65gms" ,
           Description : "Experience the crystal clear and superlative audio listening experience from your own electronic device with this Philips in-ear headphone. The outstanding device features an excellent and comfortable fit. While speaking about its powerful and ultimate neodymium magnet, it enhances the sensitivity and bass performance. The suitable in-ear option blocks out the external noise and brings you excellent music with bass."

         },
         {
           type: "SONY",
           cost: "799/-",
           image_URL : "http://images.junostatic.com/full/IS455738-01-01-BIG.jpg" ,
         ProductDimensions : "	6 x 6 x 1.... cm" ,
           Weight : "60gms" ,
           Description : "High-Resolution Audio compatible.....Digital Noise Cancelling technology...9 mm high-sensitivity driver unit...One-touch listening with Bluetooth® and NFC.......Digital noise cancelling..........13.5 mm high-sensitivity driver unit"

         },  {
             type: "Skull Candy",
             cost: "1499/-",
             image_URL : "http://thumbs3.ebaystatic.com/d/l225/m/mzqJvCENN9ROXoNgZ89bLiw.jpg" ,
             ProductDimensions : "	6 x 6 x 1.8 cm" ,
             Weight : "64gms" ,
             Description : "JBL J22a in-ear headphones take professional audio technology and make it personal. Drawing on expertise learned from building some of the ﬁnest loudspeakers in the world, JBL engineers created lightweight, comfortable headphones that deliver signature JBL sound. High-performance drivers generate outstanding frequency response and pure bass that is deep, powerful and accurate, which lets you hear the truth from your favorite music and artists. Fresh styling makes our J22a as pleasing to the eyes as they are to the ears, and an in-line microphone lets you take calls without taking the headphones off"

           }
       ];


})();
