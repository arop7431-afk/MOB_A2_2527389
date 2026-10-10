import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function Screen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      {children}
    </View>
  );
}

export function Card({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

export function SectionTitle({ children }) {
  return (
    <Text style={styles.sectionTitle}>
      {children}
    </Text>
  );
}

export function PrimaryButton({
  title,
  onPress,
  secondary = false,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        secondary
          ? styles.secondaryButton
          : styles.primaryButton,
        disabled && styles.disabledButton,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          secondary
            ? styles.secondaryButtonText
            : styles.primaryButtonText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function Field({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  multiline = false,
  maxLength,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#FF8080"
        maxLength={maxLength}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        selectionColor="#FF8080"
        style={[
          styles.input,
          multiline && styles.multilineInput,
          error && styles.inputError,
        ]}
      />

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 18,
  },

  card: {
    backgroundColor: '#000000',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FF8080',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#FF8080',
    marginBottom: 12,
  },

  button: {
    minHeight: 50,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
  },

  primaryButton: {
    backgroundColor: '#FF8080',
    borderColor: '#FF8080',
  },

  secondaryButton: {
    backgroundColor: '#000000',
    borderColor: '#FF8080',
    borderWidth: 2,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },

  primaryButtonText: {
    color: '#000000',
  },

  secondaryButtonText: {
    color: '#FFFFFF',
  },

  disabledButton: {
    opacity: 0.5,
  },

  field: {
    marginBottom: 15,
  },

  label: {
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 7,
    fontSize: 14,
  },

  input: {
    backgroundColor: '#000000',
    borderColor: '#FF8080',
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 15,
    color: '#FFFFFF',
  },

  multilineInput: {
    minHeight: 115,
  },

  inputError: {
    borderColor: '#FF8080',
    borderWidth: 2,
  },

  errorText: {
    color: '#FF8080',
    marginTop: 5,
    fontSize: 12,
  },
});
