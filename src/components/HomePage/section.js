import React, {memo} from "react";
import Fade from 'react-reveal/Fade'
import {Wrapper, ItemText, ButtonWrapper, ButtonsGroup, LeftButton,
    RightButton,DownArrow
} from './styles'

const Section = props => {
    const {title, description, backgroundImage, leftButtonText, rightButtonText} = props
    return(
        <Wrapper backgroundImage={backgroundImage}>
            <Fade>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <ButtonWrapper>
                <Fade >
                    <ButtonsGroup>
                        <LeftButton>{leftButtonText}</LeftButton>
                        {rightButtonText && (
							<RightButton>{rightButtonText}</RightButton>
						)}
                    </ButtonsGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg' />
            </ButtonWrapper>
        </Wrapper>
    )
}


export default memo(Section);