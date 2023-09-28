import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { button1 } from '../common/button';
import Login from './Login';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              source={require('./../../assets/imtiaz.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Muhammad Ahmad</Text>
            <Text style={styles.profileBio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum condimentum consectetur nisi, eu convallis orci.
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>muhammadahmed221@gmail.com</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Location:</Text>
              <Text style={styles.infoValue}>Abbottabad, Pakistan</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Birthday:</Text>
              <Text style={styles.infoValue}>January 1, 2000</Text>
            </View>
        
          <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Cnic:</Text>
              <Text style={styles.infoValue}>37302-2683415-5</Text>
            </View>
            </View>
          <Text
            style={button1}
            onPress={() => navigation.navigate('login')}
          >
            Log out
          </Text>

         {/*  <Text
            style={button1}
            onPress={() => navigation.navigate('Support')}
          >
            Contact us
          </Text> */}

          <View style={styles.editIconContainer}>
            <Icon
              name="edit"
              size={24}
              color="#2196F3"
              onPress={() => navigation.navigate('Updateinfo')}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 40,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'blue',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  profileBio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    color: '',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoValue: {
    fontSize: 16,
    marginLeft: 10,
    color: 'blue',
  },
  editIconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default Profile;
