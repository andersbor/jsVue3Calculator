Vue.createApp({
    data() {
        return {
            number1: 0,
            number2: 0,
            result: null,
            operation: "+"
        }
    },
    methods: {
        calculate() {
            //this.result = this.number1 + this.number2
            switch (this.operation) {
                case "+": this.result = this.number1 + this.number2; break
                case "-": this.result = this.number1 - this.number2; break
                case "*": this.result = this.number1 * this.number2; break
                case "/": this.result = this.number1 / this.number2; break
            }
        }
    }
}).mount("#app")