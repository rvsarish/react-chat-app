import { MultiChatSocket,MultiChatWindow ,useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2cde6ccd-8aeb-4b46-856f-a665ddad8901', props.user.username ,props.user.secret
);
  return (
   <div style={{height: '100vh'}}>
   <MultiChatSocket {...chatProps} />
   <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
   </div>
  );
};

export default ChatsPage;