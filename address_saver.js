window.onload = function(){

	// chrome.storage.local.get('address1', function(result){
	//  		var url = result.address1;
	//  		window.open(url);
	//  		//window.open(result.address1);
	//  	});

	
	var addressSaver = document.getElementById('submit');
	
	if(addressSaver){
		addressSaver.onclick = function(element) {
		var address = document.getElementById("address").value;
		console.log('Currently the address is' + address);
		chrome.storage.local.set({'address1': address},function(result){
		 	console.log('Value is set to' + address);
			 });

			};
	}



	var savedAddress = document.getElementById('savedAddress');
	if(savedAddress){

		savedAddress.onclick = function(element) {

	 	chrome.storage.local.get('address1', function(result){
	 		var url = result.address1;
	 		//alert(url);
	 		window.open(url);
	 		//window.open(result.address1);
	 	});
		};
	}

};



