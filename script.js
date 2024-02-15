
document.getElementById("con").addEventListener("click",function(){
    alert("alerti bazik")
});
document.getElementById("lon").addEventListener("click",function(){
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
);
document.getElementById("fon").addEventListener("click",function(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
}
);
document.getElementById("don").addEventListener("click",function(){
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "ani.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
}
);
document.getElementById("aon").addEventListener("click",function(){
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__bounceOutLeft
            animate__faster
          `
        }
      });
}
);

