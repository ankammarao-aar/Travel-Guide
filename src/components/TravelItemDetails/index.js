import {ListItem, Image, Name, Description} from './styledComponents'

const TravelItemDetails = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </ListItem>
  )
}

export default TravelItemDetails
