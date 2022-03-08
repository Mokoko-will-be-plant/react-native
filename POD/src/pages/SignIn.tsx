import React, {useCallback, useState} from "react";
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isValid = email && password;

  const onChangeEmail = useCallback((text) => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('로그인 실패', '땡입니다~');
  }, []);

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput style={styles.textInput} placeholder="이메일을 입력해주세요." onChangeText={onChangeEmail} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput style={styles.textInput} placeholder="비밀번호를 입력해주세요." onChangeText={onChangePassword} />
      </View>
      <View style={styles.buttonZone}>
        <Pressable onPress={onSubmit} style={!isValid ? styles.loginButton : [styles.loginButton, styles.loginButtonActive]} disabled={isValid}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20
  },
  textInput: {
    padding: 5,
    borderBottomWidth: 1
  },
  buttonZone: {
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  loginButtonActive : {

  },
  loginButtonText: {
    color: 'white'
  }
});