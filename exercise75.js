// 75. Write a JavaScript program to compute the new ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from best performer to worst performer (winner -> loser).

// Elo system == > take scores and modify them by a given function then sort by the sum of the scores

let eloSystemCompute = (users, eloComputeFunction) => {
    users = users.map(( user, userIndex ) => {
        user.scores = user.scores.map(( value ) => eloComputeFunction.apply(null, [value]));
        return user;
    });

    users.map(( user , userIndex ) => {
        user.ELO_POINTER = user.scores.reduce((accumulator, value, valueIndex, originalArray) => accumulator+value , 0);
        return user;
    });   

    for(let i = 0 ; i < 3 ; i++){
        console.log('');
    }

    // Ascend sort by user.ELO_POINTER
    let usersPointer = users.sort(( user_i, user_j ) => {
        if(user_i.ELO_POINTER > user_j.ELO_POINTER){
            return 1;
        }
        if(user_i.ELO_POINTER < user_j.ELO_POINTER){
            return -1;
        }
        if(user_i.ELO_POINTER === user_j.ELO_POINTER){
            return 0;
        }
    });
    
    // Delete ELO_POINTER PROPERTY BECAUSE IT'S JUST A POINTER 
    users = users.map((user) => {
        delete user.ELO_POINTER;
    });

    // RETURN usersPointer
    return usersPointer;
};

let func = (powNumber) => Math.pow(powNumber, 2);
let users = [
    firstUser = {
        scores: [4, 5, 6]
    },
    secondUser = {
        scores: [1, 2, 3]
    },
]


eloSystemCompute(users, func);

// let sortAscend = (arr) => {
//     arr.sort((a, b) => {
//         console.log(`a : ${a}`);
//         console.log(`b : ${b}`);

//         if(a > b){
//             return 1;
//         }
//         if(a < b){
//             return -1;
//         }
//         if(a === b){
//             return 0;
//         }
//     })
//     return arr;
// };

// let arr = [5, 1, 3];
// console.log(sortAscend(arr));