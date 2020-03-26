import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Tooltip from '../../General/Tooltip';

// Styling
import { Box, Flex, Text } from '../../styles';
import { SCheckbox, SLabel } from './styles';

const Checkbox = forwardRef(({ name, translation, error, width }, ref) => (
  <Flex as="fieldset" mb={30} mt={[15, 0]} flexDirection="column">
    {translation?.question && (
      <Box mb={24} width={7 / 12}>
        <SLabel as="legend" htmlFor={name}>
          {translation.question}
        </SLabel>
      </Box>
    )}
    {translation?.tooltip && (
      <Tooltip question={translation.tooltip.question} answer={translation.tooltip.answer} />
    )}
    <SCheckbox as="label" htmlFor={name} width={width} alignItems="center">
      <input type="checkbox" id={name} name={name} ref={ref} />
      <Text as="span" />
      {translation?.options?.true}
    </SCheckbox>
    {error && (
      <Text mt={10} fontSize={12}>
        {error.message}
      </Text>
    )}
  </Flex>
));

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  translation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

Checkbox.defaultProps = {
  translation: null,
  error: false,
  width: 1,
};

export default Checkbox;