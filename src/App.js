import React from 'react';
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding: 2rem;
background:black
`

const App = () => {
  return (
    <AppWrapper>
       <Flex justify="center" >
           <Title color='green'>Title</Title>
       </Flex>
       <Flex direction="column" justify="end">
           <Console/>
           <Button align="flex-end" outlined>Send</Button>
       </Flex>
    </AppWrapper>
  );
}

export default App;
