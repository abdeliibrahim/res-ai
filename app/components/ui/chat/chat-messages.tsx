"use client";

import { ChatMessage, ChatMessages, useChatUI } from "@llamaindex/chat-ui";
import { ChatMessageAvatar } from "./chat-avatar";
import { ChatMessageContent } from "./chat-message-content";
import { ChatStarter } from "./chat-starter";

export default function CustomChatMessages() {
  const { messages } = useChatUI();
  return (
    <ChatMessages className="shadow-xl rounded-xl border">
      <ChatMessages.List>
        {messages.length === 0 ? (
          <div className="flex items-center justify-center p-6 h-full text-center">
            <div className="max-w-md">
              <h3 className="mb-2 text-lg font-medium">Welcome to ResAI.</h3>
              <p className="text-sm text-gray-500">
              Ask anything about ResilientDB's ongoing research, SDK documentation, 
              application development, or deployment strategies.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isLast={index === messages.length - 1}
            >
              <ChatMessageAvatar />
              <ChatMessageContent />
              <ChatMessage.Actions />
            </ChatMessage>
          ))
        )}
        <ChatMessages.Loading />
      </ChatMessages.List>
      <ChatMessages.Actions />
      <ChatStarter />
    </ChatMessages>
  );
}
