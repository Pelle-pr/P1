console.log("Before loop");

for (let i = 0; i < 3; i++) {
  // For loopet har allerde kørt igennem før "svaret" kommer tilbage, da Var bliver hoisted op og er derfor allerede 3 når console.log endelig kommer igennem
  setTimeout(() => {
    // hvis let blev brugt så ville den skrive 0-1-2 da let ikke bliver hoistet og lever kun inde i hver setTimeout da det er en closure.
    console.log(`value of i: ${i}`);
  }, 1000);
}

console.log("After Loop");
