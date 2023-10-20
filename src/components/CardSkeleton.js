import React from "react";
import ContentLoader from "react-content-loader"

const CardSkeleton = (props) => (
  <ContentLoader className="svg-product"
    speed={2}
    width={274}
    height={446}
    viewBox="0 0 274 446"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="274" height="350" />
    <rect x="0" y="360" rx="10" ry="10" width="274" height="20" />
    <rect x="0" y="385" rx="10" ry="10" width="274" height="20" />
    <rect x="0" y="410" rx="10" ry="10" width="274" height="20" />
  </ContentLoader>
)

export default CardSkeleton;

