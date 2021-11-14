import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const AutoRender = () => {


  const [ locationKeys, setLocationKeys ] = useState([])
  const history = useHistory()

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)

          // Handle forward event

        } else {
          setLocationKeys((keys) => [ location.key, ...keys ])

          // Handle back event

        }
      }
    })
  }, [ locationKeys, ])
}

export default AutoRender;
