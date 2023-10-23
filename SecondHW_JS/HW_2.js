//Задача 1

    function durationBetweenDates(startDate, endDate, dimention) {
    const firstDate = new Date (startDate);
    const SecondDate = new Date (endDate);

    const duration = (Math.abs(SecondDate.getTime() - firstDate.getTime()))/1000;

    switch(dimention) {
        case 'seconds': 
            console.log(duration + ' seconds'); 
            break;
        case 'days':
            console.log(Math.floor(duration/60/60/24) + ' days');
            break;
        case 'hours':
            console.log((duration/60/60) + ' hours');
            break;
        case 'minutes': 
            console.log((duration/60) + ' minutes');
            break;
        default:
            console.log('Помилка. Спробуйте ще');
    }
}

durationBetweenDates('05 Oct 2023', '05 Oct 1994', 'days'); 

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
            
            console.log(iterativeOddSumTo(1)) // 1
            console.log(iterativeOddSumTo(10)) // 25

        //Задача 3

    function  recursiveOddSumTo(number) {
        
        if (number <= 1) {  
            return number;
        };
      
        if (number%2 !== 0) {
        return number + recursiveOddSumTo (number - 1);
        }

        return recursiveOddSumTo (number - 1);
      
    }

        console.log(recursiveOddSumTo(1)) // 1
        console.log(recursiveOddSumTo(10)) // 25 
        