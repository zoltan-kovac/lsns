import React from 'react'
import kandidati from '../assets/data/kandidati.json'

const PeopleList = () => (
  <div>
    {console.log('kandidai', kandidati)}
    {kandidati.map(({
      name,
      officialNumber,
      age,
      work,
      city,
    }) => {
      return (
        <div className="fl w-third pa2">
          <article className="center bg-white br3 pa3 pa4-ns ba b--black-10 h6">
            {/* <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title={name} /> */}
            <h1 className="f3 mb2">{`${officialNumber}. ${name}, ${age}`}</h1>
            <h2 className="f5 fw4 gray mt0">{work}</h2>
            <h2 className="f5 fw4 gray mt0">{city}</h2>
          </article>
        </div>
      )
    })}
  </div>
)

// FeatureGrid.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       text: PropTypes.string,
//     })
//   ),
// }

export default PeopleList
