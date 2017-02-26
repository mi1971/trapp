

export default class {
    static formatCommas(x) {
        x = Math.round(x);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static numbersOnly(x) {
        return x.toString().replace(/\D/g,'');
    }
    static numbersAndDot(x) {
        return x.toString().replace(/[^\d.-]/g, '');
    }

    static monthlyPayments(amount, rate, years) {
        amount = parseInt(amount, 10);
        rate = parseFloat(rate,10) / 12 / 100;
        let payments = parseInt(years,10) * 12;

        // Now compute the monthly payment figure, using esoteric math.
        let x = Math.pow(1 + rate , payments);
        let monthly = (amount*x*rate)/(x-1);  
        return monthly;  
    }

    static monthlyIO(amount, rate) {
        amount = parseInt(amount,10);
        rate = parseFloat(rate,10);
        let payment = amount * rate / 100 / 12

        return payment;  
    }
    
}