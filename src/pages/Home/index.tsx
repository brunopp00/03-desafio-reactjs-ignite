import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { CardProfile } from './components/CardProfile'
import { HomeContianer } from './styles'

export function Home() {
  const { repos } = useContext(AppContext)

  return (
    <HomeContianer>
      <CardProfile />
    </HomeContianer>
  )
}
