import { Box, Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SignIn = () => {
  return (
    <Box
      alignItems="center"
      backgroundColor="bg.main"
      display="flex"
      height="100vh"
      justifyContent="center"
      width="100vw"
    >
      <Box
        alignItems="center"
        backgroundColor="primary.main"
        display="flex"
        flexDirection="column"
        padding="3rem"
        borderRadius="10px"
        sx={{ boxShadow: 5 }}
      >
        <Box
          backgroundColor="secondary.main"
          borderRadius="10px"
          mb="3rem"
          padding="0.75rem"
        >
          <ChatBubbleOutlineIcon color="light" sx={{ fontSize: 100 }} />
        </Box>
        <Button variant="contained" color="secondary" fullWidth>
          Sign in with Google
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;