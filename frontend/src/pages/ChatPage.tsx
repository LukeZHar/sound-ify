import ChatHeader from "@/components/ChatHeader";
import Topbar from "@/components/Topbar";
import UserList from "@/components/UserList";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const ChatPage = () => {
  const { user } = useUser();
  const { messages, selectedUser, fetchUsers, fetchMessages } = useChatStore();

  useEffect(() => {
    if (user) fetchUsers();
  }, [fetchUsers, user]);

  useEffect(() => {
    if (selectedUser) fetchMessages(selectedUser.clerkId);
  }, [fetchMessages, selectedUser]);

  return (
    <main className="h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
      <Topbar />
      <div className="grid lg:grid-cols-[300px_1fr] grid-cols-[80px_1fr] h-[calc(100vh-180px)]">
        <UserList />
        {/* Chat Area */}
        <div className="flex flex-col h-full">
          {selectedUser ? (
            <>
              <ChatHeader />
            </>
          ) : (
            <NoConversationSelected />
          )}
        </div>
      </div>
    </main>
  );
};

export default ChatPage;

const NoConversationSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <img
        src="/spotify.png"
        alt="Soundify"
        className="size-16 animate-bounce"
      />
      <div className="text-center">
        <h3 className="text-zinc-300 text-lg font-medium mb-1">
          No Conversation Selected
        </h3>
        <p className="text-zinc-500 text-sm">
          Choose a conversation to start chatting.
        </p>
      </div>
    </div>
  );
};
