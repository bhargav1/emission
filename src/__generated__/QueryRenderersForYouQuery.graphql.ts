/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type QueryRenderersForYouQueryVariables = {
};
export type QueryRenderersForYouQueryResponse = {
    readonly forYou: ({
    }) | null;
};



/*
query QueryRenderersForYouQuery {
  forYou: home_page {
    ...ForYou_forYou
  }
}

fragment ForYou_forYou on HomePage {
  artwork_modules(max_rails: -1, max_followed_gene_rails: -1, order: [ACTIVE_BIDS, RECOMMENDED_WORKS, FOLLOWED_ARTISTS, RELATED_ARTISTS, FOLLOWED_GALLERIES, SAVED_WORKS, LIVE_AUCTIONS, CURRENT_FAIRS, FOLLOWED_GENES, GENERIC_GENES], exclude: [FOLLOWED_ARTISTS]) {
    __id
    ...ArtworkCarousel_rail
  }
  artist_modules {
    __id
    ...ArtistRail_rail
  }
  fairs_module {
    ...FairsRail_fairs_module
  }
}

fragment ArtworkCarousel_rail on HomePageArtworkModule {
  ...ArtworkCarouselHeader_rail
  __id
  key
  params {
    medium
    price_range
    __id: id
  }
  context {
    __typename
    ... on HomePageModuleContextFollowedArtist {
      artist {
        href
        __id
      }
    }
    ... on HomePageModuleContextRelatedArtist {
      artist {
        href
        __id
      }
    }
    ... on HomePageModuleContextFair {
      href
      __id
    }
    ... on HomePageModuleContextGene {
      href
    }
    ... on HomePageModuleContextSale {
      href
    }
    ... on Node {
      __id
    }
  }
  results {
    ...GenericGrid_artworks
    __id
  }
}

fragment ArtistRail_rail on HomePageArtistModule {
  __id
  key
  results {
    _id
    __id
    ...ArtistCard_artist
  }
}

fragment FairsRail_fairs_module on HomePageFairsModule {
  results {
    id
    name
    profile {
      href
      __id
    }
    mobile_image {
      id
      url
    }
    __id
  }
}

fragment ArtistCard_artist on Artist {
  id
  _id
  href
  name
  formatted_artworks_count
  formatted_nationality_and_birthday
  image {
    url(version: "large")
  }
  __id
}

fragment ArtworkCarouselHeader_rail on HomePageArtworkModule {
  title
  key
  followedArtistContext: context {
    __typename
    ... on HomePageModuleContextFollowedArtist {
      artist {
        _id
        id
        __id
      }
    }
    ... on Node {
      __id
    }
    ... on HomePageModuleContextFair {
      __id
    }
  }
  relatedArtistContext: context {
    __typename
    ... on HomePageModuleContextRelatedArtist {
      artist {
        _id
        id
        __id
      }
      based_on {
        name
        __id
      }
    }
    ... on Node {
      __id
    }
    ... on HomePageModuleContextFair {
      __id
    }
  }
  __id
}

fragment GenericGrid_artworks on Artwork {
  __id
  id
  image {
    aspect_ratio
  }
  ...Artwork_artwork
}

fragment Artwork_artwork on Artwork {
  title
  date
  sale_message
  is_in_auction
  id
  sale_artwork {
    opening_bid {
      display
    }
    current_bid {
      display
    }
    bidder_positions_count
    sale {
      is_closed
      __id
    }
    __id
  }
  image {
    url(version: "large")
    aspect_ratio
  }
  artists(shallow: true) {
    name
    __id
  }
  partner {
    name
    __id
  }
  href
  __id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "key",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artist",
  "storageKey": null,
  "args": null,
  "concreteType": "Artist",
  "plural": false,
  "selections": [
    v4,
    v5,
    v0
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = [
  v7,
  v0
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v10 = [
  v9
],
v11 = [
  v9,
  v0
],
v12 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "artist",
    "storageKey": null,
    "args": null,
    "concreteType": "Artist",
    "plural": false,
    "selections": v11
  }
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": [
    {
      "kind": "Literal",
      "name": "version",
      "value": "large",
      "type": "[String]"
    }
  ],
  "storageKey": "url(version:\"large\")"
},
v14 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "QueryRenderersForYouQuery",
  "id": null,
  "text": "query QueryRenderersForYouQuery {\n  forYou: home_page {\n    ...ForYou_forYou\n  }\n}\n\nfragment ForYou_forYou on HomePage {\n  artwork_modules(max_rails: -1, max_followed_gene_rails: -1, order: [ACTIVE_BIDS, RECOMMENDED_WORKS, FOLLOWED_ARTISTS, RELATED_ARTISTS, FOLLOWED_GALLERIES, SAVED_WORKS, LIVE_AUCTIONS, CURRENT_FAIRS, FOLLOWED_GENES, GENERIC_GENES], exclude: [FOLLOWED_ARTISTS]) {\n    __id\n    ...ArtworkCarousel_rail\n  }\n  artist_modules {\n    __id\n    ...ArtistRail_rail\n  }\n  fairs_module {\n    ...FairsRail_fairs_module\n  }\n}\n\nfragment ArtworkCarousel_rail on HomePageArtworkModule {\n  ...ArtworkCarouselHeader_rail\n  __id\n  key\n  params {\n    medium\n    price_range\n    __id: id\n  }\n  context {\n    __typename\n    ... on HomePageModuleContextFollowedArtist {\n      artist {\n        href\n        __id\n      }\n    }\n    ... on HomePageModuleContextRelatedArtist {\n      artist {\n        href\n        __id\n      }\n    }\n    ... on HomePageModuleContextFair {\n      href\n      __id\n    }\n    ... on HomePageModuleContextGene {\n      href\n    }\n    ... on HomePageModuleContextSale {\n      href\n    }\n    ... on Node {\n      __id\n    }\n  }\n  results {\n    ...GenericGrid_artworks\n    __id\n  }\n}\n\nfragment ArtistRail_rail on HomePageArtistModule {\n  __id\n  key\n  results {\n    _id\n    __id\n    ...ArtistCard_artist\n  }\n}\n\nfragment FairsRail_fairs_module on HomePageFairsModule {\n  results {\n    id\n    name\n    profile {\n      href\n      __id\n    }\n    mobile_image {\n      id\n      url\n    }\n    __id\n  }\n}\n\nfragment ArtistCard_artist on Artist {\n  id\n  _id\n  href\n  name\n  formatted_artworks_count\n  formatted_nationality_and_birthday\n  image {\n    url(version: \"large\")\n  }\n  __id\n}\n\nfragment ArtworkCarouselHeader_rail on HomePageArtworkModule {\n  title\n  key\n  followedArtistContext: context {\n    __typename\n    ... on HomePageModuleContextFollowedArtist {\n      artist {\n        _id\n        id\n        __id\n      }\n    }\n    ... on Node {\n      __id\n    }\n    ... on HomePageModuleContextFair {\n      __id\n    }\n  }\n  relatedArtistContext: context {\n    __typename\n    ... on HomePageModuleContextRelatedArtist {\n      artist {\n        _id\n        id\n        __id\n      }\n      based_on {\n        name\n        __id\n      }\n    }\n    ... on Node {\n      __id\n    }\n    ... on HomePageModuleContextFair {\n      __id\n    }\n  }\n  __id\n}\n\nfragment GenericGrid_artworks on Artwork {\n  __id\n  id\n  image {\n    aspect_ratio\n  }\n  ...Artwork_artwork\n}\n\nfragment Artwork_artwork on Artwork {\n  title\n  date\n  sale_message\n  is_in_auction\n  id\n  sale_artwork {\n    opening_bid {\n      display\n    }\n    current_bid {\n      display\n    }\n    bidder_positions_count\n    sale {\n      is_closed\n      __id\n    }\n    __id\n  }\n  image {\n    url(version: \"large\")\n    aspect_ratio\n  }\n  artists(shallow: true) {\n    name\n    __id\n  }\n  partner {\n    name\n    __id\n  }\n  href\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QueryRenderersForYouQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "forYou",
        "name": "home_page",
        "storageKey": null,
        "args": null,
        "concreteType": "HomePage",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ForYou_forYou",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueryRenderersForYouQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "forYou",
        "name": "home_page",
        "storageKey": null,
        "args": null,
        "concreteType": "HomePage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artwork_modules",
            "storageKey": "artwork_modules(exclude:[\"FOLLOWED_ARTISTS\"],max_followed_gene_rails:-1,max_rails:-1,order:[\"ACTIVE_BIDS\",\"RECOMMENDED_WORKS\",\"FOLLOWED_ARTISTS\",\"RELATED_ARTISTS\",\"FOLLOWED_GALLERIES\",\"SAVED_WORKS\",\"LIVE_AUCTIONS\",\"CURRENT_FAIRS\",\"FOLLOWED_GENES\",\"GENERIC_GENES\"])",
            "args": [
              {
                "kind": "Literal",
                "name": "exclude",
                "value": [
                  "FOLLOWED_ARTISTS"
                ],
                "type": "[HomePageArtworkModuleTypes]"
              },
              {
                "kind": "Literal",
                "name": "max_followed_gene_rails",
                "value": -1,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "max_rails",
                "value": -1,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "order",
                "value": [
                  "ACTIVE_BIDS",
                  "RECOMMENDED_WORKS",
                  "FOLLOWED_ARTISTS",
                  "RELATED_ARTISTS",
                  "FOLLOWED_GALLERIES",
                  "SAVED_WORKS",
                  "LIVE_AUCTIONS",
                  "CURRENT_FAIRS",
                  "FOLLOWED_GENES",
                  "GENERIC_GENES"
                ],
                "type": "[HomePageArtworkModuleTypes]"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "plural": true,
            "selections": [
              v0,
              v1,
              v2,
              {
                "kind": "LinkedField",
                "alias": "followedArtistContext",
                "name": "context",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v3,
                  v0,
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextFollowedArtist",
                    "selections": [
                      v6
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "relatedArtistContext",
                "name": "context",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v3,
                  v0,
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextRelatedArtist",
                    "selections": [
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "based_on",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": v8
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "params",
                "storageKey": null,
                "args": null,
                "concreteType": "HomePageModulesParams",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "medium",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price_range",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "__id",
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "context",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v3,
                  v0,
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextSale",
                    "selections": v10
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextGene",
                    "selections": v10
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextFair",
                    "selections": v10
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextRelatedArtist",
                    "selections": v12
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "HomePageModuleContextFollowedArtist",
                    "selections": v12
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "results",
                "storageKey": null,
                "args": null,
                "concreteType": "Artwork",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sale_message",
                    "args": null,
                    "storageKey": null
                  },
                  v0,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "aspect_ratio",
                        "args": null,
                        "storageKey": null
                      },
                      v13
                    ]
                  },
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "date",
                    "args": null,
                    "storageKey": null
                  },
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "is_in_auction",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sale_artwork",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SaleArtwork",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "opening_bid",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SaleArtworkOpeningBid",
                        "plural": false,
                        "selections": v14
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "current_bid",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SaleArtworkCurrentBid",
                        "plural": false,
                        "selections": v14
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "bidder_positions_count",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sale",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sale",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_closed",
                            "args": null,
                            "storageKey": null
                          },
                          v0
                        ]
                      },
                      v0
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artists",
                    "storageKey": "artists(shallow:true)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "shallow",
                        "value": true,
                        "type": "Boolean"
                      }
                    ],
                    "concreteType": "Artist",
                    "plural": true,
                    "selections": v8
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "partner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Partner",
                    "plural": false,
                    "selections": v8
                  },
                  v9
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artist_modules",
            "storageKey": null,
            "args": null,
            "concreteType": "HomePageArtistModule",
            "plural": true,
            "selections": [
              v0,
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "results",
                "storageKey": null,
                "args": null,
                "concreteType": "Artist",
                "plural": true,
                "selections": [
                  v4,
                  v0,
                  v5,
                  v9,
                  v7,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "formatted_artworks_count",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "formatted_nationality_and_birthday",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      v13
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fairs_module",
            "storageKey": null,
            "args": null,
            "concreteType": "HomePageFairsModule",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "results",
                "storageKey": null,
                "args": null,
                "concreteType": "Fair",
                "plural": true,
                "selections": [
                  v5,
                  v7,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "profile",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Profile",
                    "plural": false,
                    "selections": v11
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "mobile_image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      v5,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  v0
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '74a905fbc1c502a7df7f92853faa44f8';
export default node;