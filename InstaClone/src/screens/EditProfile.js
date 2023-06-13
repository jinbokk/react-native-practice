import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, profileImage } = route.params;
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{ color: '#3493D9' }}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text
          style={{
            color: '#3493D9',
            marginTop: 10,
          }}>
          Change profile image
        </Text>
      </View>

      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Account Name
          </Text>
          <TextInput
            placeholder="Account Name"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Website
          </Text>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Introduce
          </Text>
          <TextInput
            placeholder="Introduce"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            marginVertical: 5,
            padding: 10,
            color: '#3493D9',
          }}>
          Switch to a professional account
        </Text>
        <Text
          style={{
            marginVertical: 5,
            padding: 10,
            color: '#3493D9',
          }}>
          Configure personal information settings
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
