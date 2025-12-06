/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Select, { components } from 'react-select';
import { ArrowIcon } from '@/app/register/step-zero/styles';
import CustomOption from './CustomOption/CustomOption';
import CustomSingleValue from './CustomSingleValue/CustomSingleValue';

interface SelectProps {
  placeholder?: string;
  name: string;
  id: string;
  options: Options[];
  control: any;
  $hasError?: boolean;
  changeOption?: boolean;
  defaultValue?: Options | Options[];
  disabled?: boolean;
  value?: any;
  $isMulti?: boolean;
  onChangeAlt?: any;
  dinamicLabel?: string;
}

export interface Options {
  value: any;
  label: string;
  color?: string;
}

const CustomDropdownIndicator = ({
  selectProps: { menuIsOpen },
  ...props
}: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowIcon
        src="/img/register/select-arrow.svg"
        style={{
          transform: !menuIsOpen ? 'none' : 'rotate(180deg)',
          transition: 'transform 0.2s ease',
        }}
      />
    </components.DropdownIndicator>
  );
};

export const AnimatedSelect = ({
  name,
  id,
  options,
  control,
  disabled,
  $hasError,
  dinamicLabel,
  changeOption,
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => {
          const hasValue =
            value && (Array.isArray(value) ? value.length > 0 : true);
          const shouldAnimateLabel = isFocused || hasValue || menuIsOpen;

          return (
            <>
              <label
                htmlFor={id}
                style={{
                  position: 'absolute',
                  left: '0.7rem',
                  top: shouldAnimateLabel ? '-1rem' : '0.625rem',
                  fontSize: shouldAnimateLabel ? '0.625rem' : '1rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#747373',
                  backgroundColor: shouldAnimateLabel
                    ? '#ffffff'
                    : 'transparent',
                  padding: shouldAnimateLabel ? '0.25rem 0.375rem' : '0',
                  transition: 'all 0.2s ease-in-out',
                  pointerEvents: 'none',
                  zIndex: 10,
                  transform: shouldAnimateLabel ? 'scale(1)' : 'scale(1)',
                  transformOrigin: 'left center',
                  borderRadius: '0.5rem 0.5rem 0 0',
                }}
              >
                {dinamicLabel}
              </label>

              <Select
                onChange={(event: any) => {
                  if (event && value && event.value === value.value) {
                    onChange(null);
                  } else {
                    onChange(event);
                  }
                }}
                onBlur={() => {
                  onBlur();
                  setIsFocused(false);
                }}
                onFocus={() => setIsFocused(true)}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => {
                  setMenuIsOpen(false);
                  setIsFocused(false);
                }}
                components={{
                  IndicatorSeparator: () => null,
                  Option: changeOption ? CustomOption : components.Option,
                  SingleValue: changeOption
                    ? CustomSingleValue
                    : components.SingleValue,
                }}
                noOptionsMessage={() => 'Sem opções'}
                maxMenuHeight={168}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Selecione"
                isSearchable={false}
                value={value}
                name={name}
                options={options}
                id={id}
                isDisabled={disabled}
                styles={{
                  control: (base: any, state: any) => ({
                    ...base,
                    width: '100%',
                    height: '2.5rem',
                    minHeight: 'unset',
                    background: '#FEFEFD',
                    borderRadius: state.selectProps.menuIsOpen
                      ? '0.625rem 0.625rem 0 0'
                      : '0.625rem',
                    border: $hasError
                      ? '1px solid #DE3737'
                      : '1px solid #DEDEDE',
                    borderBottom: state.selectProps.menuIsOpen
                      ? 'none'
                      : '1px solid #DEDEDE',
                    boxShadow: 'none !important',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                    outline: 'none !important',
                    '&:hover': {
                      border: $hasError
                        ? '1px solid #DE3737'
                        : '1px solid #DEDEDE',
                      borderBottom: state.selectProps.menuIsOpen
                        ? 'none'
                        : '1px solid #DEDEDE',
                      outline: 'none !important',
                    },
                    cursor: 'pointer',
                    padding: '0',
                  }),
                  container: (base: any) => ({
                    ...base,
                    width: '100%',
                    height: 'fit-content',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                  }),
                  valueContainer: (base: any) => ({
                    ...base,
                    height: '100%',
                    padding: '0 1rem',
                    textAlign: 'left',
                  }),
                  input: (base: any) => ({
                    ...base,
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                  }),
                  indicatorsContainer: (base: any) => ({
                    ...base,
                    height: '100%',
                  }),
                  placeholder: (base: any) => ({
                    ...base,
                    color: isFocused ? '#747373' : 'transparent',
                  }),
                  menu: (base: any) => ({
                    ...base,
                    textAlign: 'left',
                    backgroundColor: '#FEFEFD',
                    borderRadius: '0 0 0.625rem 0.625rem',
                    border: $hasError
                      ? '1px solid #DE3737'
                      : '1px solid #DEDEDE',
                    borderTop: 'none !important',
                    outline: 'none !important',
                    boxShadow: 'none !important',
                    overflowX: 'hidden',
                    margin: '0',
                  }),
                  singleValue: (base: any) => ({
                    ...base,
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#1C1C1E',
                    padding: '0',
                  }),
                  option: (base: any) => ({
                    ...base,
                    backgroundColor: 'transparent !important',
                    color: '#1C1C1E',
                    border: 'none',
                    cursor: 'pointer',
                    paddingLeft: '1rem',
                  }),
                  dropdownIndicator: (base: any, state: any) => ({
                    ...base,
                    display: disabled ? 'none' : 'flex',
                    color: '#595A5B',
                    transform: state.selectProps.menuIsOpen
                      ? 'rotate(180deg)'
                      : null,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      color: '#595A5B',
                    },
                  }),
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};

export const AnimatedRelativeSelect = ({
  name,
  id,
  options,
  control,
  disabled,
  $hasError,
  dinamicLabel,
  onChangeAlt,
  changeOption,
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => {
          const hasValue =
            value && (Array.isArray(value) ? value.length > 0 : true);
          const shouldAnimateLabel = isFocused || hasValue || menuIsOpen;

          return (
            <>
              <label
                htmlFor={id}
                style={{
                  position: 'absolute',
                  left: '0.7rem',
                  top: shouldAnimateLabel ? '-1rem' : '0.625rem',
                  fontSize: shouldAnimateLabel ? '0.625rem' : '1rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#747373',
                  backgroundColor: shouldAnimateLabel
                    ? '#ffffff'
                    : 'transparent',
                  padding: shouldAnimateLabel ? '0.25rem 0.375rem' : '0',
                  transition: 'all 0.2s ease-in-out',
                  pointerEvents: 'none',
                  zIndex: 10,
                  transform: shouldAnimateLabel ? 'scale(1)' : 'scale(1)',
                  transformOrigin: 'left center',
                  borderRadius: '0.5rem 0.5rem 0 0',
                }}
              >
                {dinamicLabel}
              </label>

              <Select
                onChange={(event: any) => {
                  if (
                    event &&
                    value &&
                    event.value === value.value &&
                    onChangeAlt
                  ) {
                    onChangeAlt(null);
                  } else if (onChangeAlt) {
                    onChangeAlt(event);
                  }
                  if (event && value && event.value === value.value) {
                    onChange(null);
                  } else {
                    onChange(event);
                  }
                }}
                onBlur={() => {
                  onBlur();
                  setIsFocused(false);
                }}
                onFocus={() => setIsFocused(true)}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => {
                  setMenuIsOpen(false);
                  setIsFocused(false);
                }}
                components={{
                  IndicatorSeparator: () => null,
                  Option: changeOption ? CustomOption : components.Option,
                  SingleValue: changeOption
                    ? CustomSingleValue
                    : components.SingleValue,
                }}
                noOptionsMessage={() => 'Sem opções'}
                maxMenuHeight={168}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Selecione"
                isSearchable={false}
                value={value}
                name={name}
                options={options}
                id={id}
                isDisabled={disabled}
                styles={{
                  control: (base: any, state: any) => ({
                    ...base,
                    width: '100%',
                    height: '2.5rem',
                    minHeight: 'unset',
                    background: '#FEFEFD',
                    borderRadius: state.selectProps.menuIsOpen
                      ? '0.625rem 0.625rem 0 0'
                      : '0.625rem',
                    border: $hasError
                      ? '1px solid #DE3737'
                      : '1px solid #DEDEDE',
                    borderBottom: state.selectProps.menuIsOpen
                      ? 'none'
                      : '1px solid #DEDEDE',
                    boxShadow: 'none !important',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                    outline: 'none !important',
                    '&:hover': {
                      border: $hasError
                        ? '1px solid #DE3737'
                        : '1px solid #DEDEDE',
                      borderBottom: state.selectProps.menuIsOpen
                        ? 'none'
                        : '1px solid #DEDEDE',
                      outline: 'none !important',
                    },
                    cursor: 'pointer',
                    padding: '0',
                  }),
                  container: (base: any) => ({
                    ...base,
                    width: '100%',
                    height: 'fit-content',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                  }),
                  valueContainer: (base: any) => ({
                    ...base,
                    height: '100%',
                    padding: '0 1rem',
                    textAlign: 'left',
                  }),
                  input: (base: any) => ({
                    ...base,
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#747373',
                  }),
                  indicatorsContainer: (base: any) => ({
                    ...base,
                    height: '100%',
                  }),
                  placeholder: (base: any) => ({
                    ...base,
                    color: isFocused ? '#747373' : 'transparent',
                  }),
                  menu: (base: any) => ({
                    ...base,
                    textAlign: 'left',
                    backgroundColor: '#FEFEFD',
                    borderRadius: '0 0 0.625rem 0.625rem',
                    border: $hasError
                      ? '1px solid #DE3737'
                      : '1px solid #DEDEDE',
                    borderTop: 'none !important',
                    outline: 'none !important',
                    boxShadow: 'none !important',
                    overflowX: 'hidden',
                    margin: '0',
                    position: 'relative',
                  }),
                  singleValue: (base: any) => ({
                    ...base,
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#1C1C1E',
                    padding: '0',
                  }),
                  option: (base: any) => ({
                    ...base,
                    backgroundColor: 'transparent !important',
                    color: '#1C1C1E',
                    border: 'none',
                    cursor: 'pointer',
                    paddingLeft: '1rem',
                  }),
                  dropdownIndicator: (base: any, state: any) => ({
                    ...base,
                    display: disabled ? 'none' : 'flex',
                    color: '#595A5B',
                    transform: state.selectProps.menuIsOpen
                      ? 'rotate(180deg)'
                      : null,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      color: '#595A5B',
                    },
                  }),
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};

export const RelativeSelect = ({
  placeholder,
  name,
  id,
  options,
  control,
  disabled,
  $hasError,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, value } }) => {
        return (
          <Select
            onChange={(event: any) => {
              onChange(event);
            }}
            onBlur={onBlur}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: CustomDropdownIndicator,
            }}
            noOptionsMessage={() => 'Sem opções'}
            maxMenuHeight={188}
            className="basic-single"
            classNamePrefix="select"
            placeholder={placeholder}
            isDisabled={disabled}
            value={value}
            name={name}
            options={options}
            id={id}
            styles={{
              control: (base: any, state: any) => ({
                ...base,
                width: '100%',
                height: '2.5rem',
                minHeight: 'unset',
                background: '#FEFEFD',
                borderRadius: state.selectProps.menuIsOpen
                  ? '0.625rem 0.625rem 0 0'
                  : '0.625rem',
                border: $hasError ? '1px solid #DE3737' : '1px solid #D1D0D0',
                borderBottom: state.selectProps.menuIsOpen ? 'none' : '',
                boxShadow: 'none !important',
                fontSize: '1rem',
                fontFamily: 'Lexend',
                fontWeight: 300,
                outline: 'none !important',
                '&:hover': {
                  border: $hasError ? '1px solid #DE3737' : '1px solid #D1D0D0',

                  borderBottom: state.selectProps.menuIsOpen ? 'none' : '',
                  outline: 'none !important',
                },
                cursor: 'pointer',
                padding: '0',
                zIndex: 2,
                position: 'relative',
              }),
              container: (base: any) => ({
                ...base,
                width: '100%',
                height: 'fit-content',
                fontSize: '1rem',
                fontFamily: 'Lexend',
                fontWeight: 300,
              }),
              valueContainer: (base: any) => ({
                ...base,
                height: '100%',
                padding: '0 1rem',
                textAlign: 'left',
              }),
              input: (base: any) => ({
                ...base,
                fontSize: '1rem',
                fontFamily: 'Lexend',
                fontWeight: 300,
                color: '#454545',
              }),
              indicatorsContainer: (base: any) => ({
                ...base,
                height: '100%',
              }),
              placeholder: (base: any) => ({
                ...base,
                color: '#747373',
              }),
              menu: (base: any) => ({
                ...base,
                textAlign: 'left',
                backgroundColor: '#FEFEFD',
                borderRadius: '0 0 0.625rem 0.625rem',
                border: $hasError ? '1px solid #DE3737' : '1px solid #D1D0D0',
                borderTop: 'none ',
                outline: 'none !important',
                boxShadow: 'none !important',
                overflowX: 'hidden',
                margin: '0',
                zIndex: 1,
                position: 'absolute',
              }),
              singleValue: (base: any) => ({
                ...base,
                fontSize: '1rem',
                fontFamily: 'Lexend',
                fontWeight: 300,
                color: '#454545',
                padding: '0',
              }),
              option: (base: any) => ({
                ...base,
                display: 'flex',
                alignItems: 'center',
                height: '2.5rem',
                backgroundColor: 'transparent',
                fontSize: '1rem',
                fontFamily: 'Lexend',
                fontWeight: 300,
                color: '#454545',
                border: 'none',
                cursor: 'pointer',
                padding: '0 1rem',
              }),
              dropdownIndicator: (base: any) => ({
                ...base,
                display: disabled ? 'none' : 'flex',
                color: '#747373',
                '&:hover': {
                  color: '#747373',
                },
              }),
            }}
          />
        );
      }}
    />
  );
};
