# codingChallangeByExalense
# Problem Staement
You're looking to move into a new apartment on specific street, and you're given a list of contiguous blocks on that street where
each block contains an apartment that you could move into.

You also have a list of requirements: a list of buildings that are important to you. For instance, you might value having a school and
a gym near your apartment. The list of blocks that you have contains information at every block about all of the buildings that are
present and absent at the block in question. For instance, for every block, you might know whether a school, a pool, an office, and a
gym are present.

In order to optimize your life, you want to pick an apartment block such that you minimize the farthest distance you'd have to walk
from your apartment to reach any of your required buildings.

Write a function that takes in a list of contiguous blocks on a specific street and a list of your required buildings and that returns
the location (the index) of the block that's most optimal for you.

If there are multiple most optimal blocks, your function can return the index of any one of them.

Sample Input
blocks = [
{
    "gym": false,
    "school": true,
    "store": false,
},
{
    "gym": true,
    "school": false,
    "store": false,
},
{
    "gym": true,
    "school": true,
    "store": false,
},
{
    "gym": false,
    "school": true,
    "store": false,
},
{
"gym": false,
"school": true,
"store": true,
}
]
reqs = ["gym", "school", "store"]

Sample Output
3 // at index 3, the farthest you'd have to walk to reach a gym, a school, or a store is 1 block; at any other index, you'd have to walk farther




# Brief Explanation


The apartmentHunting function is the main function that takes in two arguments:

blocks: an array of objects representing the blocks of an apartment complex. Each object has several boolean properties, representing the amenities available in that block.
reqs: an array of strings representing the amenities that the apartment seeker is looking for.
The apartmentHunting function returns the index of the block that is the best fit for the apartment seeker based on the following logic:

It first calculates the minimum distance from each block to the nearest block that has each of the required amenities (reqs). This is done using the getMinDistances function, which takes in blocks and a single req (amenity) and returns an array of the minimum distances from each block to the nearest block with that amenity. The minimum distances for all the required amenities are then stored in the minDistancesFromBlocks array.

It then calculates the maximum of the minimum distances for each block, using the getMaxDistancesAtBlocks function. This function takes in blocks and minDistancesFromBlocks, and returns an array of the maximum of the minimum distances for each block.

Finally, it returns the index of the block that has the minimum maximum distance, using the getIdAtMinValue function. This function takes in an array and returns the index of the element with the minimum value.

Here is an example of how the apartmentHunting function can be used:

Copy code
const blocks = [
  { gym: true, school: true, store: false },
  { gym: false, school: false, store: true },
  { gym: true, school: false, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: false, store: false },
];

const reqs = ["gym", "school"];

const bestBlockIndex = apartmentHunting(blocks, reqs);

console.log(bestBlockIndex); // Output: 0
In this example, the apartment seeker is looking for a block with a gym and a school. The apartmentHunting function returns 0, which is the index of the block that has both a gym and a school and is closest to all the other blocks with a gym or a school.



# Short Explanation

The apartmentHunting function is the main function that takes in two arguments: blocks, a list of contiguous blocks on a specific street, and reqs, a list of buildings that are important to the user. It returns the index of the block that is most optimal for the user.

The function first calls the getMinDistances function for each requirement in the reqs list, and stores the results in the minDistancesFromBlocks array. The getMinDistances function takes in a list of blocks and a requirement, and returns an array of minimum distances from each block to the nearest block that has the given requirement. It does this by iterating through the blocks twice: once forward, and once backward. For each iteration, it maintains a variable closestReqIdx that stores the index of the closest block with the given requirement that it has encountered so far. For each block, it calculates the minimum distance to the closest block with the requirement by taking the minimum of the distance from the current block to closestReqIdx, and the distance from the previous block to closestReqIdx.

The getMaxDistancesAtBlocks function takes in a list of blocks and an array of minimum distances from each block to the nearest block with a requirement. It returns an array of maximum distances from each block to any of the required buildings. It does this by iterating through the blocks and for each block, it calculates the maximum distance to any of the required buildings by taking the maximum of the minimum distances from that block to each of the required buildings.

The getIdAtMinValue function takes in an array and returns the index at which the minimum value in the array occurs. It does this by iterating through the array, keeping track of the minimum value and its index, and updating them whenever it encounters a value that is smaller than the current minimum value.

Finally, the apartmentHunting function calls the.
