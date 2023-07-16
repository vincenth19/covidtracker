import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

export default function CustomRadioBtn({
  radioOptions,
  radioName,
  radioDefaultValue,
  setter,
  ...props
}) {
  const options = radioOptions;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: radioName,
    defaultValue: radioDefaultValue,
    onChange: setter,
  });

  const group = getRootProps();

  return (
    <HStack {...props} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadio key={value} {...radio}>
            {value.toUpperCase()}
          </CustomRadio>
        );
      })}
    </HStack>
  );
}

function CustomRadio(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        fontSize="0.8rem"
        fontWeight="semibold"
        {...checkbox}
        cursor="pointer"
        borderRadius={50}
        _checked={{
          bg: "red.100",
          color: "red.800",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}
