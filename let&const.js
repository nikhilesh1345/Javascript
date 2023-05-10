function calculateSalary(job){
    var income=5;
    if(job){
        var income=50;
    }
    {
        var income=500;
        {
        var income=5000;
        }
    }
    return income
}
console.log(calculateSalary(true))

// (function() {
//     var x = 10;
//     (function() {
//       var x = 20;
//        (function() {
//         console.log(x);
//         var x = 30;
//     })();
//    })();
//   })();