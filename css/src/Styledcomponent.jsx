import './App.css'
import styled,{css} from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  background:transparent;
  border-radius: 2px;
  padding: 20px;
  ${(props) =>
    props.primary && 
    css`
      background: red;
      color: #balck;
    `   
  }
`;
const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;


function Styledcomponent({onclick, children}) {
  return (
    <>
      <Container className='Component'>
        <Button>ggg</Button>
        <Button primary>ggg</Button>
      </Container>
      <StyledButton onclick={onclick}>{children}</StyledButton>
    </>
  );
}


export default Styledcomponent;
