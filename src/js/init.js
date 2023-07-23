const body = document.getElementsByTagName("main")[0];
console.log(body);
barba.init({
  transitions: [
    {
      name: "default-transition",
      // sync:true,
      leave() {
        // create your stunning leave animation here
        body.classList.add("animate__fadeOut");
      },
      enter() {
        // create your amazing enter animation here
        body.classList.add("animate__fadeOut");
        // body.classList.remove("animate__fadeIn");
        // body.classList.remove("animate__fadeOut");
        // body.classList.add("animate__fadeIn");
      },
    },
  ],
});
