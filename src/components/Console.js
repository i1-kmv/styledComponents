import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";


const StyledConsole = styled.textarea`
  width:100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${props => props.color || props.theme.colors.primary};
  &:focus {
     outline: none;
  };
  @media ${props => props.theme.media.phone} {
    border: 1px solid red
  }
  @media ${props => props.theme.media.tablets} {
    border: 1px solid green
  }
`

const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C/users/mockConsole>'])

    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, 'C/users/mockConsole>'])
        }
    }

    return (
        <Flex margin={"10px 0"}>
            <Flex direction={"column"} margin={"0 10px"}>
                {lines.map(line => {
                    return (
                        <Line color={color}>{line}</Line>
                    )
                })}
            </Flex>
            <StyledConsole  color={color} {...props} onKeyPress={onKeyPress}/>
        </Flex>
    );
};

export default Console;