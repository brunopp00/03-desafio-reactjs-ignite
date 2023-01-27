import { Buildings, GithubLogo, User } from 'phosphor-react'
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GithubLogo style={{ marginRight: '5px' }} size={32} />
            <p>{profile.login}</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Buildings style={{ marginRight: '5px' }} size={22} />
            <p>{profile.company}</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <User size={22} style={{ marginRight: '5px' }} />
            <p>{profile.followers} seguidores</p>
          </div>
        </div>
      </TextProfile>
    </CardProfileContainer>
  )
}
