export function like(product, likeee) {
  let like = document.querySelector('.favorites_label');
  let cards = document.querySelectorAll('.card');
  let favorites = document.querySelector('.favorites');
  let home = document.querySelector('.home');
  let box1 = document.querySelector('.box');
  let box3 = document.querySelector('.favorites_box')
  let count3 = document.querySelectorAll('.count');
  let box = document.querySelector('.like');
  favorites.addEventListener('click', (e) => {
    box1.style.display = 'none';
    box3.style.display = 'none';
    box.style.listStyle = 'none';
    box.style.display = 'block';
    let search_box = document.querySelector('.search_box')
      search_box.style.display = 'none'
    

  })
  for (const i of cards) {
    i.addEventListener('click', (e) => {
      for (const j of product) {
        if (e.target.id == j.id && e.target.className == 'like1') {
          j.like = true;
        }
        else if (e.target.id == j.id && e.target.className == 'like2') {
          j.like = false;
        }
      }
      for (const j of product) {
        if (j.like) {

          favorites.addEventListener('click', (() => {

            box.innerHTML = "Bo'm-bo'sh"
            let favorites_product2 = [];
            for (let i of product) {
              i.doc_count = 0;
              if (i.like) {
                i.doc_count = j.textContent;
                favorites_product2.push(i);
                render();
              }
            }

            function render() {
              box.textContent = '';
              for (let i of favorites_product2) {
                if (!(i.doc_count)) {
                  i.doc_count = 0;
                }
                box.innerHTML += `
              <li id="${i.id}" class="card card3 favorite_box" style="width: 1100px;margin: 0 auto;margin-bottom:120px;flex-direction: column; margin-top:70px;">
                <div class="card card-top2">
                 ${i.img}
                </div>
                <div class="img_box">
                </div>
                <div>
                  <div>
                    <h2>${i.title}</h2>
                    <p style="margin-top: 10px;margin-bottom: 10px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae officia architecto ipsam voluptatem
                    veritatis, repellendus velit deserunt cum, unde iusto sequi, perferendis alias laborum error id autem. Animi eum
                    quos tenetur amet expedita repellendus unde a velit ullam accusamus? Eaque quam vero expedita quibusdam quo
                    asperiores nisi, iure fugiat sed, magni reiciendis eos quas quis adipisci fugit odio rerum aliquid? Necessitatibus
                    perferendis quasi hic quibusdam ad dolorum in quos quidem incidunt, vitae recusandae ex, iusto culpa impedit
                    explicabo commodi a quam quisquam voluptatum. Nihil, quibusdam eaque? Repellat, exercitationem, eos officia
                    consectetur explicabo, nihil recusandae autem quae perspiciatis eveniet a?</p>
                    <p>${i.money}$</p>
                    <div class="box_kg"><p id="${i.id}" class="text-muted2">${i.count}</p><p>kg</p></div>
                    <p>All money: <span id="${i.id}" class="all_money2">${i.all_money}</span>$</p>
                    <div class="btn_box" style="display:flex; align-items:center;justify-content:start;">
                    <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-right:4px;" class="btn-minus" type="button">-</button>
                    <p id="${i.id}" class="count2">${i.doc_count}</p>
                    <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-left:4px; " class="btn-plus" type="button">+</button>
                    </div>
                  </div>
              </li>
            `
              }
            }
            render()
            let count = document.querySelectorAll('.count2');
            let card3 = document.querySelectorAll('.card3')
            let text_count = document.querySelectorAll('.text-muted2')
            let all_money = document.querySelectorAll('.all_money2')
            for (let k of card3) {
              k.addEventListener('click', (e) => {
                if (e.target.className == 'btn-plus') {
                  for (let i of count) {
                    if (i.id == e.target.id) {
                      for (let j of product) {
                        if (j.id == e.target.id) {
                          if (j.count > 0) {
                            for (let l of text_count) {
                              if (l.id == e.target.id) {
                                for (let f of all_money) {
                                  if (e.target.id == f.id) {
                                    j.all_money = j.money
                                    i.textContent = i.textContent * 1 + 1;
                                    j.count -= 1;
                                    l.textContent = j.count;
                                    j.all_money = i.textContent * j.money;
                                    f.textContent = j.all_money;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                else if (e.target.className == 'btn-minus') {
                  for (let i of count) {
                    if (i.id == e.target.id) {
                      if (i.textContent > 0) {
                        for (let j of product) {
                          if (j.id == e.target.id) {
                            for (let l of text_count) {
                              if (l.id == e.target.id) {
                                for (let f of all_money) {
                                  if (e.target.id == f.id) {
                                    j.all_money = j.money
                                    i.textContent = i.textContent * 1 - 1;
                                    j.count += 1;
                                    l.textContent = j.count;
                                    j.all_money = i.textContent * 1 * j.money
                                    f.textContent = j.all_money;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })
            }
          }));


          home.addEventListener('click', () => {
            box.style.display = 'none';
            box1.style.display = 'flex'
            box3.style.display = 'flex'
          })
        }
      }
    })
  }


}
like()