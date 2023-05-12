import inquirer from "inquirer";


const answer = await inquirer.prompt([
    {
      type: "input",
      name: "array",
      message: "Please! Enter your paragraph:",
    },
  ]);


let countspace=0, countword=0,countChar=0;
let removeSpaces = "";
  for (let i = 0; i < answer.array.length; i++) {
    const char = answer.array[i];
    if (char !== " " ) {
      removeSpaces += char;
    }

    if (char == " " || char== "." ){
      
      countspace++;
    }
  }
  countword=countspace+1;
  for(let j=0;j<removeSpaces.length;j++)
  {
    countChar++;
  }
  console.log("Number of characters without white_spaces in paragraph are",countChar);
  console.log("Number of words in paragraph are",countword-1);
  