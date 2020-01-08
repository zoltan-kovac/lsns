import React from 'react'
import poslanci from '../assets/data/poslanci.json'
import kandidati from '../assets/data/kandidati.json'

const PeopleList = () => (
  <div>

    <h2>Poslanci</h2>
    {/* {poslanci.map(({
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

    <h2>Kandidati</h2> */}
    
    {kandidati.data.map(({
      name,
      officialNumber,
    }) => {
      return (
        <div className="fl w-25 pa2">
          <div class="ba b--dotted db pa3 mb3">
            {`${officialNumber}. ${name}`}

            {poslanci.map(({
              lastName,
              addressCity,
              addressRegion,
              photoUrl,
              partyDepartmentKey,
            }) => {
              const normalizedLastName = lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

              console.log(name.indexOf(normalizedLastName) !== -1)
              if (name.indexOf(normalizedLastName) !== -1) {
                return (
                  // <a href={photoUrl}>()</a>
                  <p>{addressRegion}, {addressCity}</p>
                )
              }
            })}
          </div>
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
