import { useState } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'

function App () {
        const[chatMessages, setChatMessages] = useState([{
          message: 'hello Chatbot',
          sender: 'user', 
          id: 'id1'                                                                                             
        }, {
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'Can you get me todays date?',
          sender: 'user',
          id: 'id3'  
        }, {
          message: 'Today is September 26',
          sender: 'robot',
          id: 'id4'
        }]);
        // const [chatMessages,setChatMessages ] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container"> 
            <ChatMessages 
            chatMessages={chatMessages}
            /> 
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }
      

export default App
