//    1.
//    Mountain Hiking Elevation Analysis
//    
//    Problem Statement
//    
//    A trekking company records the elevation (in meters) reached by a hiker at different checkpoints during a mountain climb.
//    
//    A checkpoint is considered a peak checkpoint if its elevation is not smaller than its adjacent checkpoints.
//    
//    Given an array elevation[] of size N, find the index of any one peak checkpoint.
//    
//    Test Case 1
//    
//    Input:
//    elevation = [1200, 1450, 1700, 1600, 1500]
//    
//    Output:
//    2
//    
//    Explanation:
//    1700 is greater than both adjacent values 1450 and 1600.
//    
//    Test Case 2
//    
//    Input:
//    elevation = [800, 900, 950, 1000]
//    
//    Output:
//    3
//    
//    Explanation:
//    Last element can also be a peak because it has no right neighbor.
//    
//    Test Case 3
//    
//    Input:
//    elevation = [3000]
//    
//    Output:
//    0
//    
//    Explanation:
//    Single element is always a peak.









 let s = parseInt(prompt("Enter elevation: "))
 let elevation = []
 for(let i = 0; i < s; i++){
     num = Number(prompt(`Enter element ${i+1} = `))
     elevation.push(num)
 }
 console.log(elevation)

let res
if (elevation.length > 1) {

    for (let i in elevation) {
        i = Number(i)
        if (i == 0) {
            if (elevation[i] >= elevation[i + 1]) {
                res = i
                break
            }
        }
        else if (i == elevation.length - 1) {
            if (elevation[i] >= elevation[i - 1]) {
                res = i
                break
            }
        }
        else {
            if ((elevation[i - 1] <= elevation[i]) && (elevation[i] >= elevation[i + 1])) {
                res = i
                console.log(i)
                break
            }
        }
    }
}
else {
    res = 0
}
console.log("Result:", res)












