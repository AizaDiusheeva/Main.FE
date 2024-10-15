// 3)Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.

class ShoppingCart {
    constructor() {
        this.items = [];  // Массив для хранения товаров
        this.totalPrice = 0;  // Общая цена
    }

    // Метод для добавления товара в корзину
    addItem(item) {
        try {
            // Проверяем, что товар — это объект с полями name и price
            if (typeof item !== 'object' || !item.name || typeof item.price !== 'number' || item.price < 0) {
                throw new Error("Товар должен быть объектом с корректными свойствами name и price.");
            }
            this.items.push(item);  // Добавляем товар в массив
            this.totalPrice += item.price;  // Обновляем общую цену
            console.log(`Товар "${item.name}" добавлен. Текущая общая цена: ${this.totalPrice}`);
        } catch (error) {
            console.error(`Ошибка при добавлении товара: ${error.message}`);
        }
    }

    // Метод для удаления товара из корзины
    removeItem(itemName) {
        try {
            // Находим индекс товара в массиве по имени
            const itemIndex = this.items.findIndex(item => item.name === itemName);
            if (itemIndex === -1) {
                throw new Error(`Товар с именем "${itemName}" не найден в корзине.`);
            }
            // Удаляем товар и обновляем общую цену
            const removedItem = this.items[itemIndex];
            this.items.splice(itemIndex, 1);
            this.totalPrice -= removedItem.price;
            console.log(`Товар "${removedItem.name}" удалён. Текущая общая цена: ${this.totalPrice}`);
        } catch (error) {
            console.error(`Ошибка при удалении товара: ${error.message}`);
        }
    }

    // Метод для получения текущего списка товаров и общей цены
    getCartSummary() {
        console.log("Товары в корзине:");
        this.items.forEach(item => {
            console.log(`- ${item.name}: ${item.price}`);
        });
        console.log(`Общая цена: ${this.totalPrice}`);
    }
}

// Пример использования:
const cart = new ShoppingCart();

// Добавляем товары
cart.addItem({ name: "Телефон", price: 600 });
cart.addItem({ name: "Ноутбук", price: 1200 });
cart.addItem({ name: "Чехол", price: 20 });

// Пытаемся добавить некорректный товар
cart.addItem({ name: "Некорректный товар", price: -50 });

// Удаляем товар
cart.removeItem("Телефон");

// Пытаемся удалить товар, которого нет в корзине
cart.removeItem("Планшет");

// Получаем итоговую информацию о корзине
cart.getCartSummary();
