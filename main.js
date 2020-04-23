// // Типы данных
 
//     //   числа
//     var number = 5;

//     // строка
//     var string = 'Hello';

//     // Символ
//     var sym = Symbol();

//     // Логический
//     var boolean = true;

//     // Если в коде чего то не существует
//     null;

//     // Если существующий объект не имеет значения
//     undefined;

//     // Объект
//     var obj = {};
//     let persone = {
//         name: 'John',
//         age : 25,
//         isMarried: false
//     };
//     console.log(persone.name);
//     console.log(persone['name']);

//     // Массив
//     let arr = ['plum.png', 'plum2.png', 'plum3.png','plum4.png','plum5.png'];
//     console.log(arr[3]);

// // Динамическая типизация
//    //Превращеник в строку
//         // 1-й способ
//         console.log(typeof(String(null)));
//         console.log(typeof(String(4)));
//         // 2-й способ ( канкотенация (объединение строк) )
//         console.log('rr'+'jkhg');
//         console.log( typeof('rr' + 5) );
//         console.log( typeof('' + false) );
//     //Превращеник в число
//         // 1-й способ
//         console.log( typeof( Number(4) ) );
//         // 2-й способ ( унарный плюс )
//         console.log( typeof( 5 + +'5' ) );
//         // 3-й способ
//         console.log( typeof( parseInt('15px', 10) ) );

// // FALSE -   0, '', null, undefined, NaN - всегда будет false    
//     let switcher = null;
//     if(switcher) {
//         console.log('Working');
//     };

// // Условия
//     let num = 50;
//     if(num < 49) {
//         console.log('Error');
//     } else if ( num > 100 ) {
//         console.log('Error 1');
//     } else {
//         console.log('True');
//     };

//     // Тернарный оператор (в его роботе участвуют три аргумента)
//                    //Условие верно       //Условие не верно
//     (num == 50) ?  console.log('True') : console.log('Error');

//     // switch
//     switch (num) {
//         case num < 49:
//              console.log('Error');
//              break; 
//         case num > 100:
//             console.log('Error');
//             break;
//         case num 50:
//             console.log('True');
//             break;            
//         default:
//             console.log('Что-то пошло не так');   
//             break;
//     };

// Циклы

    // let num = 1;
    // // const bodyStyle = document.querySelector('body');

    // // 1) do while
    // do { 
    //     console.log(num);
    //     num++;
    // }
    // while (num < 55);

    // // 2) for
    // for( let i = 1; i < 55; i++ ) {
    //     if( i == 17 ) { 
    //         // console.log('stop'); 
    //         document.querySelector('h1').style.color = 'blue';
    //         break;
    //     }
    //     console.log(i);
    // }

// Задание 1
    let money, time; //глобальные переменные
    function start() {
        money = +prompt("Ваш бюджет на месяц?", "");
        time  = prompt("Введите дату в формате YYYY-MM-DD", "");

        while( isNaN(money) || money == '' || money == null ){
            money = +prompt("Ваш бюджет на месяц?", "");
        }
    };
    start();
    

    let appData = {
        budget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        saving : true
    };

    console.log( money + '-' + time );

    function chooseExpenses() {
        for ( let i = 0; i < 2; i++ ) {

            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");

            if ( 
                    (typeof(a))==='string' 
                    && (typeof(a)) != null 
                    && (typeof(b)) != null 
                    && a !='' 
                    && b !=''   
                ) {
                    console.log(appData.expenses[a] = b);
                    appData.expenses[a] = b; 
            } else { 
                i = 0;
            };  
        };
    };
    chooseExpenses();

    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет :" + appData.moneyPerDay);

    if( appData.moneyPerDay < 1000 ) {
        console.log('У вас минимальный доход');
    } else if ( appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000 ) {
        console.log('У вас средний доход');
    } else if ( appData.moneyPerDay > 2000 ) {
        console.log('У вас высокий доход');
    };

    // Ф-ция которая считает накопления с депозита (если он есть)
    function checkSavings() {
        if( appData.saving == true ) {
            let save = +prompt("Какова сумма накоплений?") = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            // Прибль за месяц
            appData.monthIncome = save/100/12*percent;   
            alert('Доход в месяц с вашего депозита :' + appData.monthIncome)
        } 
    }
    function checkSavings();

    // appData.expenses[a] = b;

// End Задание 1

// Задание 2
    // let x = 5;
    // console.log([ ] + false - null + true);
    // let y = 1;
    // let x = y = 2;
    // alert( null || 2 && 5 || 4 );

    // let a = [1, 2, 3]; 
    // let b = [1, 2, 3];
    // if (a == b) {
    //     console.log('true');
    // } else {
    //     console.log('false');
    // }

    // alert( +"Infinity" );
    // console.log( typeof( +"Infinity" ) );
// End Задание 2