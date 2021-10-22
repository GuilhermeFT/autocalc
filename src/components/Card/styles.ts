import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  width: 10rem;
  height: 10.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-self: center;

  padding: 1rem;
  margin: 1rem;

  h4 {
    color: ${props => props.theme.colors.grayMedium};
    font-size: 1.15rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 40%;
  }

  @media (max-height: 800px) {
    width: 9rem;
    height: 9.5rem;

    h4 {
      font-size: 1rem;
    }
  }
`
