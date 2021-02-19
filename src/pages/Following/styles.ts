import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

const statusBarHeight = 
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

interface WrapperProps {
  bgColor: Boolean;
}

export const Wrapper = styled.SafeAreaView<WrapperProps>`
  background: ${({bgColor}) => bgColor ? '#fff' : '#000'};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
  padding-left: 14px;
`;

export const Main = styled.View``;

