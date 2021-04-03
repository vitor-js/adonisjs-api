import styled from 'styled-components'
import bagroundImage from '../../../assets/index/AdobeStock_366543737.jpg'

export const IndexContainer = styled.div`
  .bg-index {
    background-image: url(${bagroundImage});
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-position: center;
  }

  label {
    color: #717a829e;
  }

  .containerForm {
    h1 {
      font-size: 30px;
      font-weight: 800;
    }
    h2 {
      font-size: 17px;
      color: #717a829e;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      color: #717a829e !important ;
    }
    span {
      color: #de5f3e;
      cursor: pointer;
      opacity: 0.7;
      font-weight: 700;
    }
  }
`
