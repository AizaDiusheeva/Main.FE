class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

   
    deposit_accountNumber(new_money) {
        try {
            if (new_money <= 0) {
                throw new Error("Сумма для внесения должна быть больше 0.");
            }
            this.balance += new_money;
            console.log(`Вы внесли ${new_money}. Новый баланс: ${this.balance}`);
        } catch (error) {
            console.error(`Ошибка при внесении средств: ${error.message}`);
        }
    }

   
    withdraw_accountNumber(take_money) {
        try {
            if (take_money <= 0) {
                throw new Error("Сумма для снятия должна быть больше 0.");
            }
            if (take_money > this.balance) {
                throw new Error("Недостаточно средств для снятия.");
            }
            this.balance -= take_money;
            console.log(`Вы сняли ${take_money}. Остаток на счёте: ${this.balance}`);
        } catch (error) {
            console.error(`Ошибка при снятии средств: ${error.message}`);
        }
    }

   
    check_balance() {
        try {
            if (this.balance < 0) {
                throw new Error("Баланс не может быть отрицательным.");
            }
            console.log(`Текущий баланс счета ${this.accountNumber}: ${this.balance}`);
            return this.balance;
        } catch (error) {
            console.error(`Ошибка при проверке баланса: ${error.message}`);
        }
    }
}


const myAccount = new BankAccount("123456789", 3000);  // Создаём счёт с балансом 3000

myAccount.check_balance();            // Проверяем баланс
myAccount.deposit_accountNumber(500); // Вносим 500
myAccount.withdraw_accountNumber(200); // Снимаем 200
myAccount.withdraw_accountNumber(4000); // Пытаемся снять больше средств, чем доступно
myAccount.deposit_accountNumber(-100);  // Пытаемся внести некорректную сумму
myAccount.check_balance();            // Проверяем баланс