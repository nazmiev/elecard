import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => {
  return (
    <ContentLoader viewBox="0 0 420 350" height={350} width={430} {...props}>
      <rect x="10" y="10" rx="5" ry="5" width="430" height="290" />
      <rect x="10" y="320" rx="5" ry="5" width="430" height="30" />
    </ContentLoader>
  )
}

export default Skeleton