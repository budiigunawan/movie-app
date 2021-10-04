import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant='ghost'
      aria-label='Swith color mode'
      icon={<MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};
