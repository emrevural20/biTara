import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

class MobilAyrinti extends Component {
    render() {
        return (
            <ScrollView>
            <View >
            <Text style={styles.headerTextStyle}> Tarife Adı {} </Text>
            </View>
            <View style={styles.bodyStyle}>
                <Text style={styles.bodyFontStyle}>İnternet Sağlayıcısı: {}</Text>
                <Text style={styles.bodyFontStyle}>Hız: {} Mbps</Text>
                <Text style={styles.bodyFontStyle}>Limit: {}</Text>
                <Text style={styles.bodyFontStyle}>Kota: {}</Text>
                <Text style={styles.bodyFontStyle}>Kampanya Türü: {}</Text>
                <Text style={styles.bodyFontStyle}>Taahhüt: {}</Text>
                <Text style={styles.bodyFontStyle}>Tv: {}</Text>
                <Text style={styles.bodyFontStyle}>Telefon: {}</Text>               
                
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 15, color: '#333333' }}>Aylık ... {} TL</Text>
                </View>
            </View>
            <View style={styles.containerStyle}>
                <View style={styles.containerHeaderStyle}>
                    <Text style={styles.containerHeaderTextStyle} >Kullanım Şartları</Text>
                </View>
                <View style={styles.subContainerStyle}>
                    <Text style={styles.subTextStyle} >Kullanım Şartları</Text>
                </View>

            </View>
            </ScrollView>
        );
    };
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: '#8C7BFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        margin: 10,
      },

      subContainerStyle: {
          borderBottomWidth: 0,
          padding: 4,
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          //flexDirection: 'row',
          borderColor: '#fff',
          position: 'relative',
      },

      containerHeaderStyle: {
          backgroundColor: '#8C7BFF',
      },

    headerTextStyle: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        color: '#14153A',
    },

    containerHeaderTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        margin: 3,
        color: '#FFFFFF',
    },

    subTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        margin: 2,
        color: '#333333',
    },

    bodyStyle: {
        margin: 30,
    },

    bodyFontStyle: {
        fontSize: 15,
        color: '#333333',
    },
};

export default MobilAyrinti;
