import React from 'react'
import Styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import data from '../../data.json'

const MenuWrapper=Styled.div`
    display:flex;
    margin-top:-40px;
    margin-left:400px;
    .delivary{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .marginChange{
        margin-left:20px;
    }
`

function MenuPage()
{
    return(
        <MenuWrapper>
            <div className="delivary">
                <div>Delivary,ASAP(20-30m)</div>
                <div>Free delivary</div>
            </div>
            <div className="marginChange">
                Change
            </div>
            <Divider/>
        </MenuWrapper>
    )
}

export default MenuPage