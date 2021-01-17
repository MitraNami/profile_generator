const readline = require('readline');


const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = [];

const createMesg = function(ans) {
  const msg = `${ans[0]} loves listening to ${ans[2]} while ${ans[1]}, devouring ${ans[4]} 
  for ${ans[3]}, prefers ${ans[5]} over any other sport, and is amazing at ${ans[6]}.`;
  return msg;
};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(questions[0], ans => {
  answers.push(ans);
  rl.question(questions[1], ans => {
    answers.push(ans);
    rl.question(questions[2], ans => {
      answers.push(ans);
      rl.question(questions[3], ans => {
        answers.push(ans);
        rl.question(questions[4], ans => {
          answers.push(ans);
          rl.question(questions[5], ans => {
            answers.push(ans);
            rl.question(questions[6], ans => {
              rl.close();
              answers.push(ans);
              console.log(createMesg(answers));
            });
          });
        });
      });
    });
  });
});
