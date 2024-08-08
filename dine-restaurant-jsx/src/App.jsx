import { useState } from 'react'
import './App.css'

function App() {

return(

  <div>
     <div className="container">
    
    <div className="header">
      <div className="header-content">
        <img src="/img/logo-dine.svg" alt=""/>
        <h1>Exquisite dining <br/>since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of
          our farmhouse.</p>
        <a className="header-btn" href="#">BOOK A TABLE</a>
      </div>
    </div>
    
    
    <div className="hero">
      <div className="information-item item-left">
        <img src="/img/mplace.png" alt="" className="informationImg place-mobil"/>
        <img src="/img/place-tablet.png" alt="" className="informationImg place-tablet"/>
        <img src="/img/place-desktop.png" alt="" className="informationImg place-desktop"/>
        <div className="information-content">
          <img src="/img/ovalandborder.svg" alt=""/>
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of
            the
            farm before your meal.</p>

        </div>
      </div>
    </div>

    
    <div className="information-item item-right">
      <img src="/img/mobile-sourced-food.png" alt="" className="chef-photo mobile-chef-photo"/>
      <img src="/img/tablet-sourced-food.png" alt="" className="chef-photo tablet-chef-photo"/>
      <img src="/img/sourced-food.png" alt="" className="chef-photo desktop-chef-photo"/>
      <img src="/img/burger-icon.svg" alt="" className="burger-icon"/>
      <div className="information-content">
        <img src="/img/ovalandborder.svg" alt=""/>
        <h2>The most locally sourced food</h2>
        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the
          freshest, most sustainable food.</p>
      </div>
    </div>

    
    
    <div className="menu-container">
      <img src="/img/ovalandborder.svg" alt="" className="oval-border"/>
      <div className="menu-header">
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is
          revamped every season.</p>
      </div>
      <div className="menu-foods">
        <div className="food-item">
          <img src="/img/salmon.jpg" alt="" className="without-border"/>
          <img src="/img/salmon-w-border.png" alt="" className="with-border"/>

          <div className="item">
            <h4>Seared Salmon Fillet</h4>
            <p>Our locally sourced salmon served
              with a refreshing buckwheat summer salad.</p>
          </div>
        </div>
        <hr/>
        <div className="food-item">
          <img src="/img/rosemary.jpg" alt="" className="without-border"/>
          <img src="/img/rosemary-w-border.png" alt="" className="with-border"/>

          <div className="item">
            <h4>Seared Salmon Fillet</h4>
            <p>Our locally sourced salmon served
              with a refreshing buckwheat summer salad.</p>
          </div>
        </div>
        <hr/>
        <div className="food-item">
          <img src="/img/mousse.jpg" alt="" className="without-border"/>
          <img src="/img/mousse-w-border.png" alt="" className="with-border"/>
          <div className="item">
            <h4>Seared Salmon Fillet</h4>
            <p>Our locally sourced salmon served
              with a refreshing buckwheat summer salad.</p>
          </div>
        </div>
      </div>
    </div>

    
    
    <div className="reservation-container">
      <h3>Ready to make a reservation?</h3>
      <a href="#" className="footer-btn">BOOK A TABLE</a>
    </div>
    
    
    <div className="footer">
      <img src="/img/logo-dine.svg" alt="logo"/>
      <div className="footer-content">
        <p className="address">Marthwaite, Sedbergh <br/>
          Cumbria <br/>
          +00 44 123 4567</p>
        <p>OPEN TIMES <br/>
          MON - FRI: 09:00 AM - 10:00 PM <br/>
          SAT - SUN: 09:00 AM - 11:30 PM
        </p>
      </div>

      





    </div>







































  </div>
  </div>
)
}
export default App