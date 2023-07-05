// API GRAPHQL QUERIES

import {gql} from '@apollo/client';

export const ALL_CITIES_QUERY = gql`
  query AllCities {
    allCities {
      id
      name
    }
  }
`;
