import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'artistic-design-admin'
const AUTH_LOGIN_EVENT = 'artistic-design-auth-login'

function getStoredAdmin(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(STORAGE_KEY) === 'true'
}

type AuthContextValue = {
  isAdmin: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(getStoredAdmin)

  useEffect(() => {
    const handleChange = () => setIsAdmin(getStoredAdmin())
    window.addEventListener('storage', handleChange)
    window.addEventListener(AUTH_LOGIN_EVENT, handleChange)
    return () => {
      window.removeEventListener('storage', handleChange)
      window.removeEventListener(AUTH_LOGIN_EVENT, handleChange)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setIsAdmin(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function setAdminLoggedIn(): void {
  localStorage.setItem(STORAGE_KEY, 'true')
  window.dispatchEvent(new Event('storage'))
  window.dispatchEvent(new Event(AUTH_LOGIN_EVENT))
}
