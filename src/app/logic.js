

// Javascript program to print all
// combination of size r in an array of size n

	/* arr[] ---> Input Array
	data[] ---> Temporary array to store current combination
	start & end ---> Starting and Ending indexes in arr[]
	index ---> Current index in data[]
	r ---> Size of a combination to be printed */
let noOfTeams = 0;
let allTeams = [];
	function combinationUtil(arr,data,start,end,index,r,arr2)
	{
      let ytr = [];
		// Current combination is ready to be printed, print it
		if (index == r)
		{
			for (let j=0; j<r; j++)
			{
				ytr.push(data[j]);
			}
          filter(ytr, arr2);
          
		}
		
		// replace index with all possible elements. The condition
		// "end-i+1 >= r-index" makes sure that including one element
		// at index will make a combination with remaining elements
		// at remaining positions
		for (let i=start; i<=end && end-i+1 >= r-index; i++)
		{
			data[index] = arr[i];
			combinationUtil(arr, data, i+1, end, index+1, r, arr2);
		}
      
	}

function filter(arr, topPlayers){
  let names = arr.map(obj => {
  return obj.name;
});


let checkSubset =  topPlayers.every(function(val) {
  return names.indexOf(val.name) >= 0;
})
  
  if(arr.some(x => x.group == 'Keeper') && arr.some(x => x.group == 'Batsman') && 
    arr.some(x => x.group == 'All-Rounder') && arr.some(x => x.group == 'Bowler') && 
    checkSubset){
    allTeams.push(arr);
    noOfTeams++;
  }
  
}
	
	// The main function that prints all combinations of size r
	// in arr[] of size n. This function mainly uses combinationUtil()
	export function generateTeams(arr, top)
	{
    let noOfPlayers = 11;
    let n = arr.length;
		// A temporary array to store all combination one by one
		let data = new Array(noOfPlayers);
		
		// Generate teams using temporary array 'data[]'
		combinationUtil(arr, data, 0, n-1, 0, noOfPlayers, top);
      return allTeams;
	}

	