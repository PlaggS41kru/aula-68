import {BrowserRouter as Router, useRoutes} from "react-router-dom";

import {Typography, Layout, Space } from "antd";
import Home from "./pages/home";
import CreateClass from "./pages/createClass";
const {Header} = Layout;
const {Title, Link} = Typography

function AppRoutes(){
  const routes = [
    {path: "/", element: <Home />},
    {path: "/criar-turma", element: <CreateClass />}
  ]
 return useRoutes(routes)
}

function App() {
 
  return (
    <>
      <Header style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        }}
      >

        <Title level={1} style={{color: "#fff", margin: 0 }}>Turmas</Title>
        <Space>
          <Link style={{fontSize:18,}} href="/">Turmas disponíveis</Link>
        </Space>
        <Link style={{fontSize:18,}} href="/criar-turma">Turmas</Link>
      </Header>

<Router>
  <AppRoutes />
</Router>
    </>
  );
}


export default App;
