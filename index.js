!window.addEventListener('scroll', () => {
  const header = document.querySelector('.hero');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




const openMenu = document.querySelector(".open-menu")
let nav = document.querySelector("#nav"),
closeMenu = document.querySelector(".close-menu");

if (openMenu) {
  openMenu.addEventListener("click", () => {
    nav.classList.add("open");
    nav.classList.add("open-list");
    nav.classList.remove("close-list");
  })
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    // nav.classList.remove("open");
    nav.classList.remove("open-list");
    nav.classList.add("close-list");
  })
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }



let output = document.getElementById('output')
// let showText = 'Show typewriter'
// output.innerHTML = showText.substr(0 , 4)  // показывает от и до буквы       //Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
                                                                                // Мы также можем изменять его. Это один из самых мощных способов менять содержимое на странице.


let words = [
    'Assistant Hub',
    // 'Web developer',
    // 'Traveler',
    // 'Lady woman'
]

let charTurn = 0
let wordTurn = 0
function printWord(){
    if(charTurn <= words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0 , charTurn)        // substr(start, length)	length символов, начиная от start	значение start может быть отрицательным
        charTurn++
        setTimeout(printWord , 200)      // setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
                                         // setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
    }else{
        setTimeout(deleteWord , 500)
    }
}
printWord()

function deleteWord(){
    if(charTurn >= 0){
        output.innerHTML = words[wordTurn].substr(0 , charTurn)
        charTurn--
        setTimeout(deleteWord , 100)
    } else{
        if(wordTurn < words.length - 1){      //когда слова заканчивается
            wordTurn++                        // продолжает род слов
        } else{
            wordTurn = 0                      // опять начинает с начала
        }
        charTurn = 0
        setTimeout(printWord , 300)
    }
}




  const prevArrow = document.querySelector('prevArrow')
  const nextArrow = document.querySelector('nextArrow')
  const featureitems = document.querySelector('.feature-items')
  $('.feature-items').slick({
      infinite: true,
      loop: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prev: prevArrow,
      next: nextArrow,
       responsive: [
    {
      breakpoint: 900, // планшеты
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 570, // телефоны
      settings: {
        slidesToShow: 2
      }
    }
  ]
    });

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768, // планшеты
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480, // телефоны
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


        
 let modal = document.querySelector('#modal-window-one');

function openModalOne(){
    modal.classList.add('open')
}

function closeModalOne(){
    modal.classList.remove('open')
}
        
 let modal2 = document.querySelector('#modal-window-two');

function openModalTwo(){
    modal2.classList.add('open')
}

function closeModalTwo(){
    modal2.classList.remove('open')
}
        
 let modal3 = document.querySelector('#modal-window-three');

function openModalThree(){
    modal3.classList.add('open')
}

function closeModalThree(){
    modal3.classList.remove('open')
}
        
 let modal4 = document.querySelector('#modal-window-four');

function openModalFour(){
    modal4.classList.add('open')
}

function closeModalFour(){
    modal4.classList.remove('open')
}


// create instance of kinet with custom settings
var kinet = new Kinet({
  acceleration: 0.02,
  friction: 0.25,
  names: ["x", "y"],
});

// select circle element
var circle = document.getElementById('circle');

// set handler on kinet tick event
kinet.on('tick', function(instances) {
  circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
  kinet.animate('x', event.clientX - window.innerWidth/2);
  kinet.animate('y', event.clientY - window.innerHeight/2);
});

// log
kinet.on('start', function() {
  console.log('start');
});

kinet.on('end', function() {
  console.log('end');
});