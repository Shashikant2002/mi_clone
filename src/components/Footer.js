import React from 'react';
import "../styles/footer.css";
import { BsArrowRepeat, BsMap } from 'react-icons/bs';
import { GiCheckedShield } from 'react-icons/gi';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = ({ footer }) => {
  return (
    <>
      <div className="footer section_equal">
        <div className="preFooter">
          <div className="container flex justifyContentCenter">
            <div className="card flex alignItemsCenter">
              <BsArrowRepeat />
              <div className="content">
                <h4>Hassle-freee Replacement</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="card flex alignItemsCenter">
              <GiCheckedShield />
              <div className="content">
                <h4>Hassle-freee Replacement</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="card flex alignItemsCenter">
              <BsMap />
              <div className="content">
                <h4>Hassle-freee Replacement</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="preFoote_2">
          <div className="container flex alignItemsCenter justifyContentspaceBetween">
            <div className="card">
              <h4>LET'S STAY IN TOUCH</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="card">
              <form className='flex flex_wrap_wrap' action="/">
                <input type="text" placeholder='Enter Email Address' />
                <button type='submit'><AiOutlineDoubleRight /></button>
              </form>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="card">
              <h4>FOLLOW MI</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="card socal flex alignItemsCenter">
              <a href="/"><FaFacebookSquare /></a>
              <a href="/"><FaFacebookSquare /></a>
              <a href="/"><FaFacebookSquare /></a>
              <a href="/"><FaFacebookSquare /></a>
            </div>
          </div>
        </div>

        <div className="mainFooter">
          <div className="container justifyContentspaceBetween flex_wrap_wrap flex">
            <div className="card">
              <h4>SUPPORT</h4>
              <ul>

                {footer.support.map((ele, i) => {
                  return (
                    <li key={ele.url}><a href={ele.url}>{ele.name}</a></li>
                  );
                })}
              </ul>
            </div>
            <div className="card">
              <h4>SHOP AND LEARN</h4>
              <ul>
                {footer.shopAndLearn.map((ele, i) => {
                  return (
                    <li key={ele.url}><a href={ele.url}>{ele.name}</a></li>
                  );
                })}
              </ul>
            </div>
            <div className="card">
              <h4>RETAIL STORE</h4>
              <ul>
                {footer.retailStore.map((ele, i) => {
                  return (
                    <li key={ele.url}><a href={ele.url}>{ele.name}</a></li>
                  );
                })}
              </ul>
            </div>
            <div className="card">
              <h4>ABOUT</h4>
              <ul>
                {footer.aboutUS.map((ele, i) => {
                  return (
                    <li key={ele.url}><a href={ele.url}>{ele.name}</a></li>
                  );
                })}
              </ul>
            </div>
            <div className="card">
              <h4>CONTACT US</h4>
              <ul>
                {footer.contactUs.map((ele, i) => {
                  return (
                    <li key={ele.url}><a href={ele.url}>{ele.name}</a></li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="card flex flexDirCol">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              <button className='fillBtn'><h5>Concact Us</h5></button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer