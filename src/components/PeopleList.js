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
    })} */}
    
    {kandidati.data.map(({
      name,
      officialNumber,
      addressRegion,
      addressCity,
    }) => {
      return (
        <div className="fl w-third pa2">
          <article className="center bg-white br3 pa3 pa4-ns ba b--black-10 h6">
            <div className="tc">
              <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title={name} />
              <h1 className="f3 mb2">{`${officialNumber}. ${name}`}</h1>
              {addressRegion && <h2 className="f5 fw4 gray mt0">{addressRegion} Kraj, {addressCity}</h2>}

              {/* {poslanci.map(({
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
                    <h2 className="f5 fw4 gray mt0">{addressRegion}, {addressCity}</h2>
                  )
                }
              })} */}
            </div>
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
