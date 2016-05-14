/* @flow */
'use strict';

import Relay from 'react-relay';
import React from 'react-native';
const { ScrollView, StyleSheet, View, Text, Dimensions } = React;

import colors from '../../../../data/colors';
import SerifText from '../../text/serif';
import ImageView from '../../opaque_image_view';

class RelatedArtist extends React.Component {
  render() {
    const artist = this.props.artist;
    return (
      <View style={{paddingBottom: 30, width: this.props.relay.variables.width}}>
        <ImageView style={{ width: this.props.relay.variables.width, height: this.props.relay.variables.height }}
                   imageURL={artist.image.cropped.url} />
        <Text style={styles.sansSerifText}>{artist.name.toUpperCase()}</Text>
        <Text style={styles.serifText}>{this.artworksString(artist.counts)}</Text>
      </View>
    )
  }

  artworksString(counts) {
    const forSale = counts.for_sale_artworks ? counts.for_sale_artworks + ' for sale' : null
    const totalWorks = counts.artworks ? counts.artworks + ' works' : null

    if (forSale && totalWorks) {
      return totalWorks + ', ' + forSale
    }
    return forSale ? forSale : totalWorks
  }
}

const styles = StyleSheet.create({
  sansSerifText: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 10,
    fontFamily: "Avant Garde Gothic ITCW01Dm",
  },
  serifText: {
    fontFamily: 'AGaramondPro-Regular',
    fontSize: 16,
    marginTop: 5,
    color: colors['gray-semibold']
  }
});

export default Relay.createContainer(RelatedArtist, {
  initialVariables: { width: 150, height: 100 },

  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        name
        counts {
          for_sale_artworks
          artworks
        }
        image {
          cropped(width: $width, height: $height) {
            url
          }
        }
      }
    `,
  }
})