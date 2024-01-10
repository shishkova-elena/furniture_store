import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ProductFullShow from "./components/ProductFullShow";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'https://sun9-22.userapi.com/impg/MR3TvmtKBj07w5myUnldb3E60RwgcCK87rMiXw/4UMRKjJIe2M.jpg?size=1080x1080&quality=95&sign=7015b61d3811ae605a66a9c78ac68e4f&type=album',
          desc: 'Стул из массива бука с мягким сиденьем и спинкой, обитыми тканью. Высокая спинка декорирована пуговицами и гвоздиками под состаренную бронзу.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'https://sun9-59.userapi.com/impg/VJPckLv6fgTTqwAsTXK_LaXwU307T74Y4pNt4g/GNZM18hfsu4.jpg?size=1846x1354&quality=95&sign=8fd710bd4b2783964ac90f4dbfa27241&type=album',
          desc: 'Круглый раздвижной обеденный стол, отделанный в стиле винтаж, украсит столовую, обставленную в традиционном стиле, и придаст торжественности семейным обедам.',
          category: 'tables',
          price: '79.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'https://sun9-59.userapi.com/impg/nrSu3RMG1Rxw3WtDjdmnmyxP7Shczb_Fg6NFLg/VycbSR3UBc4.jpg?size=1529x1041&quality=95&sign=76f6a21220fd972f28b22a4a7821d49c&type=album',
          desc: 'Диван "Идальго" -  яркий, современный и стильный с высоким уровнем комфортности.  Диван презентабелен, эргономика изделия продумана до мелочей. Это современный и функциональный диван-книжка без подлокотников, представляется в различных цветовых решениях. ',
          category: 'sofa',
          price: '89.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'https://sun9-69.userapi.com/impg/looInNaqHlvj1UoqXQhdvyyVwJp5OFpERaLiPg/QOXLHPnMiS0.jpg?size=1000x1000&quality=95&sign=eb13eefe1240243d55b38f0b5c2cf23d&type=album',
          desc: 'Настольная рабочая лампа хорошо подойдет для освещения рабочей поверхности стола. Эргономичная: регулируется высота светильника и направление света.',
          category: 'light',
          price: '19.99'
        },
        {
          id: 5,
          title: 'Тумба под телевизор',
          img: 'https://sun9-15.userapi.com/impg/3a3WGRMzom75a22JkOgmxhScGd107q4gh3Qj0g/LNlfoAWYZsI.jpg?size=1200x763&quality=95&sign=e2de3e3fff34cf0fd306149adce3c050&type=album',
          desc: 'Тумба под ТВ Brick (Брик) - отлично будет смотреться в гостиной или гостиной, может быть самостоятельным объектом мебели.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Стол-трансформер',
          img: 'https://sun9-69.userapi.com/impg/Sj4Yqyd2Fv2DyWatMEFht6sCL-Ugklm5t3qG1w/-iouBprjwrM.jpg?size=1200x900&quality=95&sign=e4a691ae0c76d0e961ef0d58d5ab2b43&type=album',
          desc: 'Журнально обеденный стол трансформер Версаль выглядит элегантно и может быть использован в качестве маленького журнального столика, но при необходимости он трансформируется в обеденный на 8 персон.',
          category: 'tables',
          price: '29.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory}/>
      <Products onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem && <ProductFullShow item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/> }
      <Footer />
    </div>
  );
  }

  onShowItem (item) {
    this.setState ({ fullItem: item })
    this.setState ({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory (category) {
    if (category === 'all') {
      this.setState ({currentItems: this.state.items})
      return
    }
    this.setState({ currentItems: this.state.items.filter(el => el.category === category) })
  }

  deleteOrder (id) {
    this.setState ({ orders: this.state.orders.filter (el => el.id !== id) }) 
  }

  addToOrder (item) {

    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) 
        isInArray = true
    })

    if (!isInArray) 
      this.setState ({ orders: [...this.state.orders, item]})
    
  }

}

export default App;
