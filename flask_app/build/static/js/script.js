// Get all of the service items
const serviceItems = document.querySelectorAll('.animate-in');

// Define the options for the Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Define the function that will be called when a service item enters the viewport
const animateService = (service, animation) => {
  if (service.classList.contains("invisible")) {
    service.classList.remove("invisible")
  }

  service.classList.add("animate__animated");
  animation = animation.split(" ")
  animation.forEach((element, index) => {
    setTimeout(() => {
      service.classList.add(element);
    }, (index) * 1000);
  });

  
};

const removeAnimation = (service, animation) => {
  service.classList.remove("animate__animated", animation);
  service.classList.add("invisible");
}

// Create a new Intersection Observer and observe each of the service items
const serviceObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    let animation = entry.target.getAttribute("animation")
    if (entry.isIntersecting) {
      // Element is visible in the viewport
      animateService(entry.target, animation);
      serviceObserver.unobserve(entry.target);
    } else {
      // Element has exited the viewport
      serviceObserver.observe(entry.target);
      removeAnimation(entry.target, animation);
    }
  });
}, observerOptions);

serviceItems.forEach(service => {
  serviceObserver.observe(service);
});
