import { PersonalizedSwitch, SwitchBall } from './styles';

interface SwitchProps {
  $isChecked: boolean;
  onClick: any;
}

const TableSwitch = ({ $isChecked, onClick }: SwitchProps) => {
  return (
    <PersonalizedSwitch $isChecked={$isChecked} onClick={onClick}>
      <SwitchBall $isChecked={$isChecked} />
    </PersonalizedSwitch>
  );
};

export default TableSwitch;
