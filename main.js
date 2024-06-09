// let SideNavLinks = document.querySelectorAll(".sideNav li a ")

// // SideNavLinks.forEach((link)=>{
// // link.addEventListener("click" , (event)=>event.preventDefault())
// // })

// // SideNavLinks.forEach(link => {
// //     link.addEventListener("click", () => {
// //         // Remove the 'active' class from all links
// //         SideNavLinks.forEach(link => link.classList.remove("active"));
        
// //         // Add the 'active' class to the clicked link
// //         link.classList.add("active");
// //     });
// // });



// let users = document.querySelectorAll(".user");
// console.log(users);

// setTimeout(() => {
//     let userName = prompt("Please enter your name", "user");
//     if (userName.length > 8) {
//         userName = prompt("Sorry, but the maximum characters are 8", "user");
//     }
//     users.forEach(user => {
//         user.innerText = userName;
//     });
// }, 1000);

document.querySelectorAll("i").forEach((i)=>{
i.classList.add("fa-fw")
})

let time = 300;
let progress_bar = document.querySelectorAll(".main-projects .proj-progress span");
let progress_div = document.querySelectorAll(".main-projects .proj-progress");

// console.log(progress_div)
// console.log(progress_bar)

 
window.onscroll = () => {;

    progress_div.forEach((D) => {
        let rect = D.getBoundingClientRect();
  
        if (rect.top <= window.innerHeight ) {
            let progress_span = D.querySelector("span");
            progress_span.innerText = `progress ${progress_span.getAttribute("data-width")}`;
            progress_span.style.width = progress_span.getAttribute("data-width");
        }
    });
};




    

// window.onscroll = ()=>{
// progress_div.forEach((d)=>{
// let coordination = d.getBoundingClientRect()
// if(coordination.top <= window.innerHeight){
//  let span = d.querySelector("span")
//  span.style.width = span.getAttribute("data-width")
// }
// })
// }
// window.onscroll = ()=>{

//     // console.log(window.innerHeight)
//     console.log(window.scrollY)
// } 