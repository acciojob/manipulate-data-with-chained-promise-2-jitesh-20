function ManipulateData(){
	let output=document.getElementById("output");
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	}).then((firstData)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let evenArr=firstData.filter((n)=>n%2==0);
				output.textContent=evenArr.join(' ');
				resolve(evenArr);
			},1000)
		})
	}).then((secData)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let newArr=secData.filter((n)=>n*2);
				output.textContent=newArr.join(' ');
				resolve(newArr);
			},2000)
		})
	})
}


ManipulateData();