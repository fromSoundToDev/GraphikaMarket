import { createContext, useContext, useState, useEffect,  } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const mockUser = {
      id: '1',
      email,
      password,
      name: email.split('@')[0],
      role: email.includes('admin') ? 'admin' : email.includes('graphiste') ? 'graphiste' : 'user',
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (email, password, name, role = 'user') => {
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      role,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // return navigate('/')
  };

  const isAdmin = () => user?.role === 'admin';
  const isGraphiste = () => user?.role === 'graphiste';
  const isUser = () => user?.role === 'user';

  const value = {
    user,
    login,
    register,
    logout,
    isAdmin,
    isGraphiste,
    isUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};