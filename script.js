


function next(){
  var count = 0;
  const deleteP = document.getElementById('remove');
  deleteP.remove();
 
  let $block = new DocumentFragment();

  const $div = document.createElement('div');
  const $blockTitle = document.createElement('p');
  const $quest1 = document.createElement('span');
  const $quest2 = document.createElement('span');
  const $quest3 = document.createElement('span');
  const $blockDel = document.createElement('button');

  $div.classList.add('quest-card');
  $blockTitle.classList.add('que');
  $quest1.classList.add('issue');
  $quest2.classList.add('issue');
  $quest3.classList.add('issue');
  $blockDel.classList.add('btn-text');
  
  $blockTitle.innerHTML = `1 - Вопрос: Дата нашего знакомства? `;
  $quest1.innerHTML = `1. 16 ноября`;
  $quest2.innerHTML = `2. 9 ноября `;
  $quest3.innerHTML = `3. 23 ноября `;
  $blockDel.innerHTML = `Перейти к след вопросу `;


  $div.appendChild($blockTitle);
  $div.appendChild($quest1);
  $div.appendChild($quest2);
  $div.appendChild($quest3);
  $div.appendChild($blockDel);
  $block.appendChild($div);
  document.querySelector('#quest-card').append($block);
  $quest1.addEventListener('click',() =>{
    count += 1;
  }
  )
  $blockDel.addEventListener('click',() =>{
    $div.remove();
    

  let $blockTwoQuest = new DocumentFragment();

  const $divTwoQuest = document.createElement('div');
  const $blockTitleTwoQuest = document.createElement('p');
  const $questTwoQuest1 = document.createElement('span');
  const $questTwoQuest2 = document.createElement('span');
  const $questTwoQuest3 = document.createElement('span');
  const $blockDelTwoQuest = document.createElement('button');

  $divTwoQuest.classList.add('quest-card');
  $blockTitleTwoQuest.classList.add('que');
  $questTwoQuest1.classList.add('issue');
  $questTwoQuest2.classList.add('issue');
  $questTwoQuest3.classList.add('issue');
  $blockDelTwoQuest.classList.add('btn-text');

  
  $blockTitleTwoQuest.innerHTML = `2 - Вопрос: Дата нашего первого секса? `;
  $questTwoQuest1.innerHTML = `1. 8 мая`;
  $questTwoQuest2.innerHTML = `2. 27 декабря `;
  $questTwoQuest3.innerHTML = `3. 16 апреля `;
  $blockDelTwoQuest.innerHTML = `Перейти к след вопросу `;


  $divTwoQuest.appendChild($blockTitleTwoQuest);
  $divTwoQuest.appendChild($questTwoQuest1);
  $divTwoQuest.appendChild($questTwoQuest2);
  $divTwoQuest.appendChild($questTwoQuest3);
  $divTwoQuest.appendChild($blockDelTwoQuest);
  $blockTwoQuest.appendChild($divTwoQuest);
  document.querySelector('#quest-card').append($blockTwoQuest);

  $questTwoQuest2.addEventListener('click',() =>{
    count += 1;
  }
  )
  $blockDelTwoQuest.addEventListener('click',() =>{
    $divTwoQuest.remove();

  let $blockthQuest = new DocumentFragment();

  const $divthQuest = document.createElement('div');
  const $blockTitlethQuest = document.createElement('p');
  const $questthQuest1 = document.createElement('span');
  const $questthQuest2 = document.createElement('span');
  const $questthQuest3 = document.createElement('span');
  const $blockDelthQuest = document.createElement('button');

  $divthQuest.classList.add('quest-card');
  $blockTitlethQuest.classList.add('que');
  $questthQuest1.classList.add('issue');
  $questthQuest2.classList.add('issue');
  $questthQuest3.classList.add('issue');
  $blockDelthQuest.classList.add('btn-text');

  
  $blockTitlethQuest.innerHTML = `3 - Вопрос: Когда мы впервые пошли в театр? `;
  $questthQuest1.innerHTML = `1. 26 января`;
  $questthQuest2.innerHTML = `2. 27 февраля `;
  $questthQuest3.innerHTML = `3. 17 января `;
  $blockDelthQuest.innerHTML = `Перейти к след вопросу `;


  $divthQuest.appendChild($blockTitlethQuest);
  $divthQuest.appendChild($questthQuest1);
  $divthQuest.appendChild($questthQuest2);
  $divthQuest.appendChild($questthQuest3);
  $divthQuest.appendChild($blockDelthQuest);
  $blockthQuest.appendChild($divthQuest);

  $questthQuest1.addEventListener('click',() =>{
    count += 1;
  }
  );
  document.querySelector('#quest-card').append($blockthQuest);


  $blockDelthQuest.addEventListener('click',() =>{
    $divthQuest.remove();

    
    let $blockfourQuest = new DocumentFragment();
    
    const $divfourQuest = document.createElement('div');
    const $blockTitlefourQuest = document.createElement('p');
    const $questfourQuest1 = document.createElement('span');
    const $questfourQuest2 = document.createElement('span');
    const $questfourQuest3 = document.createElement('span');
    const $blockDelfourQuest = document.createElement('button');
    
    $divfourQuest.classList.add('quest-card');
    $blockTitlefourQuest.classList.add('que');
    $questfourQuest1.classList.add('issue');
    $questfourQuest2.classList.add('issue');
    $questfourQuest3.classList.add('issue');
    $blockDelfourQuest.classList.add('btn-text');
    
    
    $blockTitlefourQuest.innerHTML = `4 - Вопрос: Где был наш первый поцелуй? `;
    $questfourQuest1.innerHTML = `1. На площади`;
    $questfourQuest2.innerHTML = `2. У гринвича`;
    $questfourQuest3.innerHTML = `3. У цирка`;
    $blockDelfourQuest.innerHTML = `Перейти к след вопросу `;
    
    
    $divfourQuest.appendChild($blockTitlefourQuest);
    $divfourQuest.appendChild($questfourQuest1);
    $divfourQuest.appendChild($questfourQuest2);
    $divfourQuest.appendChild($questfourQuest3);
    $divfourQuest.appendChild($blockDelfourQuest);
    $blockfourQuest.appendChild($divfourQuest);
    
    $questfourQuest3.addEventListener('click',() =>{
      count += 1;
    }
    );
    document.querySelector('#quest-card').append($blockfourQuest);


    $blockDelfourQuest.addEventListener('click',() =>{
      $divfourQuest.remove();
      

    let $blockfiveQuest = new DocumentFragment();
    
    const $divfiveQuest = document.createElement('div');
    const $blockTitlefiveQuest = document.createElement('p');
    const $questfiveQuest1 = document.createElement('span');
    const $questfiveQuest2 = document.createElement('span');
    const $questfiveQuest3 = document.createElement('span');
    const $blockDelfiveQuest = document.createElement('button');
    
    $divfiveQuest.classList.add('quest-card');
    $blockTitlefiveQuest.classList.add('que');
    $questfiveQuest1.classList.add('issue');
    $questfiveQuest2.classList.add('issue');
    $questfiveQuest3.classList.add('issue');
    $blockDelfiveQuest.classList.add('btn-text');
    
    
    $blockTitlefiveQuest.innerHTML = `5 - Вопрос: Что я тебе дарил на прошлое 14 февраля? `;
    $questfiveQuest1.innerHTML = `1. Пазл`;
    $questfiveQuest2.innerHTML = `2. Цветы`;
    $questfiveQuest3.innerHTML = `3. Конфеты`;
    $blockDelfiveQuest.innerHTML = `Перейти к след вопросу `;
    
    
    $divfiveQuest.appendChild($blockTitlefiveQuest);
    $divfiveQuest.appendChild($questfiveQuest1);
    $divfiveQuest.appendChild($questfiveQuest2);
    $divfiveQuest.appendChild($questfiveQuest3);
    $divfiveQuest.appendChild($blockDelfiveQuest);
    $blockfiveQuest.appendChild($divfiveQuest);
    $questfiveQuest1.addEventListener('click',() =>{
      count += 1;
    }
    );
    document.querySelector('#quest-card').append($blockfiveQuest);


    $blockDelfiveQuest.addEventListener('click',() =>{
      $divfiveQuest.remove();
      let $blocksixQuest = new DocumentFragment();
    
      const $divsixQuest = document.createElement('div');
      const $blockTitlesixQuest = document.createElement('p');
      const $questsixQuest1 = document.createElement('span');
      const $questsixQuest2 = document.createElement('span');
      const $questsixQuest3 = document.createElement('span');
      const $blockDelsixQuest = document.createElement('button');
      
      $divsixQuest.classList.add('quest-card');
      $blockTitlesixQuest.classList.add('que');
      $questsixQuest1.classList.add('issue');
      $questsixQuest2.classList.add('issue');
      $questsixQuest3.classList.add('issue');
      $blockDelsixQuest.classList.add('btn-text');
      
      
      $blockTitlesixQuest.innerHTML = `6 - Вопрос: Когда мы спали первый день вместе? `;
      $questsixQuest1.innerHTML = `1. 8 июня`;
      $questsixQuest2.innerHTML = `2. 11 июня`;
      $questsixQuest3.innerHTML = `3. 10 июня`;
      $blockDelsixQuest.innerHTML = `Перейти к след вопросу `;
      
      
      $divsixQuest.appendChild($blockTitlesixQuest);
      $divsixQuest.appendChild($questsixQuest1);
      $divsixQuest.appendChild($questsixQuest2);
      $divsixQuest.appendChild($questsixQuest3);
      $divsixQuest.appendChild($blockDelsixQuest);
      $blocksixQuest.appendChild($divsixQuest);
      $questsixQuest2.addEventListener('click',() =>{
        count += 1;
      }
      );
      document.querySelector('#quest-card').append($blocksixQuest);



      $blockDelsixQuest.addEventListener('click',() =>{
        $divsixQuest.remove();

        let $blocksevQuest = new DocumentFragment();
    
      const $divsevQuest = document.createElement('div');
      const $blockTitlesevQuest = document.createElement('p');
      const $questsevQuest1 = document.createElement('span');
      const $questsevQuest2 = document.createElement('span');
      const $questsevQuest3 = document.createElement('span');
      const $blockDelsevQuest = document.createElement('button');
      
      $divsevQuest.classList.add('quest-card');
      $blockTitlesevQuest.classList.add('que');
      $questsevQuest1.classList.add('issue');
      $questsevQuest2.classList.add('issue');
      $questsevQuest3.classList.add('issue');
      $blockDelsevQuest.classList.add('btn-text');
      
      
      $blockTitlesevQuest.innerHTML = `7 - Вопрос: В какой куртке я был на первой встрече? `;
      $questsevQuest1.innerHTML = `1. Белой`;
      $questsevQuest2.innerHTML = `2. Черной`;
      $questsevQuest3.innerHTML = `3. Черно-белой`;
      $blockDelsevQuest.innerHTML = `Перейти к след вопросу `;
      
      
      $divsevQuest.appendChild($blockTitlesevQuest);
      $divsevQuest.appendChild($questsevQuest1);
      $divsevQuest.appendChild($questsevQuest2);
      $divsevQuest.appendChild($questsevQuest3);
      $divsevQuest.appendChild($blockDelsevQuest);
      $blocksevQuest.appendChild($divsevQuest);
      $questsevQuest1.addEventListener('click',() =>{
        count += 1;
      }
      );
      document.querySelector('#quest-card').append($blocksevQuest);


      $blockDelsevQuest.addEventListener('click',() =>{
        $divsevQuest.remove();


        let $blockEihQuest = new DocumentFragment();
    
        const $divEihQuest = document.createElement('div');
        const $blockTitleEihQuest = document.createElement('p');
        const $questEihQuest1 = document.createElement('span');
        const $questEihQuest2 = document.createElement('span');
        const $questEihQuest3 = document.createElement('span');
        const $blockDelEihQuest = document.createElement('button');

        $divEihQuest.classList.add('quest-card');
        $blockTitleEihQuest.classList.add('que');
        $questEihQuest1.classList.add('issue');
        $questEihQuest2.classList.add('issue');
        $questEihQuest3.classList.add('issue');
        $blockDelEihQuest.classList.add('btn-text');


        $blockTitleEihQuest.innerHTML = `8 - Вопрос: Что я тебе дарил впервый раз? `;
        $questEihQuest1.innerHTML = `1. Цветы`;
        $questEihQuest2.innerHTML = `2. Шоколадку`;
        $questEihQuest3.innerHTML = `3. Себя`;
        $blockDelEihQuest.innerHTML = `Перейти к след вопросу `;


        $divEihQuest.appendChild($blockTitleEihQuest);
        $divEihQuest.appendChild($questEihQuest1);
        $divEihQuest.appendChild($questEihQuest2);
        $divEihQuest.appendChild($questEihQuest3);
        $divEihQuest.appendChild($blockDelEihQuest);
        $blockEihQuest.appendChild($divEihQuest);
        $questEihQuest2.addEventListener('click',() =>{
          count += 1;
        }
        );
        document.querySelector('#quest-card').append($blockEihQuest);



        $blockDelEihQuest.addEventListener('click',() =>{
          $divEihQuest.remove();


        let $blocknineQuest = new DocumentFragment();
    
        const $divnineQuest = document.createElement('div');
        const $blockTitlenineQuest = document.createElement('p');
        const $questnineQuest1 = document.createElement('span');
        const $questnineQuest2 = document.createElement('span');
        const $questnineQuest3 = document.createElement('span');
        const $blockDelnineQuest = document.createElement('button');

        $divnineQuest.classList.add('quest-card');
        $blockTitlenineQuest.classList.add('que');
        $questnineQuest1.classList.add('issue');
        $questnineQuest2.classList.add('issue');
        $questnineQuest3.classList.add('issue');
        $blockDelnineQuest.classList.add('btn-text');


        $blockTitlenineQuest.innerHTML = `9 - Вопрос: Что я сказал первое при первой встречи? `;
        $questnineQuest1.innerHTML = `1. Привет`;
        $questnineQuest2.innerHTML = `2. Обнимемся?`;
        $questnineQuest3.innerHTML = `3. Куда пойдем?`;
        $blockDelnineQuest.innerHTML = `Перейти к след вопросу `;


        $divnineQuest.appendChild($blockTitlenineQuest);
        $divnineQuest.appendChild($questnineQuest1);
        $divnineQuest.appendChild($questnineQuest2);
        $divnineQuest.appendChild($questnineQuest3);
        $divnineQuest.appendChild($blockDelnineQuest);
        $blocknineQuest.appendChild($divnineQuest);
        $questnineQuest2.addEventListener('click',() =>{
          count += 1;
        }
        );
        document.querySelector('#quest-card').append($blocknineQuest);

        $blockDelnineQuest.addEventListener('click',() =>{
          $divnineQuest.remove();

          let $blocktenthQuest = new DocumentFragment();
    
        const $divtenthQuest = document.createElement('div');
        const $blockTitletenthQuest = document.createElement('p');
        const $questtenthQuest1 = document.createElement('span');
        const $questtenthQuest2 = document.createElement('span');
        const $questtenthQuest3 = document.createElement('span');
        const $blockDeltenthQuest = document.createElement('button');

        $divtenthQuest.classList.add('quest-card');
        $blockTitletenthQuest.classList.add('que');
        $questtenthQuest1.classList.add('issue');
        $questtenthQuest2.classList.add('issue');
        $questtenthQuest3.classList.add('issue');
        $blockDeltenthQuest.classList.add('btn-text');


        $blockTitletenthQuest.innerHTML = `10 - Вопрос: Что ты мне дарила впервый раз? `;
        $questtenthQuest1.innerHTML = `1. Кружку`;
        $questtenthQuest2.innerHTML = `2. Открытку`;
        $questtenthQuest3.innerHTML = `3. Пазлы`;
        $blockDeltenthQuest.innerHTML = `Перейти к след вопросу `;


        $divtenthQuest.appendChild($blockTitletenthQuest);
        $divtenthQuest.appendChild($questtenthQuest1);
        $divtenthQuest.appendChild($questtenthQuest2);
        $divtenthQuest.appendChild($questtenthQuest3);
        $divtenthQuest.appendChild($blockDeltenthQuest);
        $blocktenthQuest.appendChild($divtenthQuest);
        $questtenthQuest1.addEventListener('click',() =>{
          count += 1;
        }
        );
        document.querySelector('#quest-card').append($blocktenthQuest);



        $blockDeltenthQuest.addEventListener('click',() =>{
          $divtenthQuest.remove();


        let $Quest = new DocumentFragment();
    
        const $qQuest = document.createElement('div');
        const $Quest1 = document.createElement('span');

        $qQuest.classList.add('result');
        $Quest1.classList.add('result-text');

        
        $Quest1.innerHTML = `Я тебе должен ${count} куни`;


        $qQuest.appendChild($Quest1);
        $Quest.appendChild($qQuest);
        document.querySelector('#quest-card').append($Quest);

          

          
        }
        );


        }
        );


        }
        );
      }
      );

      }
      );

    }
    );


    
    }
    );
    
    }
    );
    

    }
    );
    
  }
  );
  }
 
 














  







