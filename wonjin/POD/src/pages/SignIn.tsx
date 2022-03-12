import React, {useCallback, useRef, useState} from "react";
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../AppInner";

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const SignIn = ({navigation}: SignInScreenProps) => {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const isValid = email && password;

  const onChangeEmail = useCallback((text) => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const onSubmit = useCallback(() => {
    if(!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요');
    }
    if(!password || !password.trim()){
      return Alert.alert('알림', '비밀번호를 입력해주세요');
    }
    Alert.alert('알림', '로그인 완료');
  }, [email, password]);

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요."
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          ref={emailRef}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          secureTextEntry
          onChangeText={onChangePassword}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          onSubmitEditing={onSubmit}
          ref={passwordRef}
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable onPress={onSubmit} style={!isValid ? styles.loginButton : [styles.loginButton, styles.loginButtonActive]} disabled={isValid}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp} style={styles.loginButton}>
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
    backgroundColor: 'black'
  },
  loginButtonText: {
    color: 'white'
  }
});