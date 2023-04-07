import { ChatEngine } from 'react-chat-engine';
import LoginForm from  './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "71d346cf-f7c5-4462-8f9f-b10652719033"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
    
}

export default App;