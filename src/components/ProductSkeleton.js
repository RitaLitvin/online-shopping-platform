import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const ProductSkeletonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 880px) {
        width: 45%;
    }
    @media (max-width: 500px) {
        width: 50%;
    }
`
const ProductSkeleton = (props) => (
    <ProductSkeletonWrap>
        <ContentLoader className="svg-large"
            speed={2}
            width={370}
            height={470}
            viewBox="0 0 370 470"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="0" rx="5" ry="5" width="370" height="470" />
        </ContentLoader>
        <ContentLoader className="svg-small"
            speed={2}
            width={145}
            height={80}
            viewBox="0 0 145 80"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="0" rx="5" ry="5" width="70" height="80" />
            <rect x="75" y="0" rx="5" ry="5" width="70" height="80" />
        </ContentLoader>
    </ProductSkeletonWrap>
)

export default ProductSkeleton;

