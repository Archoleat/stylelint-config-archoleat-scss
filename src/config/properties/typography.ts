import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from './experimental.ts';
import { limitedAvailability } from './limited-availability.ts';
import { nonStandard } from './non-standard.ts';

const experimentalProperty = experimental.property;
const limitedAvailabilityProperty = limitedAvailability.property;
const nonStandardProperty = nonStandard.property;
const typography = [
  await createPropertiesGroup({
    groupName: 'Font',
    properties: [
      'src',
      'font',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-weight',
      'font-style',
      'font-display',
      'font-palette',
      'font-kerning',
      'font-stretch',
      nonStandardProperty.font.smooth,
      'font-optical-sizing',
      'font-language-override',
      'font-feature-settings',
      'font-synthesis',
      limitedAvailabilityProperty.font.synthesisPosition,
      'font-synthesis-weight',
      'font-synthesis-style',
      'font-synthesis-small-caps',
      'font-variant',
      'font-variant-position',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-emoji',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-alternates',
      'font-variation-settings',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Text',
    properties: [
      'text-overflow',
      'text-rendering',
      'text-indent',
      'text-justify',
      'text-orientation',
      'text-shadow',
      'text-transform',
      'text-anchor',
      'text-wrap',
      experimentalProperty.text.wrapMode,
      experimentalProperty.text.wrapStyle,
      experimentalProperty.text.spacingTrim,
      'text-align',
      'text-align-last',
      experimentalProperty.text.sizeAdjust,
      'text-combine-upright',
      'text-decoration',
      experimentalProperty.text.decorationSkip,
      'text-decoration-skip-ink',
      'text-decoration-thickness',
      'text-decoration-line',
      'text-decoration-style',
      'text-decoration-color',
      'text-emphasis',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-emphasis-color',
      'text-underline-position',
      'text-underline-offset',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Typography',
    properties: [
      'unicode-bidi',
      'unicode-range',
      'tab-size',
      'direction',
      'writing-mode',
      'white-space',
      experimentalProperty.whiteSpaceCollapse,
      'ruby-position',
      experimentalProperty.rubyAlign,
      'line-break',
      'line-height',
      experimentalProperty.lineHeightStep,
      'word-spacing',
      'word-break',
      experimentalProperty.initial.letter,
      experimentalProperty.initial.letterAlign,
      'letter-spacing',
      'hyphens',
      'hyphenate-character',
      'hyphenate-limit-chars',
      'hanging-punctuation',
    ],
  }),
];

export { typography };