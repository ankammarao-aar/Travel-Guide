import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelItemDetails from '../TravelItemDetails'

import {
  MainContainer,
  Heading,
  Line,
  LoaderContainer,
  ListContainer,
} from './styledComponents'

class TravelGuide extends Component {
  state = {travelPackageList: [], isLoading: true}

  componentDidMount = () => {
    this.getTravelPackage()
  }

  getTravelPackage = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({travelPackageList: updatedData, isLoading: false})
  }

  render() {
    const {travelPackageList, isLoading} = this.state

    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>
        <Line />

        <ListContainer>
          {isLoading ? (
            <LoaderContainer data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </LoaderContainer>
          ) : (
            travelPackageList.map(each => (
              <TravelItemDetails key={each.id} travelDetails={each} />
            ))
          )}
        </ListContainer>
      </MainContainer>
    )
  }
}

export default TravelGuide
