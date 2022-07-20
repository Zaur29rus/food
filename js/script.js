window.addEventListener('DOMContentLoaded', () =>{
//TABS
   const tabs = document.querySelectorAll ('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent'),
         tabsParent = document.querySelector('.tabheader__items');


   function hideTabContent(){
      tabsContent.forEach(item =>{
         item.style.display = 'none'
      });


      tabs.forEach(item =>{
         item.classList.remove('tabheader__item_active');
      })
   }


   function showTabContent(i=0){
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();


   tabsParent.addEventListener('click', (event)=>{
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')){
         tabs.forEach((item,i)=>{
            if(target == item){
               hideTabContent();
               showTabContent(i);
            }
         })
      }
   });


//TIMER

      const deadline = '2023-09-11'

      function getTimeRemaining(endtime){
         const t = Date.parse(endtime) - Date.parse(new Date()),
               days = Math.floor(t/(1000*60*60*24)),
               hours = Math.floor((t/1000*60*60)%24),
               minutes = Math.floor((t/1000/60)% 60),
               seconds = Math.floor((t/1000) %60);

         return{
            'total':t,
            'days':days,
            'hours': hours,
            'minutes':minutes,
            'seconds':seconds
         };
      }

      function setClock(selector, endtime){
         const timer = document.querySelector(selector);
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock(){
         const t = getTimeRemaining(endtime);

         days.innerHTML = t.days;
         hours.innerHTML = t.hours;
         minutes.innerHTML = t.minutes;
         seconds.innerHTML = t.seconds;

         if(t.total <=0){
            clearInterval(timeInterval);
         }
      }
      }

      setClock('.timer', deadline);



      //Modal

      const modalTrigger = document.querySelector('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');


         modalTrigger.addEventListener ('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
         });

         modalCloseBtn.addEventListener ('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
         });

   

         // class for cards

         class MenuCard{
            constructor(src, alt, title, descr, price, parentSelector){
               this.src = src;
               this.alt = alt;
               this.title = title;
               this.descr = descr;
               this.price= price;
               this.parent = document.querySelector(parentSelector);
               this.transfer = 27;
               this.changeToRu();
            }


            changeToRu(){
               this.price = this.price*this.transfer;
            }

            render(){
               const element = document.createElement('div');
               element.innerHTML = 
            `<div class="menu__item">
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                     <div class="menu__item-cost">Цена:</div>
                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                   </div>
           </div>`;

               this.parent.append(element)
            }
         }

         new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container'

         ).render();
         new MenuCard(
            "img/tabs/elite.jpg",
            "elite",
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            9,
            '.menu .container'

         ).render();
         new MenuCard(
            "img/tabs/post.jpg",
            "post",
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            9,
            '.menu .container'

         ).render();
   });



















