'use strict';

function smokeCounting(costOfPacks, quantityPerWeek) {
    if (quantityPerWeek < 0) {
        console.log(`Ошибка в введенных данных. \n`);
        return;
    }

    let counting = costOfPacks * quantityPerWeek * 4 * 12;
    console.log(`Вы тратите на сигареты: ${counting} в год`);

    if (quantityPerWeek === 0) {
        console.log(`Кто не курит и не пьет, тот здоровеньким помрет \n`);
    }
    else if (quantityPerWeek > 0 && quantityPerWeek <= 5) {
        console.log(`Хватит баловаться! Пора бросать! \n`);
    }
    else if (quantityPerWeek > 5 && quantityPerWeek <= 20) {
        console.log(`И так проблемы с окружающей средой, а ваш дым ее еще больше усугубляет \n`);
    }
    else if (quantityPerWeek > 20) {
        console.log(`Да вы просто паровоз`);
    }
}
smokeCounting(130, -4);
smokeCounting(130, 0);
smokeCounting(130, 4);
smokeCounting(130, 6);
smokeCounting(130, 25);