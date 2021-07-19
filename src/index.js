
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let new_arr=[];
   for (var i in matrix){
     if (i%2==0){ new_arr.push(matrix[i])}
     else {new_arr.push(matrix[i].reverse())};
     
   }
   return [].concat(...new_arr);
}
