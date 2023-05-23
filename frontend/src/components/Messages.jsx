import { Col, Nav, Button } from 'react-bootstrap';
import cn from 'classnames';
import dataResponse from '../developmentMode/dataResponse.js';

const Messages = () => {
  const getCurrentChannelName = () => {
    const { currentChannelId, channels } = dataResponse;
    const currentChannel = channels.filter((channel) => channel.id === currentChannelId)[0];
    return `# ${currentChannel.name}`;
  };
  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{getCurrentChannelName()}</b>
          </p>
          <span className="text-muted">0 сообщений</span>
        </div>
        <div className="chat-messages overflow-auto px-5">
        </div>
        <div className="mt-auto px-5 py-3">
          <form className="py-1 border rounded-2">
            <div className="input-group has-validation">
              <input
                name="body"
                aria-label="Новое сообщение"
                placeholder="Введите сообщение..."
                className="border-0 p-0 ps-2 form-control"
                value=""
              />
              <button type="submit" class="btn btn-group-vertical" disabled="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
                <span class="visually-hidden">Отправить</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Messages;
