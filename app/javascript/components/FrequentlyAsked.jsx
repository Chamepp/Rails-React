import React from "react";
import { Link } from "react-router-dom";
import "../style/frequentlyasked.css";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";




const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Pricing plans',
    paragraph
  },
  {
    title: 'How to apply',
    paragraph
  },
  {
    title: 'Purchasing',
    paragraph
  },
  {
    title: 'Usage guides',
    paragraph
  }
]





class FrequentlyAsked extends React.Component {



  componentDidMount() {
    AOS.init({});
  }


  render () {

    return (
      <div {...{ className: 'wrapper' }} data-aos="zoom-in">
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}


export default FrequentlyAsked;