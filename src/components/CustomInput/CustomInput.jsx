import { components } from 'react-select';

const CustomInput = props => {
  const cleanProps = { ...props };

  if (cleanProps['aria-activedescendant'] === '') {
    delete cleanProps['aria-activedescendant'];
  }

  return (
    <components.Input
      {...cleanProps}
      innerRef={props.innerRef}
      autoCorrect={undefined}
      autoCapitalize={undefined}
      spellCheck={false}
    />
  );
};

export default CustomInput;
