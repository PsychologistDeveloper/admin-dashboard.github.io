import React from 'react';
import Loader from 'Components/Loader';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import ChatBoardTabItem from 'Components/ChatBoardTabItem';

import './ChatBoardTabs.style.scss';

export const ChatBoardTabs = (props) => {
  const {
    activeTabId,
    setActiveTabId,
    onAddTabClick,
    chatBoards,
  } = props;

  function renderBoardTabItems() {
    if (!chatBoards) {
      // need to return placeholder
      return null;
    }

    return chatBoards.map(({ data, id }) => {
      const { name } = data;

      return (
        <ChatBoardTabItem
          key={id}
          tabName={name}
          tabId={id}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      );
    });
  }

  function renderAddBoardItemBtn() {
    return (
      <IconButton
        className="ChatBoardTabs-AddBtn"
        onClick={onAddTabClick}
      >
        <AddIcon />
      </IconButton>
    );
  }

  return (
    <div className="ChatBoardTabs">
      <Loader isLoading={!chatBoards} />
      { renderBoardTabItems() }
      { renderAddBoardItemBtn() }
    </div>
  );
};
export default ChatBoardTabs;
