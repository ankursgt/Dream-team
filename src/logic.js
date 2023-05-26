

// Javascript program to print all
// combination of size r in an array of size n

	/* arr[] ---> Input Array
	data[] ---> Temporary array to store current combination
	start & end ---> Starting and Ending indexes in arr[]
	index ---> Current index in data[]
	r ---> Size of a combination to be printed */
let noOfTeams = 0;
	function combinationUtil(arr,data,start,end,index,r)
	{
      let ytr = [];
		// Current combination is ready to be printed, print it
		if (index == r)
		{
			for (let j=0; j<r; j++)
			{
				ytr.push(data[j]);
			}
          filter(ytr);
          
		}
		
		// replace index with all possible elements. The condition
		// "end-i+1 >= r-index" makes sure that including one element
		// at index will make a combination with remaining elements
		// at remaining positions
		for (let i=start; i<=end && end-i+1 >= r-index; i++)
		{
			data[index] = arr[i];
			combinationUtil(arr, data, i+1, end, index+1, r);
		}
      
	}

function filter(arr){
  let top = [{name:'Saha', group:'Keeper'},
              {name:'Gill', group:'Batsman'},
             {name:'S Sudarshan', group:'Batsman'},
             {name:'Short', group:'All'},
             {name:'Shankar', group:'All'},
             {name:'Rabada', group:'Bowler'},
            {name:'Rashid', group:'Bowler'},
            {name:'Arshdeep', group:'Bowler'},
            {name:'Shami', group:'Bowler'},
            {name:'Mohit', group:'Bowler'}];
  
  let names = arr.map(function(obj) {
  return obj.name;
});


let checkSubset =  top.every(function(val) {
  return names.indexOf(val.name) >= 0;
})
  
  if(arr.some(x => x.group == 'Keeper') && arr.some(x => x.group == 'Batsman') && 
    arr.some(x => x.group == 'All') && arr.some(x => x.group == 'Bowler') && 
    checkSubset){
    console.log(arr);
    noOfTeams++;
  }
  
}
	
	// The main function that prints all combinations of size r
	// in arr[] of size n. This function mainly uses combinationUtil()
	function printCombination(arr,n,r)
	{
		// A temporary array to store all combination one by one
		let data = new Array(r);
		
		// Print all combination using temporary array 'data[]'
		combinationUtil(arr, data, 0, n-1, 0, r);
      console.log(noOfTeams);
	}
	
	/*Driver function to check for above function*/
	let arr=[{name:'J Sharma', group:'Keeper'},
              {name:'Saha', group:'Keeper'},
             {name:'Gill', group:'Batsman'},
             {name:'Miller', group:'Batsman'},
              {name:'Rajapaksa', group:'Batsman'},
             {name:'S Sudarshan', group:'Batsman'},
             {name:'Shahrukh', group:'Batsman'},
             {name:'Curran', group:'All'},
             {name:'Pandya', group:'All'},
             {name:'R Dhawan', group:'All'},
             {name:'Short', group:'All'},
             {name:'Raza', group:'All'},
             {name:'Shankar', group:'All'},
            {name:'Rabada', group:'Bowler'},
            {name:'Rashid', group:'Bowler'},
            {name:'Arshdeep', group:'Bowler'},
            {name:'Shami', group:'Bowler'},
             {name:'Mohit', group:'Bowler'},
            {name:'Alzari Joseph', group:'Bowler'},
            {name:'Chahar', group:'Bowler'},
            {name:'Mavi', group:'Bowler'},]
	let r = 11;
	let n = arr.length;
	printCombination(arr, n, r);
	