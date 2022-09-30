import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styles from '../styles/SingleProperty.module.css';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex
      className={styles.arrow}
      justifyContent="center"
      alignItems="center"
      marginRight="1"
    >
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex
      className={styles.arrow}
      justifyContent="center"
      alignItems="center"
      marginRight="1"
    >
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: 'hidden' }}
    >
      {data.map((item) => {
        return (
          <Box
            key={item.id}
            itemID={item.id}
            overflow="hidden"
            className={styles.images}
            p="1"
          >
            <Image alt="property" src={item.url} width={1000} height={500} />
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
