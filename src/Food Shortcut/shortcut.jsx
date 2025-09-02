
import React, { useRef } from 'react'
import style from './shortcut.module.css'

function Shortcut({ setQuery }) {
  const shortcuts = [
    { name: "Burger", img: "https://tse2.mm.bing.net/th/id/OIP.vJKCONq0GzHCWQmac-doSQAAAA?pid=ImgDet&w=184&h=189&c=7&dpr=1.3&o=7&rm=3" },
    { name: "Pasta", img: "https://as2.ftcdn.net/v2/jpg/06/23/45/49/1000_F_623454974_LmWZeI09hVhrBm6KgDO6er3A7MdfrwwR.jpg" },
    { name: "Soup", img: "https://nourishedkitchen.com/wp-content/uploads/2018/07/chicken-bone-broth-recipe-720x960.jpg" },
    { name: "Fries", img: "https://static.vecteezy.com/system/resources/thumbnails/044/844/535/small_2x/french-fries-or-fried-potatoes-in-a-white-bowl-ai-generatred-free-png.png" },
    { name: "Cake", img: "https://dinnersdishesanddesserts.com/wp-content/uploads/2023/07/Chocolate-Drip-Cake-square-960x960.jpg" },
    { name: "Chicken", img: "https://tse4.mm.bing.net/th/id/OIP.wSE9y27sbij9-p9BLSvv0QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Waffles", img: "https://tse3.mm.bing.net/th/id/OIP.yg-E8vud9LgJWpoqaH1b1AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Pizza", img: "https://img.freepik.com/free-photo/tasty-top-view-sliced-pizza-italian-traditional-round-pizza_90220-1357.jpg" },
    { name: "Mojito", img: "https://ik.imagekit.io/bhug69xts/mojito.png" },
    { name: "Sushi", img: "https://i.pinimg.com/originals/b2/74/c9/b274c9c231b88e0181050aab3026dc6c.png" },
    { name: "Ramen", img: "https://th.bing.com/th/id/OIP.2HkCcHIOkE5_T6SoNapc3QHaFp?w=237&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -120 : 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={style.shortcutWrapper}>
      <div className={style.leo} ref={scrollRef}>
        {shortcuts.map(item => (
          <div
            className={style.shorticon}
            key={item.name}
            onClick={() => setQuery(item.name)}
          >
            <img className={style.shortfood} src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
     <div className={style.scrollBtnContainer}> 
       <img className={style.scrollBtn} onClick={() => scroll('left')} src="https://tse2.mm.bing.net/th/id/OIP.HmBRx0_4sBUGvdLR5Uak1AHaH_?pid=ImgDet&w=184&h=198&c=7&dpr=1.3&o=7&rm=3" alt="Scroll left" />
     </div>
    <div className={style.scrollBtnContainer}> 
      <img className={style.scrollBtn} onClick={() => scroll('right')} src="https://tse2.mm.bing.net/th/id/OIP.yjZBB1WomIiUFwHuXqAOkQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" alt="Scroll right" />
    </div> 
    </div>
  )
}

export default Shortcut;
