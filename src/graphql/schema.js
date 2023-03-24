import { gql } from "@apollo/client";

export const GET_AUDIOPHILES_BY_CATEGORY = gql`
  query getAudiophiles($name: String!) {
    audiophiles(filters: { category: { name: { eq: $name } } }) {
      data {
        id
        attributes {
          name
          slug
          new
          category {
            data {
              id
              attributes {
                name
              }
            }
          }

          description
          image {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_FEATURED = gql`
  query getfeatured {
    audiophiles(filters: { featured: { eq: true } }) {
      data {
        id
        attributes {
          name
          slug
          description
          image {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_AUDIOPHILE = gql`
  query getAudiophile($slug: String!) {
    audiophiles(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          slug
          price
          new
          features
          description
          includes
          image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }

          others {
            data {
              id
              attributes {
                name
                slug
                image {
                  data {
                    id
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
          gallery {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
          categoryImage {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;