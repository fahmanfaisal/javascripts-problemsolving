var speech = "I am   a crazy guy. React   programming   is on the way:"

var count = 0;
for (let  i = 0;  i < speech.length;  i++) {
    const char = speech[i];
    if (char == " " && speech[i-1] != " ") {
        count++;
    }
}
count++;

console.log(count);