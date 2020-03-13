import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  border: 1px solid #666;
  border-radius: 75px;
  background: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
`;
export const ContentDog = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const BreedText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000;
  text-transform: uppercase;
`;
