import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  const error = useRouteError()
  /* console.log(error) */
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h3>Ohh! </h3>
          <p>I can't find the page you're looking for</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--text-white);
    text-transform: capitalize;
    background-color: var(--first-color);
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
  }
  div {
    margin-top: -3rem;
    border: 2px var(--first-color) solid;
    padding: 4rem 6rem;
    position: relative;
    box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.75);
  }
  div::before {
    content: '';
    position: absolute;
    border: 2px solid black;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: -1.5rem;
    left: -1.5rem;
  }
`

export default Error
