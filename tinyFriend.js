//Finding the small name for this array below:

var arry = ["karim","jasim","roky","fol",]
var lil_friend = arry[0];

function tineyFriend() {
    for (let i = 0; i < arry.length; i++) {
        const element = arry[i];
        if (element < lil_friend) {
            lil_friend = element;
        }
    }
    return lil_friend;
}
console.log(tineyFriend());