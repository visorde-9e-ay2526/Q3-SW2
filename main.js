function checkBudget (){
    let budget = document.getElementById("budget").value;
    //20% discount
    let disvalue = Number(0.2*budget);
    document.getElementById("disc-box").innerHTML=`
     <div class="container bg-secondary rounded mt-5">
        <h4 class="text-white">Recommended Brands:</h4>

        <button class="btn btn-primary mt-3">Acer</button>
        <button class="btn btn-primary mt-3">HP</button>
        <button class="btn btn-primary mt-3">Lenovo</button>
        <p class="text-muted">Eligible Discount <span class="bg-danger" id="discount">${disvalue}</span></p>
     </div> `;
}

//store location
function locateStore (){
    document.getElementById("location-box").innerHTML=`
        <div class="container bg-secondary rounded mt-5 p-3">
            <div class="d-flex">
                <div class="p-2">
                    <img src="pcexpress.png" class="pcexpress">
                </div>
                <div class="p-2">
                    <img src="villman.jpg" class="villman">
                </div>
                <div class="p-2">
                    <img src="octagon.png" class="octagon">
                </div>
            </div>
            <hr>
            <p>Store Locations:</p>
            <button class="btn btn-primary mt-3">PC Express</button>
            <button class="btn btn-primary mt-3">VillMan Computers</button>
            <button class="btn btn-primary mt-3">Octagon</button>
        </div> ` ;
}