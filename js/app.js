const nav = document.querySelector('.nav')
const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section')

// const hideSectionBtn = document.querySelector('.hide-section-btn')

const ulList = document.createElement('ul');
ulList.classList.add('list')

//Contact Section
//getting the ids of the contact form input element
const name = document.getElementById('name')
const sender = document.getElementById('nameDisplay')
const message = document.getElementById('message')

const list = document.querySelector('.list');


//message count and limit
const letterCount = document.getElementById('lettercount')

//getting the ids of the elements to which I'll display user's inputs
const email = document.getElementById('email')
const emailAddress = document.getElementById('emailDisplay')
const messageDisplay = document.getElementById('messageDisplay')



const items = [
    {
        link : "#services",
        text : "Services",
    },
    {
        link : "#pricing",
        text : "Pricing",
    },
    {
        link : "#testemonials",
        text : "Testemoials",
    },
    {
        link : "#contact",
        text : "Contact",
    },
];

const fragment = new DocumentFragment()


function createNavItem(item){
    const listItem = document.createElement('li');
    listItem.classList.add('list-item')
    const link = document.createElement('a');

    link.setAttribute('href',item.link);
    link.innerText = item.text;

    listItem.appendChild(link);
    
    fragment.appendChild(listItem)
}

items.forEach(item => {
   createNavItem(item)
})

ulList.classList.add('list')

ulList.appendChild(fragment);





//appending ul to the nav
nav.insertBefore(ulList,nav.children[1])


//collapssing section when the button is clicked

sections.forEach(section => {
     //selecting the hide button to togggle the img src tag within it

    const hideBtn = section.querySelector('.hide-section-btn');
    const btnImg = hideBtn.querySelector('img')

      //selectiing the first element within the div to hide it
      const firstDiv =  section.querySelector('div')
      
     section.addEventListener('click',function(e){

        if(e.target.tagName !== 'IMG'){
            return;
        }


        if(firstDiv.classList.contains('collapse')){

            btnImg.setAttribute('src','./assets/upp.jfif')
           }
           else{
            btnImg.setAttribute('src','./assets/down.jfif')
    
           }
      


       firstDiv.classList.toggle('collapse')
      
    })
})




const navItems = document.querySelectorAll('.list li');
const navLinks = document.querySelectorAll('.list li a');

menuBtn.addEventListener('click',function(){
    ulList.classList.toggle('show-menu')
    this.classList.toggle('menu-bars')
});


//adding an event listener for each nav item to close the side nav when it's clicked
navItems.forEach(nav => {
    nav.addEventListener('click',function(e){
        e.preventDefault();
        ulList.classList.toggle('show-menu')
        menuBtn.classList.toggle('menu-bars')

    })
})




//registering keyupevents 
message.addEventListener('keyup',function(e){

   
    messageDisplay.querySelector('span').innerText = e.target.value

    letterCount.innerText =  `Only ${500 - e.target.value.length} letter left`
})
email.addEventListener('keyup',function(e){
    emailAddress.querySelector('span').innerText = e.target.value
})




name.addEventListener('keyup',function(e){
sender.querySelector('span').innerText = e.target.value
})



//scroll to top buttom
const scrollToTopBtn = document.querySelector('.scroll-to-top')

navLinks.forEach((link, index) => {
    link.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
})

const hideHeader = () => {
    if(window.scrollY < 65){
        header.classList.remove('hide-nav')
    }else{
        header.classList.add('hide-nav')

    }
}

document.addEventListener('scroll',function(e){

    //showing the nav while scrolling

    header.classList.remove('hide-nav')
   
    let timer;

    if(timer){
        clearTimeout(timer)
    }

    setTimeout(hideHeader,2000)
    sections.forEach((section,index) => {
        //adjusting the nav bar active state based on the section's position 
        //subtracting 65px to account for the navheight
        const sectionTop = section.offsetTop - 65
        const sectionHeight = section.clientHeight

        //highlighting the active nav item based on the section's position
        //this only works when the viewport is larger than the section's height
        //if viewport height is less than section height, the nav item won't be highlighted properly
       
        
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {  
        navItems.forEach(item => {
            //first removing all active class from all list items
            item.classList.remove('active')
        })
        //adding active class only if the viewport is larger than the section's height
        navItems[index].classList.add('active')
        }
        else{
            //removing active class from the active nav item if the viewport is not in the section's position
            navItems.forEach(item => {
                //removing active class from the last list items when user scroll up the first section into the hero section
                navItems[index].classList.remove('active')
            })
        }
    })
    
//showing and hiding scroll to top button


if(window.scrollY > 400){
    //
   // showing the scroll to top butoon when user scroll  down 400px or more
scrollToTopBtn.style.cssText = 'display:inline-block'
}else{
        //removing the scroll to top button when user scroll up and the scrollY is less then 400px
    scrollToTopBtn.style.cssText = 'display:none'

}
})

//scrolling to top when clicking on the button
scrollToTopBtn.addEventListener('click',function(){
    window.scrollTo({top:0, behavior:'smooth'})
})

