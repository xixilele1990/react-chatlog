import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries, onHandleLike }) => {
  const messageList = entries.map((message) => {
    return (
      <li key={message.id}>
      <ChatEntry
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onHandleLike = {() => onHandleLike(message.id)}
      />
      </li>
    );
  });

  return (
    <ul className="chat-log">
      {messageList}
    </ul>
  );
};
    

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })).isRequired,
    onHandleLike: PropTypes.func,
};

export default ChatLog;




