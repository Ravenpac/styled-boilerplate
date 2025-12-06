import { components } from 'react-select';
import { Color, OptionContainer } from './styles';

const CustomSingleValue = ({ ...props }: any) => {
  return (
    <components.SingleValue {...props}>
      <OptionContainer>
        <Color color={props.data.color} />

        <span>{props.data.label}</span>
      </OptionContainer>
    </components.SingleValue>
  );
};

export default CustomSingleValue;
