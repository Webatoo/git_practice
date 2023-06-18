// this code is designed to create a random message every time the user presses a button to do so.

// function to recognise onClick event 
// if the button is clicked 
// return a random message

function randomMessage(arr) {
    let selectMessage = arr[Math.floor(Math.random()*20)]
    console.log(selectMessage)
}

const randomMessages = ["You will soon achieve greatness... in a game of hide and seek.",
"Your ability to procrastinate will reach record-breaking heights tomorrow.",
"Remember, a bird in hand is safer than one overhead.",
"Your future looks... hold on, we're still buffering.",
"Don't worry about avoiding temptation. At your age, it will avoid you.",
"Tomorrow, you may want to carry an umbrella... in case of falling fortune cookies.",
"Your neighbors secretly admire your singing. Please continue at 3AM.",
"Beware of ventriloquist dummies. They've got a lot of pull.",
"You will soon find the end of a rainbow. Too bad leprechauns have gone digital.",
"You will soon encounter an alien species... they're called 'morning people'.",
"You have the rare talent of annoying people just by being.",
"You're a genius... compared to your pet rock.",
"The journey of a thousand miles begins with a dead battery and flat tire.",
"Help! I'm a fortune writer trapped in a cookie factory!",
"You're not illiterate. Congratulations!",
"You are unique... just like everyone else.",
"Someone will invite you to a karaoke night. Politely decline.",
"Do not take life too seriously. You're not getting out alive.",
"Your life is a sitcom. But don't worry, people love reruns!",
"The odds of you getting hit by a comet are incredibly low. But never zero."]

randomMessage(randomMessages)
console.log('this message printed')