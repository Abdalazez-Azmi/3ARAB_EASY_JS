let f_inp = document.getElementById("f-inp");
let s_inp = document.getElementById("s-inp");

const inputHandler = function (e) {
    
        
  let ar = "ءؤىئأبتثجحخدذرزسشصضطظعغفقكلمنهـوي";
  let en = "abcdefghijklmnopqrstuvwxyz";
  let arSplit = ar.split("");
  let enSplit = en.split("");
  let f_split = f_inp.value.split("");
  console.log(f_split);
  let answer = [];
  for (let index = 0; index < f_split.length; index++) {
    if (f_split[index] === "ا" || f_split[index] === "أ") {
      s_inp.value = "a" 
      answer.push(s_inp.value);
      s_inp.value = answer;
      if (s_inp.value.length !== 1) {
        s_inp.value === ""
        console.log(answer.length);
      }
    } else if (f_split[index] === "ب") {
      s_inp.value = "b";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ت") {
      s_inp.value = "t";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ث") {
      s_inp.value = "t";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ج") {
      s_inp.value = "j";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ح") {
      s_inp.value = "7";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "خ") {
      s_inp.value = "5";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "د") {
      s_inp.value = "d";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ذ") {
      s_inp.value = "z";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ر") {
      s_inp.value = "r";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ز") {
      s_inp.value = "z";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "س") {
      s_inp.value = "s";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ش") {
      s_inp.value = "sh";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ص") {
      s_inp.value = "9";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ض") {
      s_inp.value = "d";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ع") {
      s_inp.value = "3";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "غ") {
      s_inp.value = "4";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ف") {
      s_inp.value = "f";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ق") {
      s_inp.value = "q";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ك") {
      s_inp.value = "k";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ل") {
      s_inp.value = "l";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "م") {
      s_inp.value = "m";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ن") {
      s_inp.value = "n";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ه") {
      s_inp.value = "h";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "و") {
      s_inp.value = "w";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ي") {
      s_inp.value = "e";

      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ئ") {
      s_inp.value = "ee";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ى") {
      s_inp.value = "wa";
      answer.push(s_inp.value);
      s_inp.value = answer;
    } else if (f_split[index] === "ؤ") {
      s_inp.value = "o";
      answer.push(s_inp.value);
      s_inp.value = answer;

      console.log(answer);
    } else if (f_split[index] === "ء") {
      s_inp.value = "a";
      answer.push(s_inp.value);
      s_inp.value = answer;
      console.log(answer);
    }

    // s_inp.value ="x";
  }
};

f_inp.addEventListener("input", inputHandler);

const toggle = () => {
    console.log(10);
  if (f_inp.placeholder  === "عربي") {
    f_inp.placeholder = "انجليزي";
    s_inp.placeholder = "عربي"
  } else if (f_inp.placeholder  === "انجليزي") {
f_inp.placeholder  = "عربي"
s_inp.placeholder =" انجليزي"


  }
};
