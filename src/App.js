import './App.css';
import Post from './post';
import Header from './header';
import Layout from './layout';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexpage';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import CreatePost from './pages/createpost';
import PostPage from './pages/postpage';
import EditPost from './pages/editpost';
import { UserContextProvider } from './context/usercontext';


function App() {
  return (
  
    <UserContextProvider>

      <Routes>
        {/* header or login/register or navigation pane - Layout */}
        <Route path="/" element={<Layout />}>

          <Route index element = {<IndexPage />} />

          <Route path={'/login'} element={<LoginPage />} />

          <Route path={'/register'} element={<RegisterPage />} />

          <Route path="/create" element={<CreatePost />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/edit/:id" element={<EditPost />} />

        </Route>

      </Routes>

    </UserContextProvider> 

  );
}

export default App;
