// Test cases.
minimumAmountOfChange([5, 7, 1, 1, 2, 3, 22]); 

minimumAmountOfChange([1, 1, 1, 1, 1]);

minimumAmountOfChange([1, 5, 1, 1, 1, 10, 15, 20, 100]);


/**
 * Given an array of positive integers representing the values of coins in your possession. 
 * Write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. 
 * The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
 * 
 * @param { array } coins array
 * @returns { number } number
 */
function minimumAmountOfChange( coins ) {
    const sortedCoins = coins.sort((a,b) => a - b);
    
    let minAmountChange = 0;

    for ( const coin of sortedCoins ) {
        if ( coin > minAmountChange + 1 ) {
            return minAmountChange + 1;
        }
        
        minAmountChange += coin;
    }
    
    return minAmountChange + 1;
}