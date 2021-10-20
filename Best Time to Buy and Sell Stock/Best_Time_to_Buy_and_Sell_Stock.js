/* Approach: Here we are given prices of stocks on each day
and we to calculate maximum profit from these stock prices
by selecting best day to buy and sell the stock with the 
condition that we cannot sell the stock on the day on which
we buy the stock and we can sell it on another day in future 
after the buying day. To get the maximum profit first we have 
to choose the day which has lowest price of stock so that we can
sutract from maximum value to get maximum profit. Let we have
given prices of stock of 7 days. For choosing minimum price stock 
we can simply choose minimum value from the list of prices but 
what if minimum value is on the last 7th day then we didn't have
any day to sell the stock so our minimum value cannot be fixed 
and we have to choose a minimum value everytime and for that
minimum value and we have to find max value which can give max 
profit. Let we assign price of first day as minimum value of stock
and call this as minprice and now we iterate over all prices and 
compare if any price value is less than this minprice, if yes we
can store that value in minprice and now we subtract minprice from
price and calculate profit. Now if minprice is not change from the
price of next day then we choose previous minprice and then we 
again calculate profit. This way we can calculate minprice and subtract 
from price on each day which are after the day of buying price
and whosever price gives maximum value will be the
maximum price and that difference is the maximum profit. 
We also compare profit from previous day to current day profit to retain
maximum profit everytime and if at last we get value of minprice on the 
last day and calculate profit which turns to be zero so we retain our 
value of profit from the previous day iteration which will be the maximum 
profit value */


var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit
};
