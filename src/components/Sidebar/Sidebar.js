import TopPanel from "./TopPanel/TopPanel";
import ChatsList from "./ChatsList/ChatsList.js";
import { StyledContainer } from "./Sidebar.styled";
import Checkout from "../stripe/Checkout.jsx";

const Sidebar = () => {
  return (
    <StyledContainer>
      <TopPanel />
      <Checkout />
      <ChatsList />
    </StyledContainer>
  );
};

export default Sidebar;
