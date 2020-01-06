import React from 'react'
// import PropTypes from 'prop-types'
import posranci from '../poslanci.json'

const PeopleList = () => (
  <div>
    {posranci.map(({
      addressCity,
      addressRegion,
      name,
      photoUrl,
      partyDepartmentKey,
    }) => {

      if (partyDepartmentKey === 'PolitickeStrany.LSNS')
        return (
          <div><a href={photoUrl}>{name} ({addressRegion}, {addressCity})</a></div>
        )
    })}
    {console.log(posranci)}
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
