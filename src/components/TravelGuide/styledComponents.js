import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #eef4f7;
  padding: 12px;
  overflow-y: scroll;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
  text-align: center;
  margin-bottom: 6px;
  margin-top: 0px;
`

export const Line = styled.hr`
  border: 1px solid #52bbf0;
  width: 100px;
  margin-top: 0px;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
