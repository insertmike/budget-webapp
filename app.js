// Budget Controller
var budgetController = (function(){

    var Expense = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

 })()

 // Testing purposes
 var Expense = function(id,description,value) {
    this.id = id;
    this.description = description;
    this.value = value;
};


// UI Controller
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                 type: document.querySelector(DOMstrings.inputType).value, // Either INC or EXP
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }

    };
})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {
    // Initialization Function
    var setupEventListeners = function() {
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            // Is key pressed 'return'
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    
    };

  

    var ctrlAddItem = function () {
        // 1. Get the field input data
        var input = UIController.getInput();

        // 2. Add Item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate Budget

        // 5. Display the Budget to the UI

    };

    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }
   
})(budgetController,UIController);

// Calling initializing function
controller.init();