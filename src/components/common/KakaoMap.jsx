import React from 'react'

import { Map, MapMarker } from 'react-kakao-maps-sdk'

export const KakaoMap = () => {
  return (
    <>
      <Map
        center={{ lat: 35.53603, lng: 129.2587 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker position={{ lat: 35.53603, lng: 129.2587 }}></MapMarker>
      </Map>
    </>
  )
}
