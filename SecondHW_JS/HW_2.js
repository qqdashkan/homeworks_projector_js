//Задача 1

    function durationBetweenDates(startDate, endDate, dimention) {
    const firstDate = new Date (startDate);
    const SecondDate = new Date (endDate);

    const duration = Math.abs(SecondDate.getTime() - firstDate.getTime())

    if (dimention === 'seconds') {
        return (duration/1000) + ' seconds';
    }
    if (dimention === 'days') {
        return Math.floor(duration/1000/60/60/24) + ' days';
    }
    if (dimention === 'hours') {
        return (duration/1000/60/60) + ' hours';
    }
    if (dimention === 'minutes') {
        return (duration/1000/60) + ' minutes';
    }
    else {
        return 'Помилка. Спробуйте ще';
    }
}

console.log(durationBetweenDates('05 Oct 2023', '05 Oct 1994', 'days')); 

//Задача 2

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
    };
    
    
    function optimizer(data) {
        const copyPriceData = {}
        
            for (const key in data) {
                copyPriceData[key.toLowerCase()] = Number(data[key]).toFixed(2);
            }
            return copyPriceData;
    };
  
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


        //Задача 4

        function iterativeOddSumTo(number) {

            let sum = 0;
            for (let i = 0; i <= number; i++) {
                if (i%2 !== 0) 
                sum = sum + i;
            }
            return sum;
        };
            
            console.log(iterativeOddSumTo(17)) // 81
            console.log(iterativeOddSumTo(10)) // 25