import { useEffect, useState } from 'react';
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const router = useRouter();
  const [filter, setFilters] = useState(filterData);

  // Update the URL endpoint to execute the server side fetch
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      // 'item.value' - Ensures we only update the endpoints with items we clicked on
      // 'filterValues?.[item.name]' - Ensures it keeps adding on to the link vs. replacing existing values
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filter.map((filter) => {
        return (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter.items.map((item) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </Box>
        );
      })}
    </Flex>
  );
};

export default SearchFilters;
