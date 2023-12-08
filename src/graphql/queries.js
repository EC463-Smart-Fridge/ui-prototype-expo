/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItemsByUser = /* GraphQL */ `
  query GetItemsByUser($pk: String!) {
    getItemsByUser(pk: $pk) {
      items {
        pk
        sk
        UPC
        name
        category
        calories
        img_url
        exp_date
        quantity
        id
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      pk
      sk
      username
      password
      email
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        pk
        sk
        username
        password
        email
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      pk
      sk
      UPC
      name
      category
      calories
      img_url
      exp_date
      quantity
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        pk
        sk
        UPC
        name
        category
        calories
        img_url
        exp_date
        quantity
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
