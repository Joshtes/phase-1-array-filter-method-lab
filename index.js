// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, name){

    return array.filter( element =>{

     return element.toLowerCase() === name.toLowerCase()
    })
    }

console.log(findMatching(drivers, 'Bobby'));


function fuzzyMatch(array, letter){

    return array.filter( element =>{

        return element.startsWith(letter)
       })
}

console.log(fuzzyMatch(drivers, "S"))




// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];



function matchName (array, name){
   return array.filter (key => {
      return key.name.toLowerCase() === name.toLowerCase();
   })
}

console.log (matchName(drivers, "Bobby"));


// function superbowlWin(array){
  
//     const answer = array.find ( (key) => key.result === "W" 
//     )
//       if(answer){
//           return answer.year
//         } 
//     }
  
//     superbowlWin(record);