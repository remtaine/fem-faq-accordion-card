import React from 'react'
import PropTypes from 'prop-types'

function AccordionItem(props) {
  return (
    <section className="">
      <button class="accordion">{props.title}</button>
      <div class="panel">
        <p>{props.children}</p>
      </div>
    </section>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
}

export default AccordionItem