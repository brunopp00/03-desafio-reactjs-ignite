import { useContext } from 'react'
import { AppContext } from '../../../../context/AppContext'
import { CardProfileContainer, TextProfile } from './styles'

export function CardProfile() {
  const { profile } = useContext(AppContext)
  return (
    <CardProfileContainer>
      <img src={profile.avatar_url} alt="" />
      <TextProfile>
        <div>
          <h1>{profile.name}</h1>
          <a href={profile.html_url}>GITHUB</a>
        </div>
        <p>{profile.bio}</p>
        <div>
          <p>{profile.login}</p>
          <p>{profile.company}</p>
          <p>{profile.followers}</p>
        </div>
      </TextProfile>
    </CardProfileContainer>
  )
}
