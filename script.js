function welcomeHeading(newHeading) {
  let heading = document.querySelector("h1");
  heading.innerHTML = newHeading;
}

function greet() {
  let name = prompt("what is your name?");
  let email = prompt("what is your email address?");
  if (name === "chanel") {
    welcomeHeading(`Welcome ${name}! 😊 we will email you shortly`);
  }
}

let greetButton = document.querySelector("button");
greetButton.addEventListener("click", greet);
