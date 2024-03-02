import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Linking } from 'react-native';

const BForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [message, setMessage] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Prepare the message to send to WhatsApp
    const whatsappMessage = `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nSelected Option: ${selectedOption}\nMessage: ${message}`;

    // Create the WhatsApp URL with the pre-filled message
    const whatsappURL = `whatsapp://send?text=${encodeURIComponent(whatsappMessage)}&phone=+919319247928`;

    // Open the WhatsApp URL
     // Open the WhatsApp URL
     Linking.openURL(whatsappURL)
     .then(() => {
       // Message sent successfully, reset the form fields
       setName('');
       setContact('');
       setEmail('');
       setSelectedOption(null);
       setMessage('');
     })
     .catch((error) => {
       console.log('Error sending message to WhatsApp:', error);
       // Handle error scenario
     });
 };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Contact:</Text>
      <TextInput
        style={styles.input}
        value={contact}
        onChangeText={setContact}
        placeholder="Enter your contact number"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contact Reason:</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'Emerald' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Emerald')}
      >
        <Text style={styles.optionText}>Emerald</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'Sapphire Hall' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Sapphire Hall')}
      >
        <Text style={styles.optionText}>Sapphire Hall</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'Ruby Hall' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Ruby Hall')}
      >
        <Text style={styles.optionText}>Ruby Hall</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={styles.textArea}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#B8860B', // Dark gold color
    borderColor: '#B8860B',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#B8860B',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BForm;
