import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16
    }
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgcolor }) => bgcolor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
`;
export const Title  = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;
export const Img = styled.Image`
    align-self: center;
`;