import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

// interface AppContextProps {

// }

interface AppContextProviderProps {
  children: ReactNode
}

interface ProfileProps {
  avatar_url: string
  bio: string
  company: string
  html_url: string
  following: number
  followers: number
  login: string
}

export const AppContext = createContext({})

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [profile, setProfile] = useState<ProfileProps[]>([])

  const fetchRepositories = useCallback(async () => {
    const response = await api.get('', {})
    setProfile(response.data)
    console.log(response.data)
  }, [])

  useEffect(() => {
    fetchRepositories()
  }, [fetchRepositories])

  return (
    <AppContext.Provider value={{ profile }}>{children}</AppContext.Provider>
  )
}
