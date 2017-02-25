

export default class {
    static formatCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static numbersOnly(x) {
        return x.toString().replace(/\D/g,'');
    }
    static numbersAndDot(x) {
        return x.toString().replace(/[^\d.-]/g, '');
    }
    
}