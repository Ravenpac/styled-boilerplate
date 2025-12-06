import { components } from 'react-select';
import { Color, OptionContainer } from './styles';

const CustomOption = ({ ...props }: any) => {
  return (
    <components.Option {...props}>
      <OptionContainer>
        <Color color={props.data.color} />

        <span>{props.data.label}</span>
      </OptionContainer>
    </components.Option>
  );
};

export default CustomOption;
