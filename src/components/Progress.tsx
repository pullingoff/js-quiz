import React from "react";
import styled from "styled-components"

const ProgressDiv = styled.div`
width: 100%;
margin-top: 20px;
`

const SpanFill = styled.span`
background: #449ce2;
display:inline-block;
height: inherit;
position: relative;
top: -11px;
`;

const Gauge = styled.div`
width: 100%;
height: 3px;
background: #f7f7f7;
margin-top: 10px;
text-align: left;
`;

export function Progress({page, maxPage}: {
    page: number
    maxPage: number
}) {
    return (
        <ProgressDiv>
            <div className="page">
                {page}/{maxPage}
            </div>
            <Gauge>
                <SpanFill
                      style={{width:`${page/maxPage * 100}%`}}>
                </SpanFill>
            </Gauge>
        </ProgressDiv>
    )
}