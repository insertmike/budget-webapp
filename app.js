// Budget Controller
var budgetController = (function(){

    // To do 

 })()

// UI Controller
var UIController = (function() {

    // To do 

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the field input data

        // 2. Add Item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate Budget

        // 5. Display the Budget to the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        // Is key pressed 'return'
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController,UIController);